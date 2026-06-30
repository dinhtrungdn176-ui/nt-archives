globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/1-DW5txGys.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b20b-/GDExy77X3v+NM6ONZ3txVa0dKU\"",
		"mtime": "2026-06-30T21:37:56.279Z",
		"size": 111115,
		"path": "../public/assets/1-DW5txGys.jpg"
	},
	"/assets/11-B-b0zkNA.jpg": {
		"type": "image/jpeg",
		"etag": "\"1802f-/yVJ7WH3gz4fPqTFmkprDRJ12BE\"",
		"mtime": "2026-06-30T21:37:56.279Z",
		"size": 98351,
		"path": "../public/assets/11-B-b0zkNA.jpg"
	},
	"/assets/10--0_KNUSF.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d257-KS4j+pxIUVrz9yaYF7TLat8GMXY\"",
		"mtime": "2026-06-30T21:37:56.279Z",
		"size": 119383,
		"path": "../public/assets/10--0_KNUSF.jpg"
	},
	"/assets/13-DaB5uhD8.JPG": {
		"type": "image/jpeg",
		"etag": "\"41ff2-0RDYgJRobyws9DcYGzdyBb7KxV8\"",
		"mtime": "2026-06-30T21:37:56.281Z",
		"size": 270322,
		"path": "../public/assets/13-DaB5uhD8.JPG"
	},
	"/assets/2-VC2rLbDn.jpg": {
		"type": "image/jpeg",
		"etag": "\"162d3-ON1XA5DyHWyJl0xxtR4jeqvSPtQ\"",
		"mtime": "2026-06-30T21:37:56.287Z",
		"size": 90835,
		"path": "../public/assets/2-VC2rLbDn.jpg"
	},
	"/assets/25-kJ0ufaNh.jpeg": {
		"type": "image/jpeg",
		"etag": "\"45d23-eYVPEk/70Y3rr2X9h2vFNuVaX80\"",
		"mtime": "2026-06-30T21:37:56.290Z",
		"size": 285987,
		"path": "../public/assets/25-kJ0ufaNh.jpeg"
	},
	"/assets/3-BjDQiggp.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d084-JiJjK4mlpZ8CtkfUVbw5/jYG3DI\"",
		"mtime": "2026-06-30T21:37:56.294Z",
		"size": 118916,
		"path": "../public/assets/3-BjDQiggp.jpg"
	},
	"/assets/17-CXId2XEf.JPG": {
		"type": "image/jpeg",
		"etag": "\"8e3b7-9LGG0PWydIWj9l6S5ONsvMc9cyE\"",
		"mtime": "2026-06-30T21:37:56.284Z",
		"size": 582583,
		"path": "../public/assets/17-CXId2XEf.JPG"
	},
	"/assets/14-DFIGrLSz.JPG": {
		"type": "image/jpeg",
		"etag": "\"9dce2-1rJIM32ZsQCLrzZy9vA8myXK6wI\"",
		"mtime": "2026-06-30T21:37:56.281Z",
		"size": 646370,
		"path": "../public/assets/14-DFIGrLSz.JPG"
	},
	"/assets/18-dXOICkwF.JPG": {
		"type": "image/jpeg",
		"etag": "\"abb68-bRs8D3wTsO+EZDWBGrf8E7X0nKE\"",
		"mtime": "2026-06-30T21:37:56.286Z",
		"size": 703336,
		"path": "../public/assets/18-dXOICkwF.JPG"
	},
	"/assets/20-BbQnW_Cf.JPG": {
		"type": "image/jpeg",
		"etag": "\"ab733-N9q+u72T1tbvck2Hf+9dB6buhUo\"",
		"mtime": "2026-06-30T21:37:56.287Z",
		"size": 702259,
		"path": "../public/assets/20-BbQnW_Cf.JPG"
	},
	"/assets/23-D8mLMSJN.jpeg": {
		"type": "image/jpeg",
		"etag": "\"b5791-aHLF5aDBfo6hRHS3oWesSJ8arEU\"",
		"mtime": "2026-06-30T21:37:56.290Z",
		"size": 743313,
		"path": "../public/assets/23-D8mLMSJN.jpeg"
	},
	"/assets/24-BDxSySQC.jpeg": {
		"type": "image/jpeg",
		"etag": "\"e7197-HkQY4eSlEYqJ2hfzD73+2RjeWH0\"",
		"mtime": "2026-06-30T21:37:56.290Z",
		"size": 946583,
		"path": "../public/assets/24-BDxSySQC.jpeg"
	},
	"/assets/19-CCLQX_GY.JPG": {
		"type": "image/jpeg",
		"etag": "\"1be212-8Byp0RojUapcO67CD6C9/4KaU3s\"",
		"mtime": "2026-06-30T21:37:56.286Z",
		"size": 1827346,
		"path": "../public/assets/19-CCLQX_GY.JPG"
	},
	"/assets/22-C-redcvY.JPG": {
		"type": "image/jpeg",
		"etag": "\"2105c1-3buNC/H3kNImHHLOWdSpKsHVp7M\"",
		"mtime": "2026-06-30T21:37:56.289Z",
		"size": 2164161,
		"path": "../public/assets/22-C-redcvY.JPG"
	},
	"/assets/26-19Eqisc0.jpeg": {
		"type": "image/jpeg",
		"etag": "\"255611-Gg4Oh0xxmax3O+AqGYujjM1ocls\"",
		"mtime": "2026-06-30T21:37:56.291Z",
		"size": 2446865,
		"path": "../public/assets/26-19Eqisc0.jpeg"
	},
	"/assets/29-BYV4DZzG.jpeg": {
		"type": "image/jpeg",
		"etag": "\"238327-9bFX8jvyHHznxobzlPo1YLViMWw\"",
		"mtime": "2026-06-30T21:37:56.294Z",
		"size": 2327335,
		"path": "../public/assets/29-BYV4DZzG.jpeg"
	},
	"/assets/27-DnXCDb6-.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2fa314-sv6r5HtV3+i9wKy16U+Bh0QEv30\"",
		"mtime": "2026-06-30T21:37:56.292Z",
		"size": 3121940,
		"path": "../public/assets/27-DnXCDb6-.jpeg"
	},
	"/assets/16-DvzRT48i.JPG": {
		"type": "image/jpeg",
		"etag": "\"398233-j+oRAN0HkYNwn/DsKh27nCfXpgE\"",
		"mtime": "2026-06-30T21:37:56.284Z",
		"size": 3768883,
		"path": "../public/assets/16-DvzRT48i.JPG"
	},
	"/assets/30-BPBgz2eC.jpeg": {
		"type": "image/jpeg",
		"etag": "\"30c88f-mSx9h2ICO7D6dC8gDaItNTb8y1M\"",
		"mtime": "2026-06-30T21:37:56.295Z",
		"size": 3197071,
		"path": "../public/assets/30-BPBgz2eC.jpeg"
	},
	"/assets/37-QEC-OdM_.JPG": {
		"type": "image/jpeg",
		"etag": "\"1dda31-CDIT6DTFlQsutfXKWQbn2Gd6REE\"",
		"mtime": "2026-06-30T21:37:56.306Z",
		"size": 1956401,
		"path": "../public/assets/37-QEC-OdM_.JPG"
	},
	"/assets/41-CdchAXXE.JPG": {
		"type": "image/jpeg",
		"etag": "\"170346-99R8nbMDSKsNtBrINbz8J44P3Oo\"",
		"mtime": "2026-06-30T21:37:56.313Z",
		"size": 1508166,
		"path": "../public/assets/41-CdchAXXE.JPG"
	},
	"/assets/28-Rb6AnkdD.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3122b2-werqJRxMdfwKP2rtCQll4Z8/G90\"",
		"mtime": "2026-06-30T21:37:56.293Z",
		"size": 3220146,
		"path": "../public/assets/28-Rb6AnkdD.jpeg"
	},
	"/assets/40-D6HENvBQ.JPG": {
		"type": "image/jpeg",
		"etag": "\"1f521d-xUuB6IHcjRdRlRtvfld38xTGydI\"",
		"mtime": "2026-06-30T21:37:56.312Z",
		"size": 2052637,
		"path": "../public/assets/40-D6HENvBQ.JPG"
	},
	"/assets/12-b-a72Bvs.jpeg": {
		"type": "image/jpeg",
		"etag": "\"48caed-QFsEZ28SiUHYfnwXXzfDjNIaIOg\"",
		"mtime": "2026-06-30T21:37:56.280Z",
		"size": 4770541,
		"path": "../public/assets/12-b-a72Bvs.jpeg"
	},
	"/assets/21-CdTdfp9X.JPG": {
		"type": "image/jpeg",
		"etag": "\"5032b2-mmKIPNKNcsF7l0zKuC7EsNNPRKs\"",
		"mtime": "2026-06-30T21:37:56.288Z",
		"size": 5255858,
		"path": "../public/assets/21-CdTdfp9X.JPG"
	},
	"/assets/46-BHJl37_6.JPG": {
		"type": "image/jpeg",
		"etag": "\"97149-wpGJcwVftvoG2UU4xsPxmnt+YfM\"",
		"mtime": "2026-06-30T21:37:56.322Z",
		"size": 618825,
		"path": "../public/assets/46-BHJl37_6.JPG"
	},
	"/assets/36-D6tDiKA9.JPG": {
		"type": "image/jpeg",
		"etag": "\"377b21-dR/msYZonLE7kTkm8Nu8AAFc3FQ\"",
		"mtime": "2026-06-30T21:37:56.305Z",
		"size": 3636001,
		"path": "../public/assets/36-D6tDiKA9.JPG"
	},
	"/assets/47-BZAVH_pa.JPG": {
		"type": "image/jpeg",
		"etag": "\"97afd-frmLQp8zKcl+tNslvIxs19MhY0w\"",
		"mtime": "2026-06-30T21:37:56.323Z",
		"size": 621309,
		"path": "../public/assets/47-BZAVH_pa.JPG"
	},
	"/assets/15-DlVMdrEj.JPG": {
		"type": "image/jpeg",
		"etag": "\"5b2c08-ENAoKE7j0ZmQT66lan5CxVevZvY\"",
		"mtime": "2026-06-30T21:37:56.282Z",
		"size": 5975048,
		"path": "../public/assets/15-DlVMdrEj.JPG"
	},
	"/assets/42-2pjV613W.JPG": {
		"type": "image/jpeg",
		"etag": "\"2db734-dFTubAnEHq91QWRMu/sPji+z2ms\"",
		"mtime": "2026-06-30T21:37:56.314Z",
		"size": 2996020,
		"path": "../public/assets/42-2pjV613W.JPG"
	},
	"/assets/43-Cj9gJluZ.JPG": {
		"type": "image/jpeg",
		"etag": "\"26b446-aen/Jf8NTYMCPFDJoGVjZ3EOv5U\"",
		"mtime": "2026-06-30T21:37:56.317Z",
		"size": 2536518,
		"path": "../public/assets/43-Cj9gJluZ.JPG"
	},
	"/assets/31-BOSDL_LN.JPG": {
		"type": "image/jpeg",
		"etag": "\"459836-bTKzs5FJMiO6V5tcTH9ruVlwtTU\"",
		"mtime": "2026-06-30T21:37:56.296Z",
		"size": 4560950,
		"path": "../public/assets/31-BOSDL_LN.JPG"
	},
	"/assets/34-71Dmebvz.JPG": {
		"type": "image/jpeg",
		"etag": "\"41dff5-anaOZCcyrPFOXi8y/cluMyPfR4g\"",
		"mtime": "2026-06-30T21:37:56.301Z",
		"size": 4317173,
		"path": "../public/assets/34-71Dmebvz.JPG"
	},
	"/assets/44--jMhwmsO.JPG": {
		"type": "image/jpeg",
		"etag": "\"26ed85-YYMs0jCCEiFLwDqIPmesiJWuhSM\"",
		"mtime": "2026-06-30T21:37:56.319Z",
		"size": 2551173,
		"path": "../public/assets/44--jMhwmsO.JPG"
	},
	"/assets/50-132c5TbP.JPG": {
		"type": "image/jpeg",
		"etag": "\"ae2cf-w8qjEgvPB3MgghWfX2BQ6C75I+E\"",
		"mtime": "2026-06-30T21:37:56.328Z",
		"size": 713423,
		"path": "../public/assets/50-132c5TbP.JPG"
	},
	"/assets/4-DdRlRdd1.JPG": {
		"type": "image/jpeg",
		"etag": "\"4715d9-3jaFefIhRzjpnij4V/43ELyCC5U\"",
		"mtime": "2026-06-30T21:37:56.311Z",
		"size": 4658649,
		"path": "../public/assets/4-DdRlRdd1.JPG"
	},
	"/assets/32-CbbO-zpm.JPG": {
		"type": "image/jpeg",
		"etag": "\"56ea54-ijD//eZw2kYbYTfAnEg4CXKI8m0\"",
		"mtime": "2026-06-30T21:37:56.297Z",
		"size": 5696084,
		"path": "../public/assets/32-CbbO-zpm.JPG"
	},
	"/assets/38-DjjnIXVb.JPG": {
		"type": "image/jpeg",
		"etag": "\"4df3a8-Je9PjDVUcCKa4urmJuajozNDO3w\"",
		"mtime": "2026-06-30T21:37:56.307Z",
		"size": 5108648,
		"path": "../public/assets/38-DjjnIXVb.JPG"
	},
	"/assets/45-CPWod8I4.JPG": {
		"type": "image/jpeg",
		"etag": "\"2800ce-kvNTHTPf0EoWEgKyb03oaZUs18w\"",
		"mtime": "2026-06-30T21:37:56.320Z",
		"size": 2621646,
		"path": "../public/assets/45-CPWod8I4.JPG"
	},
	"/assets/33-Dr57jw6y.JPG": {
		"type": "image/jpeg",
		"etag": "\"5ab761-cGfYWHkpIVm6KBf/fjfFC4IT8Vw\"",
		"mtime": "2026-06-30T21:37:56.300Z",
		"size": 5945185,
		"path": "../public/assets/33-Dr57jw6y.JPG"
	},
	"/assets/39-DNJbUCgN.JPG": {
		"type": "image/jpeg",
		"etag": "\"52ea3a-HGbDUlsP26jHmWRQ1Nk51lppwY4\"",
		"mtime": "2026-06-30T21:37:56.309Z",
		"size": 5433914,
		"path": "../public/assets/39-DNJbUCgN.JPG"
	},
	"/assets/8-B07JVkZu.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ec8b-be/bKuNmPmo5zEKksE2l1OsGxSU\"",
		"mtime": "2026-06-30T21:37:56.339Z",
		"size": 191627,
		"path": "../public/assets/8-B07JVkZu.jpg"
	},
	"/assets/7-CpF0sUMw.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fcd2-Pw9tR9MzXiJ4tdmF+pK1cX3ePNI\"",
		"mtime": "2026-06-30T21:37:56.339Z",
		"size": 195794,
		"path": "../public/assets/7-CpF0sUMw.jpg"
	},
	"/assets/9-heh7UZkV.jpg": {
		"type": "image/jpeg",
		"etag": "\"16d0b-Q8M3MeqUmSnGzg4bmw0JBP6ZKTw\"",
		"mtime": "2026-06-30T21:37:56.340Z",
		"size": 93451,
		"path": "../public/assets/9-heh7UZkV.jpg"
	},
	"/assets/53-CxLmO5n3.JPG": {
		"type": "image/jpeg",
		"etag": "\"230295-1mNBag7jO31euJsS2CllfKQOZh0\"",
		"mtime": "2026-06-30T21:37:56.331Z",
		"size": 2294421,
		"path": "../public/assets/53-CxLmO5n3.JPG"
	},
	"/assets/49-Dlb5N_U7.JPG": {
		"type": "image/jpeg",
		"etag": "\"28ba01-rneraGJX3UD0HQcW4YjbojHJkAA\"",
		"mtime": "2026-06-30T21:37:56.325Z",
		"size": 2669057,
		"path": "../public/assets/49-Dlb5N_U7.JPG"
	},
	"/assets/54-CasptEj4.JPG": {
		"type": "image/jpeg",
		"etag": "\"19128e-996JUDs88sgxsoF61JATyJHxhqU\"",
		"mtime": "2026-06-30T21:37:56.331Z",
		"size": 1643150,
		"path": "../public/assets/54-CasptEj4.JPG"
	},
	"/assets/anbun-vgoZMoPT.JPG": {
		"type": "image/jpeg",
		"etag": "\"b6649-S4MuK0oN7ZwN1Jm3D4ley0oeV9A\"",
		"mtime": "2026-06-30T21:37:56.340Z",
		"size": 747081,
		"path": "../public/assets/anbun-vgoZMoPT.JPG"
	},
	"/assets/index-S5D4BMN2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54586-Bvj6rgsLFT2lHHBgZpLEIbLC8J8\"",
		"mtime": "2026-06-30T21:37:56.278Z",
		"size": 345478,
		"path": "../public/assets/index-S5D4BMN2.js"
	},
	"/assets/52-BVyoC9oT.JPG": {
		"type": "image/jpeg",
		"etag": "\"28ba82-3+89V5nsYzimQnsGFUouxWNPMxU\"",
		"mtime": "2026-06-30T21:37:56.330Z",
		"size": 2669186,
		"path": "../public/assets/52-BVyoC9oT.JPG"
	},
	"/assets/48-5ykWcbGu.JPG": {
		"type": "image/jpeg",
		"etag": "\"3001b8-+aG4kQPBUMF6gzWElQTseK3Xibk\"",
		"mtime": "2026-06-30T21:37:56.324Z",
		"size": 3146168,
		"path": "../public/assets/48-5ykWcbGu.JPG"
	},
	"/assets/map-CBcPC8ZC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"900-KKxmpusK85rbIDpcvzavFm1tGSQ\"",
		"mtime": "2026-06-30T21:37:56.278Z",
		"size": 2304,
		"path": "../public/assets/map-CBcPC8ZC.js"
	},
	"/assets/index-bpFrQ5yG.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"9f64-YTzWN4EcTIjKOgu9lfl/J+HILp4\"",
		"mtime": "2026-06-30T21:37:56.342Z",
		"size": 40804,
		"path": "../public/assets/index-bpFrQ5yG.css"
	},
	"/assets/bmt-DISgBVH3.JPG": {
		"type": "image/jpeg",
		"etag": "\"d6ccb-OJWt5hkKJHREwAFJiy2Ym/ZJH04\"",
		"mtime": "2026-06-30T21:37:56.340Z",
		"size": 879819,
		"path": "../public/assets/bmt-DISgBVH3.JPG"
	},
	"/assets/55-Cy3rnexa.png": {
		"type": "image/png",
		"etag": "\"2668c8-UIY90+U+wpcx1/tx2ctiEosxLxE\"",
		"mtime": "2026-06-30T21:37:56.333Z",
		"size": 2517192,
		"path": "../public/assets/55-Cy3rnexa.png"
	},
	"/assets/5-C00jg0a3.JPG": {
		"type": "image/jpeg",
		"etag": "\"3891ac-BYLbXQkooX+Sl2IY6VWtr5BeCgw\"",
		"mtime": "2026-06-30T21:37:56.326Z",
		"size": 3707308,
		"path": "../public/assets/5-C00jg0a3.JPG"
	},
	"/mysong.mp3": {
		"type": "audio/mpeg",
		"etag": "\"90d4b9-Bd4p+W9ebqxJwv4ENpG/A5Nrmrs\"",
		"mtime": "2026-06-30T21:37:57.414Z",
		"size": 9491641,
		"path": "../public/mysong.mp3"
	},
	"/assets/51-DRRMEC6b.JPG": {
		"type": "image/jpeg",
		"etag": "\"3f225e-pc6Z2qOZYzSvrwHP5/YoBVMt/60\"",
		"mtime": "2026-06-30T21:37:56.329Z",
		"size": 4137566,
		"path": "../public/assets/51-DRRMEC6b.JPG"
	},
	"/assets/photosData-DBgHU82q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44f6-ZqVzjhC4n+WUWwNprk75EHgOlMc\"",
		"mtime": "2026-06-30T21:37:56.279Z",
		"size": 17654,
		"path": "../public/assets/photosData-DBgHU82q.js"
	},
	"/assets/routes-BYZf8f-z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f12-hg7VCEg1yhMpEPSE/YD8i0pz4vA\"",
		"mtime": "2026-06-30T21:37:56.279Z",
		"size": 7954,
		"path": "../public/assets/routes-BYZf8f-z.js"
	},
	"/assets/styles-t7Dg-tBQ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12d5f-1+Hp+T7vdCapXmNp6bKx7FPh5E8\"",
		"mtime": "2026-06-30T21:37:56.342Z",
		"size": 77151,
		"path": "../public/assets/styles-t7Dg-tBQ.css"
	},
	"/assets/57-Ca2iFc4O.JPG": {
		"type": "image/jpeg",
		"etag": "\"2eb5bd-shp2pi5VM8kCBa+ngys2UpMtoeo\"",
		"mtime": "2026-06-30T21:37:56.338Z",
		"size": 3061181,
		"path": "../public/assets/57-Ca2iFc4O.JPG"
	},
	"/assets/56-BRu68xZU.JPG": {
		"type": "image/jpeg",
		"etag": "\"300947-D/H9QPtZDVHQtqXGbOmWIKO6Tew\"",
		"mtime": "2026-06-30T21:37:56.334Z",
		"size": 3148103,
		"path": "../public/assets/56-BRu68xZU.JPG"
	},
	"/assets/mapbox-gl-CUG-VyO_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b6efa-TSjXwsoLymlfSj4fSGfxC+pASWA\"",
		"mtime": "2026-06-30T21:37:56.278Z",
		"size": 1797882,
		"path": "../public/assets/mapbox-gl-CUG-VyO_.js"
	},
	"/assets/35-BG4gjfmP.JPG": {
		"type": "image/jpeg",
		"etag": "\"9ffa1a-o/1PYJaDC/NwRgR0S6lD1IqtIfw\"",
		"mtime": "2026-06-30T21:37:56.304Z",
		"size": 10484250,
		"path": "../public/assets/35-BG4gjfmP.JPG"
	},
	"/assets/6-Bpc-FzQH.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b04d3-AuGTx1f+ZFRBV17C3iIJfwcAPgo\"",
		"mtime": "2026-06-30T21:37:56.339Z",
		"size": 4916435,
		"path": "../public/assets/6-Bpc-FzQH.jpg"
	},
	"/assets/cau14-DYk3XWSi.JPG": {
		"type": "image/jpeg",
		"etag": "\"4c3538-04fgdzsEctZa93slWfQnrCeweQA\"",
		"mtime": "2026-06-30T21:37:56.341Z",
		"size": 4994360,
		"path": "../public/assets/cau14-DYk3XWSi.JPG"
	},
	"/assets/ve1-B_Z33qJo.JPG": {
		"type": "image/jpeg",
		"etag": "\"5ec6c1-0ps606IrnM8E7kIqG8OHXnuYmUI\"",
		"mtime": "2026-06-30T21:37:56.344Z",
		"size": 6211265,
		"path": "../public/assets/ve1-B_Z33qJo.JPG"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy__y8_Tl = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy__y8_Tl
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
