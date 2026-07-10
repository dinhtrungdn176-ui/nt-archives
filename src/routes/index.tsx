import "mapbox-gl/dist/mapbox-gl.css";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { photos, type Photo } from "../data/-photosData";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "nt-archives — Dinh Trung Nguyen" },
      {
        name: "description",
        content:
          "A personal photography archive by Dinh Trung Nguyen. Quiet, documentary, ongoing.",
      },
      { property: "og:title", content: "nt-archives — Dinh Trung Nguyen" },
      {
        property: "og:description",
        content:
          "A personal photography archive by Dinh Trung Nguyen. Quiet, documentary, ongoing.",
      },
    ],
  }),
  component: Index,
});

type Mode = "journal" | "overview";

function Index() {
  const [mode, setMode] = useState<Mode>("journal");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-mono text-[11px] antialiased">
      {/* 1. Đưa Header vào một div cố định ở top */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100/50">
        <Header mode={mode} setMode={setMode} />
      </div>

      {/* 2. Cấu trúc grid giữ nguyên, nhưng có thể bỏ khoảng cách pt-12 nếu thấy dư thừa */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-[1fr_64px] gap-12 items-start w-full">
        <main className="min-w-0 pb-32 pt-12">
          {(() => {
            const reversedPhotos = [...photos].reverse();
            return mode === "journal" ? (
              <Journal photos={reversedPhotos} onOpen={setLightbox} />
            ) : (
              <Overview photos={reversedPhotos} onOpen={setLightbox} />
            );
          })()}
        </main>

        {/* 3. Đẩy sticky top xuống thấp hơn một chút để không bị dính sát header */}
        <aside className="sticky top-32 hidden lg:block pt-12 shrink-0">
          <Footer />
        </aside>
      </div>

      <div className="lg:hidden px-6 pb-16">
        <Footer />
      </div>

      {lightbox && (
        <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}

function Header({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  return (
    <header className="mx-auto max-w-5xl px-6 pt-10 sm:px-8 sm:pt-14">
      {/* Thay đổi grid: trên mobile để 1 cột, trên sm trở lên để 2 cột */}
      <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto] items-start sm:items-end gap-6">
        {/* CỘT TRÁI */}
        <div className="flex items-center gap-4 min-w-0">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 object-contain shrink-0"
          />
          <div className="min-w-0">
            <h1 className="text-base font-medium tracking-tight whitespace-nowrap">
              nt-archives
            </h1>
            <p className="mt-1 text-sm text-neutral-500">Dinh Trung Nguyen</p>
          </div>
        </div>

        {/* CỘT PHẢI: Menu */}
        <nav className="flex shrink-0 items-center gap-4 text-sm w-full sm:w-auto justify-start sm:justify-end">
          <button
            onClick={() => setMode("journal")}
            className={mode === "journal" ? "font-bold" : "text-neutral-400"}
          >
            Nhật ký
          </button>
          <span className="text-neutral-300">/</span>
          <button
            onClick={() => setMode("overview")}
            className={mode === "overview" ? "font-bold" : "text-neutral-400"}
          >
            Kho ảnh
          </button>
          <span className="text-neutral-300">/</span>
          <Link to="/map" className="text-neutral-400 hover:text-neutral-700">
            Bản đồ
          </Link>
        </nav>
      </div>
      <div className="mt-10 h-px w-full bg-neutral-100" />
    </header>
  );
}

function Journal({
  photos,
  onOpen,
}: {
  photos: Photo[];
  onOpen: (p: Photo) => void;
}) {
  return (
    <div className="space-y-32 pt-8">
      {/* Chỉ sử dụng photos.map như bình thường */}
      {photos.map((p, i) => (
        <Entry key={i} photo={p} onOpen={onOpen} index={i} />
      ))}
    </div>
  );
}

function Entry({
  photo,
  onOpen,
  index,
}: {
  photo: Photo;
  onOpen: (p: Photo) => void;
  index: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={
        "transition-all duration-700 ease-out " +
        (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")
      }
    >
      <div className="mt-6 grid grid-cols-1 gap-8 sm:mt-8 sm:grid-cols-[1fr_2fr] sm:items-start w-full">
        {/* CỘT 1 (BÊN TRÁI): Gom toàn bộ Chữ và Thông số kỹ thuật vào đây */}
        <div className="space-y-6 min-w-0">
          {/* Phần 1: Tên & Địa điểm */}
          <div>
            <h2 className="text-base font-medium tracking-tight uppercase">
              {photo.title}
            </h2>
            <p className="mt-1 text-sm text-neutral-500">{photo.location}</p>
            {photo.caption && (
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-neutral-700">
                {photo.caption}
              </p>
            )}
          </div>

          {/* Phần 2: Thông số kỹ thuật (Được đẩy xuống dưới phần tên ở cột trái) */}
          <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-neutral-500 sm:grid-cols-1 sm:text-left">
            <dt className="sr-only">Camera</dt>
            <dd className="flex items-center gap-1">
              <span>📷</span> {photo.camera}
            </dd>
            <dt className="sr-only">Lens</dt>
            <dd>{photo.lens}</dd>
            <dt className="sr-only">Date</dt>
            <dd>{photo.date}</dd>
          </dl>
        </div>

        {/* CỘT 2 (BÊN PHẢI): Chỉ chứa duy nhất Ảnh để ảnh bung to ra */}
        <div className="w-full">
          <button
            onClick={() => onOpen(photo)}
            className="group block w-full overflow-hidden bg-neutral-50"
            aria-label={`Open ${photo.title}`}
          >
            <img
              src={photo.image}
              alt={photo.title}
              loading={index === 0 ? "eager" : "lazy"}
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function Overview({
  photos,
  onOpen,
}: {
  photos: Photo[];
  onOpen: (p: Photo) => void;
}) {
  return (
    <div className="pt-8">
      <div className="columns-1 gap-2 sm:columns-2 lg:columns-3 [&>*]:mb-2">
        {/* Giữ nguyên photos.map để nhận dữ liệu đã xử lý từ hàm Index */}
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => onOpen(p)}
            className="group block w-full overflow-hidden bg-neutral-50"
            aria-label={`Open ${p.title}`}
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Lightbox({ photo, onClose }: { photo: Photo; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
    >
      <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-10">
        <div className="flex max-h-[78vh] w-full max-w-5xl flex-col items-center justify-center">
          <img
            src={photo.image}
            alt={photo.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[78vh] max-w-full object-contain"
          />
        </div>

        <div className="mt-6 grid w-full max-w-5xl gap-6 text-white sm:mt-8 sm:grid-cols-[1fr_auto]">
          <div className="min-w-0">
            <h2 className="text-base font-medium tracking-tight">
              {photo.title}
            </h2>
            <p className="mt-1 text-sm text-white/60">{photo.location}</p>
            {photo.caption && (
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/80">
                {photo.caption}
              </p>
            )}
          </div>
          <dl className="grid shrink-0 grid-cols-2 gap-x-8 gap-y-1 text-xs text-white/60 sm:grid-cols-1 sm:text-right">
            <dt className="sr-only">Camera</dt>
            <dd>{photo.camera}</dd>
            <dt className="sr-only">Lens</dt>
            <dd>{photo.lens}</dd>
            <dt className="sr-only">Date</dt>
            <dd>{photo.date}</dd>
          </dl>
        </div>

        <button
          onClick={onClose}
          aria-label="Close"
          className="fixed right-5 top-5 text-xs tracking-wide text-white/70 transition-colors hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    // Đảm bảo không có class làm nó bị đẩy ra ngoài
    <footer className="flex flex-col items-center gap-6 w-16">
      <a
        href="https://www.instagram.com/ntrung.archive/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-neutral-900 transition-colors"
      >
        <IGIcon />
      </a>
      <a
        href="https://www.facebook.com/nguyen.trung.519425?locale=vi_VN"
        target="_blank"
        rel="noreferrer"
        className="hover:text-neutral-900 transition-colors"
      >
        <FBIcon />
      </a>
      <a
        href="mailto:dinhtrungdn176@gmail.com"
        className="hover:text-neutral-900 transition-colors"
      >
        <MailIcon />
      </a>
    </footer>
  );
}

function IGIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
function FBIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14 8h2V5h-2.5A3.5 3.5 0 0 0 10 8.5V11H8v3h2v7h3v-7h2.2l.8-3H13V8.8c0-.5.4-.8.9-.8H14Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
