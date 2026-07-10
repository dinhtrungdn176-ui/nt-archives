import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { photos } from "../data/-photosData";

function MapboxContainer({
  setLightbox,
}: {
  setLightbox: (photo: any) => void;
}) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const loadMapbox = async () => {
      const mapboxgl = await import("mapbox-gl");

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css";
      document.head.appendChild(link);

      const mapbox = mapboxgl.default || mapboxgl;
      mapbox.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

      if (!mapContainerRef.current || mapRef.current) return;

      mapRef.current = new mapbox.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/fragmentsbytrung/cmr7h7ce3000l01qih967arbd",
        center: [-73.5673, 45.5017],
        zoom: 11,
      });

      mapRef.current.on("load", () => {
        photos.forEach((photo) => {
          if (photo.lat && photo.lng) {
            const el = document.createElement("div");
            el.innerHTML = `
              <div class="thumbnail-container">
                <img src="${photo.image}" class="thumbnail" />
              </div>
            `;

            new mapboxgl.Marker(el)
              .setLngLat([photo.lng, photo.lat])
              .addTo(mapRef.current);

            el.addEventListener("click", () => {
              setLightbox(photo);
            });
          }
        });
      });
    };

    loadMapbox();
    return () => mapRef.current?.remove();
  }, [setLightbox]);

  return <div ref={mapContainerRef} className="w-full h-full" />;
}

function MapContent() {
  const [isClient, setIsClient] = useState(false);
  const [lightbox, setLightbox] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-screen h-screen relative bg-neutral-50">
      <Link
        to="/"
        className="absolute top-6 left-6 z-10 bg-white border border-neutral-200 px-4 py-2 font-mono text-[11px] shadow-sm rounded-sm"
      >
        ← Trở về
      </Link>

      {isClient ? (
        <MapboxContainer setLightbox={setLightbox} />
      ) : (
        <div className="w-full h-full flex items-center justify-center font-mono">
          Đang tải bản đồ...
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-900/60 backdrop-blur-[6px] p-4 md:p-10 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white p-8 rounded-sm shadow-sm border border-neutral-200 flex flex-col md:flex-row gap-8 max-w-5xl w-full cursor-default font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1">
              <img
                src={lightbox.image}
                className="w-full h-auto object-cover rounded-sm"
                alt={lightbox.title}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  {lightbox.title}
                </h2>
                <p className="text-neutral-500 text-[11px] mt-1">
                  📍 {lightbox.location}
                </p>
              </div>
              <div className="text-[11px] border-t border-neutral-100 pt-4 space-y-2 text-neutral-600">
                <p>
                  📷 {lightbox.camera} | {lightbox.lens}
                </p>
                <p>
                  ISO: {lightbox.iso} | Shutter: {lightbox.shutterSpeed}
                </p>
                <p>📅 {lightbox.date}</p>
              </div>
              {lightbox.caption && (
                <p className="text-[11px] italic text-neutral-700 leading-relaxed">
                  "{lightbox.caption}"
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} // <--- DẤU NÀY LÀ CÁI BẠN THIẾU

export const Route = createFileRoute("/map")({
  ssr: false,
  component: MapContent,
});
