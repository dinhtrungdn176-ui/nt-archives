import { n as __toESM } from "../_runtime.mjs";
import { t as photos } from "./photosData-3OXNe5Nk.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import "./router-Dq1Qey28.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BGarTkwn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const [mode, setMode] = (0, import_react.useState)("journal");
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!lightbox) return;
		const onKey = (e) => {
			if (e.key === "Escape") setLightbox(null);
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [lightbox]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-neutral-900 antialiased font-mono tracking-widest uppercase text-[11px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				mode,
				setMode
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-5xl px-6 pb-32 pt-12 sm:px-8",
				children: (() => {
					const reversedPhotos = [...photos].reverse();
					return mode === "journal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journal, {
						photos: reversedPhotos,
						onOpen: setLightbox
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {
						photos: reversedPhotos,
						onOpen: setLightbox
					});
				})()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				photo: lightbox,
				onClose: () => setLightbox(null)
			})
		]
	});
}
function Header({ mode, setMode }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto max-w-5xl px-6 pt-10 sm:px-8 sm:pt-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-base font-medium tracking-tight",
					children: "nt-archives"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-neutral-500",
					children: "Dinh Trung Nguyen"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex shrink-0 items-center gap-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMode("journal"),
						className: "transition-colors " + (mode === "journal" ? "text-neutral-900 font-bold" : "text-neutral-400 hover:text-neutral-700"),
						children: "Nhật ký "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-neutral-300",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMode("overview"),
						className: "transition-colors " + (mode === "overview" ? "text-neutral-900 font-bold" : "text-neutral-400 hover:text-neutral-700"),
						children: "Kho ảnh "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-neutral-300",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/map",
						search: {},
						className: "text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer [&.active]:text-neutral-900 [&.active]:font-bold",
						children: "Bản đồ"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-px w-full bg-neutral-100" })]
	});
}
function Journal({ photos, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-32 pt-8",
		children: photos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Entry, {
			photo: p,
			onOpen,
			index: i
		}, i))
	});
}
function Entry({ photo, onOpen, index }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setVisible(true);
					obs.disconnect();
				}
			});
		}, { threshold: .08 });
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "transition-all duration-700 ease-out " + (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid grid-cols-1 gap-8 sm:mt-8 sm:grid-cols-[1fr_2fr] sm:items-start w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-medium tracking-tight",
						children: photo.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-neutral-500",
						children: photo.location
					}),
					photo.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-prose text-sm leading-relaxed text-neutral-700",
						children: photo.caption
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-neutral-500 sm:grid-cols-1 sm:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "sr-only",
							children: "Camera"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📷" }),
								" ",
								photo.camera
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "sr-only",
							children: "Lens"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: photo.lens }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "sr-only",
							children: "Date"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: photo.date })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onOpen(photo),
					className: "group block w-full overflow-hidden bg-neutral-50",
					"aria-label": `Open ${photo.title}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo.image,
						alt: photo.title,
						loading: index === 0 ? "eager" : "lazy",
						className: "h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
					})
				})
			})]
		})
	});
}
function Overview({ photos, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pt-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "columns-1 gap-2 sm:columns-2 lg:columns-3 [&>*]:mb-2",
			children: photos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onOpen(p),
				className: "group block w-full overflow-hidden bg-neutral-50",
				"aria-label": `Open ${p.title}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.title,
					loading: "lazy",
					className: "h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
				})
			}, i))
		})
	});
}
function Lightbox({ photo, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		onClick: onClose,
		className: "fixed inset-0 z-50 overflow-y-auto bg-black/90",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": photo.title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col items-center justify-center p-4 sm:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex max-h-[78vh] w-full max-w-5xl flex-col items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo.image,
						alt: photo.title,
						onClick: (e) => e.stopPropagation(),
						className: "max-h-[78vh] max-w-full object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid w-full max-w-5xl gap-6 text-white sm:mt-8 sm:grid-cols-[1fr_auto]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-base font-medium tracking-tight",
								children: photo.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/60",
								children: photo.location
							}),
							photo.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-prose text-sm leading-relaxed text-white/80",
								children: photo.caption
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid shrink-0 grid-cols-2 gap-x-8 gap-y-1 text-xs text-white/60 sm:grid-cols-1 sm:text-right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Camera"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: photo.camera }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Lens"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: photo.lens }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: photo.date })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					"aria-label": "Close",
					className: "fixed right-5 top-5 text-xs tracking-wide text-white/70 transition-colors hover:text-white",
					children: "Close"
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mx-auto max-w-5xl px-6 pb-16 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-full bg-neutral-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© \xA0Dinh Trung Nguyen" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/by.ntrung/",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Instagram",
						className: "transition-colors hover:text-neutral-900",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IGIcon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.facebook.com/nguyen.trung.519425?locale=vi_VN",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Facebook",
						className: "transition-colors hover:text-neutral-900",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FBIcon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:dinhtrungdn176@gmail.com",
						"aria-label": "Email",
						className: "transition-colors hover:text-neutral-900",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailIcon, {})
					})
				]
			})]
		})]
	});
}
function IGIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "3",
				width: "18",
				height: "18",
				rx: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.5",
				cy: "6.5",
				r: "0.8",
				fill: "currentColor"
			})
		]
	});
}
function FBIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 8h2V5h-2.5A3.5 3.5 0 0 0 10 8.5V11H8v3h2v7h3v-7h2.2l.8-3H13V8.8c0-.5.4-.8.9-.8H14Z" })
	});
}
function MailIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "5",
			width: "18",
			height: "14",
			rx: "2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m3 7 9 6 9-6" })]
	});
}
//#endregion
export { Index as component };
