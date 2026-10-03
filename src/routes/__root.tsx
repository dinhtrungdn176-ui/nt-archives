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
import { Analytics } from "@vercel/analytics/react";

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
      links: [
        { rel: "stylesheet", href: appCss },
        // Thêm các dòng này (thay 'logo.png' bằng tên file thật của bạn)
        { rel: "icon", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
      ],
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
        <Analytics />
        <Scripts />
      </body>
    </html>
  );
}
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const audio = new Audio("/mysong.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current = audio;
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.pause();
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      (e.target as HTMLElement).tagName === "INPUT" ||
      (e.target as HTMLElement).tagName === "BUTTON"
    )
      return;
    setIsDragging(true);
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      offsetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dragRef.current) return;
      setPosition({
        x: e.clientX - offsetRef.current.x,
        y: e.clientY - offsetRef.current.y,
      });
    };
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleEnter = () => {
    setHasEntered(true);
    audioRef.current
      ?.play()
      .then(() => setIsPlaying(true))
      .catch(console.error);
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

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <QueryClientProvider client={queryClient}>
      {!hasEntered ? (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center">
          <video
            src="/intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover blur-[6px]"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-sm tracking-[0.3em] uppercase mb-8 text-white font-bold select-none animate-pulse">
              NT–ARCHIVES
            </h1>
            <button
              onClick={handleEnter}
              className="text-xs tracking-widest uppercase border border-white/60 text-white px-8 py-3 hover:bg-white hover:text-black transition-all"
            >
              Bước vào / Enter
            </button>
          </div>
        </div>
      ) : (
        <>
          <Outlet />
          <div
            ref={dragRef}
            onMouseDown={handleMouseDown}
            style={{
              position: "fixed",
              left: position.x || 24,
              top: position.y || "auto",
              bottom: position.y ? "auto" : "24px",
              right: position.x ? "auto" : "24px",
              cursor: isDragging ? "grabbing" : "grab",
              zIndex: 999,
            }}
            className="flex items-center gap-3 bg-neutral-900/90 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg border border-neutral-800 font-mono text-[11px] select-none w-fit"
          >
            <button
              onClick={togglePlay}
              className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shrink-0"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
            <div className="flex flex-col truncate max-w-[120px]">
              <span className="truncate font-bold">Emotional Rain</span>
              <span className="opacity-70">{formatTime(currentTime)}</span>
            </div>
          </div>
        </>
      )}
    </QueryClientProvider>
  );
}
