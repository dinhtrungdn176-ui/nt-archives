import { createFileRoute, Link } from "@tanstack/react-router"; // 👈 SỬA CHỖ NÀY: Thêm Link vào đây
import { useEffect, useRef } from "react";
import { photos } from "../data/-photosData";

// THAY ĐỔI 1: Thay thế bằng Public Access Token chuẩn của Mapbox
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

function MapContent() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mapContainerRef.current) return;

    // Chèn trực tiếp thẻ link CSS để tránh bộ nén của Vite
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css";
    document.head.appendChild(link);

    // Nạp thư viện động dưới Client
    import("mapbox-gl" as any)
      .then((mapboxgl) => {
        const mapbox = mapboxgl.default || mapboxgl;
        mapbox.accessToken = MAPBOX_TOKEN;

        if (mapRef.current) return;

        // THAY ĐỔI 2: Sử dụng style bản đồ "streets-v12" có độ tương thích cao nhất
        mapRef.current = new mapbox.Map({
          container: mapContainerRef.current,
          // THAY ĐỔI 1: Chuyển sang style cơ bản nhất "outdoors-v12" hoặc "light-v11" chuẩn
          style: "mapbox://styles/mapbox/light-v11",
          center: [-73.5673, 45.5017],
          zoom: 11,
          trackResize: true,
        });

        // Ép bản đồ vẽ lại layout ngay khi nạp xong
        mapRef.current.on("load", () => {
          mapRef.current.resize();
        });

        // Cắm ghim dữ liệu ảnh của bạn
        const mapPhotos = photos.filter((p) => p.lat && p.lng);
        mapPhotos.forEach((photo) => {
          const el = document.createElement("div");
          el.className = "cursor-pointer text-2xl filter drop-shadow-md";
          el.innerHTML = "📍";

          const popup = new mapbox.Popup({ offset: 25 }).setHTML(`
          <div style="padding: 4px; font-family: monospace; min-width: 120px; text-transform: uppercase; font-size: 11px;">
            <img src="${photo.image}" alt="${photo.title}" style="width: 120px; height: 80px; object-fit: cover; border-radius: 2px;" />
            <h3 style="font-weight: bold; margin-top: 6px; color: #111; margin-bottom: 2px;">${photo.title}</h3>
            <p style="color: #666; margin: 0;">${photo.location}</p>
          </div>
        `);

          new mapbox.Marker(el)
            .setLngLat([photo.lng!, photo.lat!])
            .setPopup(popup)
            .addTo(mapRef.current);
        });
      })
      .catch((err) => {
        console.error("Lỗi khởi tạo bản đồ:", err);
      });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="w-screen h-screen relative bg-neutral-50">
      {/* 🔴 SỬA CHỖ NÀY: Thay thẻ <a> bằng <Link> và href bằng to */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-10 bg-white border border-neutral-200 px-4 py-2 font-mono text-[11px] tracking-widest uppercase hover:bg-neutral-50 transition-colors shadow-sm rounded-sm"
      >
        ← Trở về
      </Link>
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}

export const Route = createFileRoute("/map")({
  ssr: false,
  component: MapContent,
});
