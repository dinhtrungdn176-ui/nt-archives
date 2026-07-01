import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "nt-archives — Đinh Trung Nguyễn" },
        {
          name: "description",
          content: "Kho lưu trữ nhiếp ảnh tối giản cá nhân.",
        },
      ],
      links: [{ rel: "stylesheet", href: appCss }],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // States quản lý màn hình chào & trình phát nhạc
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  // States quản lý việc kéo thả (Dragging)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  // Khởi tạo đối tượng Audio một lần duy nhất
  useEffect(() => {
    const audio = new Audio("/mysong.mp3");
    audio.loop = true;
    audio.volume = volume;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.pause();
    };
  }, []);

  // Xử lý sự kiện di chuyển chuột/tay khi đang kéo
  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!isDragging || !dragRef.current) return;

      let newX = clientX - offsetRef.current.x;
      let newY = clientY - offsetRef.current.y;

      const rect = dragRef.current.getBoundingClientRect();

      // Giới hạn trong phạm vi màn hình
      newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
      newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) =>
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  // Khi bắt đầu click chuột xuống để kéo (Mouse)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Tránh kích hoạt kéo khi người dùng tương tác với nút bấm hoặc thanh cuộn nhạc/volume
    if (
      (e.target as HTMLElement).tagName === "INPUT" ||
      (e.target as HTMLElement).tagName === "BUTTON"
    ) {
      return;
    }
    setIsDragging(true);
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      offsetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  // Khi bắt đầu chạm tay để kéo (Mobile Touch)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (
      (e.target as HTMLElement).tagName === "INPUT" ||
      (e.target as HTMLElement).tagName === "BUTTON"
    ) {
      return;
    }
    setIsDragging(true);
    if (dragRef.current && e.touches.length > 0) {
      const rect = dragRef.current.getBoundingClientRect();
      offsetRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
  };

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Tự động phát bị chặn:", err));
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <QueryClientProvider client={queryClient}>
      {!hasEntered ? (
        <div className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center text-white font-mono z-[9999]">
          <h1 className="text-sm tracking-[0.3em] uppercase mb-8 text-neutral-400 select-none animate-pulse">
            NT–ARCHIVES
          </h1>
          <button
            onClick={handleEnter}
            className="text-xs tracking-widest uppercase border border-neutral-700 px-6 py-3 hover:bg-white hover:text-black transition-all duration-500 ease-in-out"
          >
            Bước vào / Enter
          </button>
        </div>
      ) : (
        <>
          <Outlet />

          {/* 🎵 THANH PHÁT NHẠC DI CHUYỂN TỰ DO (DRAGGABLE) */}
          <div
            ref={dragRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{
              position: "fixed",
              // Dùng translate để căn giữa hoặc để yên vị trí cũ,
              // quan trọng là bỏ các logic 'auto' phức tạp đi
              left: position.x || 24,
              top: position.y || "auto",
              bottom: position.y ? "auto" : "24px",
              right: position.x ? "auto" : "24px",
              cursor: isDragging ? "grabbing" : "grab",
              touchAction: "none",
            }}
            // Thêm class này để nó không tự ý phồng to làm vỡ bố cục:
            className="z-[999] flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md text-white px-3 py-2 rounded-full shadow-lg border border-neutral-800 font-mono text-[10px] tracking-wider select-none shrink-0"
          >
            <button
              onClick={togglePlay}
              className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black hover:scale-105 transition-transform cursor-pointer"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            {/* Khu vực Tên bài hát chạy chữ */}
            <div className="flex flex-col w-[120px] overflow-hidden shrink-0">
              <div className="w-full overflow-hidden relative h-[14px]">
                <div className="animate-marquee whitespace-nowrap inline-block font-semibold text-neutral-200 absolute">
                  Tầng Thượng 102 - Cá Hồi Hoang &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              </div>
              <span className="text-[9px] text-neutral-400 mt-0.5">
                {formatTime(currentTime)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-20 md:w-28 h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-white"
            />

            <div className="flex items-center gap-1.5 border-l border-neutral-800 pl-3">
              <span className="text-neutral-400 text-xs">🔈</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={volume}
                onChange={handleVolumeChange}
                className="w-12 h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>
          </div>
        </>
      )}
    </QueryClientProvider>
  );
}
