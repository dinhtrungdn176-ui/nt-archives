import { n as __toESM$1 } from "../_runtime.mjs";
import { t as photos } from "./photosData-3OXNe5Nk.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/map-DV14fs-n.js
var import_react = /* @__PURE__ */ __toESM$1(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var MAPBOX_TOKEN = "pk.eyJ1IjoiZnJhZ21lbnRzYnl0cnVuZyIsImEiOiJjbXF5NDc4MDMxdTRjMnBteGhpZzE5Z3BhIn0.az2Z83yvTVI8giqmVFzvSg";
function MapContent() {
	const mapContainerRef = (0, import_react.useRef)(null);
	const mapRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined" || !mapContainerRef.current) return;
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css";
		document.head.appendChild(link);
		import("./mapbox-gl-BiVesMEQ.mjs").then((m) => /* @__PURE__ */ __toESM(m.default)).then((mapboxgl) => {
			const mapbox = mapboxgl.default || mapboxgl;
			mapbox.accessToken = MAPBOX_TOKEN;
			if (mapRef.current) return;
			mapRef.current = new mapbox.Map({
				container: mapContainerRef.current,
				style: "mapbox://styles/mapbox/light-v11",
				center: [-73.5673, 45.5017],
				zoom: 11,
				trackResize: true
			});
			mapRef.current.on("load", () => {
				mapRef.current.resize();
			});
			photos.filter((p) => p.lat && p.lng).forEach((photo) => {
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
				new mapbox.Marker(el).setLngLat([photo.lng, photo.lat]).setPopup(popup).addTo(mapRef.current);
			});
		}).catch((err) => {
			console.error("Lỗi khởi tạo bản đồ:", err);
		});
		return () => {
			if (mapRef.current) {
				mapRef.current.remove();
				mapRef.current = null;
			}
			if (document.head.contains(link)) document.head.removeChild(link);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-screen h-screen relative bg-neutral-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "absolute top-6 left-6 z-10 bg-white border border-neutral-200 px-4 py-2 font-mono text-[11px] tracking-widest uppercase hover:bg-neutral-50 transition-colors shadow-sm rounded-sm",
			children: "← Trở về"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: mapContainerRef,
			className: "w-full h-full"
		})]
	});
}
//#endregion
export { MapContent as component, __commonJSMin as t };
