// 1. Định nghĩa kiểu dữ liệu cho ảnh
export type Photo = {
  image: string;
  title: string;
  location: string;
  camera: string;
  lens: string;
  iso: string;
  shutterSpeed: string;
  date: string;
  caption: string;
  lat: number;
  lng: number;
};

// 2. Nạp toàn bộ các asset hình ảnh thực tế
// @ts-ignore
import hinhthunhat from "../assets/1.webp";
// @ts-ignore
import hinhthuhai from "../assets/2.webp";
// @ts-ignore
import hinhthuba from "../assets/3.webp";
// @ts-ignore
import hinhthutu from "../assets/4.webp";
// @ts-ignore
import hinhthunam from "../assets/5.webp";
// @ts-ignore
import hinhthusau from "../assets/6.webp";
// @ts-ignore
import hinhthubay from "../assets/7.webp";
// @ts-ignore
import hinhthutam from "../assets/8.webp";
// @ts-ignore
import hinhthuchin from "../assets/9.webp";
// @ts-ignore
import hinhthumuoi from "../assets/10.webp";
// @ts-ignore
import hinhthumuoimot from "../assets/11.webp";
// @ts-ignore
import hinhthumuoihai from "../assets/12.webp";
// @ts-ignore
import hinhthumuoiba from "../assets/13.webp";
// @ts-ignore
import hinhthumuoibon from "../assets/14.webp";
// @ts-ignore
import hinhthumuoinam from "../assets/15.webp";
// @ts-ignore
import hinhthumuoisau from "../assets/16.webp";
// @ts-ignore
import hinhthumuoibay from "../assets/17.webp";
// @ts-ignore
import hinhthumuoitam from "../assets/18.webp";
// @ts-ignore
import hinhthumuoichin from "../assets/19.webp";
// @ts-ignore
import hinhthuhaimuoi from "../assets/20.webp";
// @ts-ignore
import hinhthuhaimot from "../assets/21.webp";
// @ts-ignore
import hinhthuhaihai from "../assets/22.webp";
// @ts-ignore
import hinhthuhaiba from "../assets/23.webp";
// @ts-ignore
import hinhthuhaitu from "../assets/24.webp";
// @ts-ignore
import hinhthuhailam from "../assets/25.webp";
// @ts-ignore
import hinhthuhaisau from "../assets/26.webp";
// @ts-ignore
import hinhthuhaibay from "../assets/27.JPEG";
// @ts-ignore
import hinhthuhaitam from "../assets/28.JPEG";
// @ts-ignore
import hinhthuhaichin from "../assets/29.JPEG";
// @ts-ignore
import hinhthubamuoi from "../assets/30.JPEG";
// @ts-ignore
import hinhthubamot from "../assets/31.webp";
// @ts-ignore
import hinhthubahai from "../assets/32.webp";
// @ts-ignore
import hinhthubaba from "../assets/33.webp";
// @ts-ignore
import hinhthubatu from "../assets/34.webp";
// @ts-ignore
import hinhthubalam from "../assets/35.webp";
// @ts-ignore
import hinhthubasau from "../assets/36.webp";
// @ts-ignore
import hinhthubabay from "../assets/37.webp";
// @ts-ignore
import hinhthubatam from "../assets/38.webp";
// @ts-ignore
import hinhthubachin from "../assets/39.webp";
// @ts-ignore
import hinhthubonmuoi from "../assets/40.webp";
// @ts-ignore
import hinhthubonmot from "../assets/41.webp";
// @ts-ignore
import hinhthubonhai from "../assets/42.webp";
// @ts-ignore
import hinhthubonba from "../assets/43.webp";
// @ts-ignore
import hinhthubonbon from "../assets/44.webp";
// @ts-ignore
import hinhthubonnam from "../assets/45.webp";
// @ts-ignore
import hinhthubonsau from "../assets/46.webp";
// @ts-ignore
import hinhthubonbay from "../assets/47.webp";
// @ts-ignore
import hinhthubontam from "../assets/48.webp";
// @ts-ignore
import hinhthubonchin from "../assets/49.webp";
// @ts-ignore
import hinhthunammuoi from "../assets/50.webp";
// @ts-ignore
import hinhthunammot from "../assets/51.webp";
// @ts-ignore
import hinhthunamhai from "../assets/52.webp";
// @ts-ignore
import hinhthunamba from "../assets/53.webp";
// @ts-ignore
import hinhthunamtu from "../assets/54.webp";
// @ts-ignore
import hinhthunamlam from "../assets/55.png";
// @ts-ignore
import hinhthunamsau from "../assets/56.webp";
// @ts-ignore
import hinhthunambay from "../assets/57.webp";
// @ts-ignore
import hinhbmt from "../assets/bmt.webp";
// @ts-ignore
import hinhthuyen from "../assets/anbun.webp";
// @ts-ignore
import daklak from "../assets/cau14.webp";
//@ts-ignore
import ve from "../assets/ve1.webp";

// 3. Mảng dữ liệu Album ảnh chứa thông tin chi tiết
export const photos: Photo[] = [
  {
    image: hinhthunhat,
    title: "Một chiều muộn",
    location: "📍 Phổ Ninh, Đức Phổ, Quảng Ngãi, Việt Nam",
    camera: "Canon 750D",
    lens: "Canon EF 50mm f/1.8 STM",
    iso: "100",
    shutterSpeed: "1/250s",
    date: "May 23 2022",
    caption: "Đang ăn kem hoàng hôn đẹp quá vội chạy ra chụp.",
    lat: 14.826333,
    lng: 108.940028,
  },
  {
    image: hinhthuhai,
    title: "Một chiều muộn",
    location: "📍 Phổ Ninh, Đức Phổ, Quảng Ngãi, Việt Nam",
    camera: "Canon 750D",
    lens: "Canon EF 50mm f/1.8 STM",
    iso: "100",
    shutterSpeed: "1/225s",
    date: "May 23 2022",
    caption: "Được quả khoe cả nhà.",
    lat: 14.826333,
    lng: 108.940028,
  },
  {
    image: hinhthuba,
    title: "Một chiều muộn",
    location: "📍 Phổ Ninh, Đức Phổ, Quảng Ngãi, Việt Nam",
    camera: "Canon 750D",
    lens: "Canon EF 50mm f/1.8 STM",
    iso: "100",
    shutterSpeed: "1/400s",
    date: "June 23 2026",
    caption: "Chạy nhanh về muộn ngoại mắng.",
    lat: 14.826333,
    lng: 108.940028,
  },
  {
    image: hinhthutu,
    title: "Những ngày xanh",
    location: "📍 Hoà Bắc, Đà Nẵng, Việt Nam",
    camera: "Canon 750D",
    lens: "Canon EF 18-55mm",
    iso: "200",
    shutterSpeed: "1/200s",
    date: "June 23 2026",
    caption: "Một chuyến đi đáng nhớ cùng mọi người tại Hải Châu 1",
    lat: 16.129889,
    lng: 108.017417,
  },
  {
    image: hinhthunam,
    title: "Hè rồi",
    location: "📍 Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "Canon EF 50mm f/3.8 II",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 23 2026",
    caption:
      "Clouds, green hills, and people I will never have the chance to meet again.",
    lat: 45.5017,
    lng: -73.5673,
  },
  {
    image: hinhthusau,
    title: "VHDG - 2024",
    location: "📍 THPT Phan Châu Trinh ,Đà Nẵng, Việt Nam",
    camera: "Canon 70D",
    lens: "18-135mm f/3.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 23 2026",
    caption: "Trước thềm Văn Hoá Dân Gian",
    lat: 16.072195,
    lng: 108.220445,
  },
  {
    image: hinhthubay,
    title: "Vui chơi",
    location: "📍 Hội An Tây, Đà Nẵng, Việt Nam",
    camera: "Sony A7II",
    lens: "70mm f/2.8",
    iso: "100",
    shutterSpeed: "1/400s",
    date: "June 4 2024",
    caption: "Children in my eyes",
    lat: 15.902028,
    lng: 108.337944,
  },
  {
    image: hinhthutam,
    title: "Hết hơi",
    location: "📍 Làng mộc Kim Bồng, Hội An, Đà Nẵng, Việt Nam",
    camera: "Nikon D700",
    lens: "250mm f/2.8",
    iso: "100",
    shutterSpeed: "1/400s",
    date: "June 4 2024",
    caption: "Ráng lên mày ơi",
    lat: 15.865583,
    lng: 108.325,
  },
  {
    image: hinhthuchin,
    title: "Bến đò",
    location: "📍 Làng mộc Kim Bồng, Hội An, Đà Nẵng, Việt Nam",
    camera: "Nikon D700",
    lens: "400mm f/2.8",
    iso: "100",
    shutterSpeed: "1/500s",
    date: "June 4 2024",
    caption: "Ra khơi",
    lat: 15.866111,
    lng: 108.32525,
  },
  {
    image: hinhthumuoi,
    title: "Bến đò",
    location: "📍 Làng mộc Kim Bồng, Hội An, Đà Nẵng, Việt Nam",
    camera: "Nikon D700",
    lens: "400mm f/2.8",
    iso: "100",
    shutterSpeed: "1/500s",
    date: "June 4 2024",
    caption: "Ra khơi",
    lat: 15.866111,
    lng: 108.32525,
  },
  {
    image: hinhthumuoimot,
    title: "Bến đò",
    location: "📍 Làng mộc Kim Bồng, Hội An, Đà Nẵng, Việt Nam",
    camera: "Nikon D700",
    lens: "400mm f/2.8",
    iso: "100",
    shutterSpeed: "1/500s",
    date: "June 4 2024",
    caption: "Ra khơi",
    lat: 15.866111,
    lng: 108.32525,
  },
  {
    image: hinhthumuoihai,
    title: "Trốn đi cùng Nguyễn Lê Minh Trí",
    location: "📍 Bắc Hải Vân, Lăng Cô, Huế, Việt Nam ",
    camera: "iPhone X",
    lens: "28mm f/2.8",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "April 26 2024 ",
    caption: "Sự khởi đầu của một phượt thủ luôn đến từ một điểm nào đó",
    lat: 16.207972,
    lng: 108.109694,
  },
  {
    image: hinhbmt,
    title: "Đến",
    location: "📍 Bến xe phía bắc Buôn Ma Thuột, Đắk Lắk, Việt Nam",
    camera: "Nikon D700",
    lens: "200mm f/2.8",
    iso: "200",
    shutterSpeed: "1/200s",
    date: "July 22 2024",
    caption: "Ngày về nơi em",
    lat: 12.700833,
    lng: 108.074417,
  },
  {
    image: hinhthumuoiba,
    title: "Qua đèo",
    location: "📍 Ga Hải Vân Bắc, Huế, Việt Nam",
    camera: "Canon 750D",
    lens: "55mm f/5.6",
    iso: "200",
    shutterSpeed: "1/125s",
    date: "May 28 2024",
    caption: "Một khung hình, một đoạn đường, một khoảng lặng",
    lat: 16.211556,
    lng: 108.1165,
  },
  {
    image: hinhthumuoibon,
    title: "Vội Vã",
    location: "📍 Nội bài, Hà Nội, Việt Nam",
    camera: "Nikon D700",
    lens: "80mm f/2.8",
    iso: "400",
    shutterSpeed: "1/125s",
    date: "December 19 2024",
    caption: "Chuyến bay trong đêm",
    lat: 45.5017,
    lng: -73.5673,
  },
  {
    image: hinhthumuoinam,
    title: "VHDG - 2025",
    location: "📍 THPT Phan Châu Trinh, Đà Nẵng, Việt Nam",
    camera: "Sony ZV-E10",
    lens: "18mm f/2.8",
    iso: "200",
    shutterSpeed: "1/250",
    date: "January 17 2025",
    caption: "Cái kết mĩ mãn.",
    lat: 16.071973,
    lng: 108.219639,
  },
  {
    image: hinhthumuoisau,
    title: "Phá hoại",
    location: "📍 THPT Phan Châu Trinh, Đà Nẵng, Việt Nam",
    camera: "Sony ZV-E10",
    lens: "18mm f/2.8",
    iso: "200",
    shutterSpeed: "1/250s",
    date: "January 29 2025",
    caption: "",
    lat: 16.071973,
    lng: 108.219639,
  },
  {
    image: hinhthumuoibay,
    title: "Không ngủ",
    location: "📍 Bùi Việt, TP Hồ CHí Minh, Việt Nam",
    camera: "FUjifilm X-T5",
    lens: " 16mm f/2.8",
    iso: "400",
    shutterSpeed: "1/60s",
    date: "June 23 2026",
    caption: "",
    lat: 10.7675,
    lng: 106.694055,
  },
  {
    image: hinhthumuoitam,
    title: "Không ngủ",
    location: "📍 Bùi Việt, TP Hồ CHí Minh, Việt Nam",
    camera: "Fujifilm X-T5",
    lens: "18mm f/2.8",
    iso: "600",
    shutterSpeed: "1/60s",
    date: "June 23 2026",
    caption: "Giữa Bùi Viện không ngủ, một Sài Gòn hoa lệ.",
    lat: 10.766917,
    lng: 106.692889,
  },
  {
    image: hinhthumuoichin,
    title: "Bến đò Tây Đô",
    location: "📍 Chợ Nổi Cái Răng, Cần Thơ, Việt Nam",
    camera: "Fujifilm X-T5",
    lens: "18mm f/2.8",
    iso: "100",
    shutterSpeed: "1/1000s",
    date: "June 30 2025",
    caption: "một góc nhìn khác về cận cực Nam Tổ quốc.",
    lat: 9.999083,
    lng: 105.744166,
  },
  {
    image: hinhthuyen,
    title: "Sông thức",
    location: "📍 Chợ Nổi Cái Răng, Cần Thơ, Việt Nam",
    camera: "Fujifilm X-T5",
    lens: "18mm f/2.8",
    iso: "100",
    shutterSpeed: "1/600s",
    date: "June 30 2025",
    caption: "Bữa sáng giữa dòng",
    lat: 10.007861,
    lng: 105.75175,
  },
  {
    image: hinhthuhaimuoi,
    title: "Sông thức",
    location: "📍 Chợ Nổi Cái Răng, Cần Thơ, Việt Nam",
    camera: "Fujifilm X-T5",
    lens: "18mm f/2.8",
    iso: "100",
    shutterSpeed: "1/400s",
    date: "June 30 2026",
    caption: "",
    lat: 10.007861,
    lng: 105.75175,
  },
  {
    image: hinhthuhaimot,
    title: "Sớm mai",
    location: "📍 Chợ Nổi Cái Răng, Cần Thơ, Việt Nam",
    camera: "Fujifilm X-T5",
    lens: "18mm f/2.8",
    iso: "100",
    shutterSpeed: "1/400s",
    date: "June 30 2026",
    caption: "",
    lat: 10.008306,
    lng: 105.753778,
  },
  {
    image: hinhthuhaihai,
    title: "Bình Minh",
    location: "📍 THPT Phan Châu Trinh, Đà Nẵng, Việt Nam",
    camera: "iPhone X",
    lens: "24mm f/f.4",
    iso: "100",
    shutterSpeed: "1/200s",
    date: "February 18 2026",
    caption: "Một màu nắng xuân",
    lat: 16.07235,
    lng: 108.21999,
  },
  {
    image: hinhthuhaiba,
    title: "Trại PCt 2025",
    location: "📍 Đại học Việt - Hàn, Đà Nẵng, Việt Nam ",
    camera: "Sony A7ii",
    lens: "35mm f/2.8",
    iso: "100",
    shutterSpeed: "1/1000s",
    date: "March 23 2025",
    caption: "",
    lat: 15.97669,
    lng: 108.252583,
  },
  {
    image: hinhthuhaitu,
    title: "Trại PCT 2025",
    location: "📍 Đại học Việt - Hàn, Đà Nẵng, Việt Nam",
    camera: "Sony A7ii",
    lens: "35mm f/4",
    iso: "100",
    shutterSpeed: "1/800s",
    date: "March 23 2026",
    caption: "Lớp cổ vũ sung lên coi",
    lat: 15.97669,
    lng: 108.252583,
  },
  {
    image: hinhthuhailam,
    title: "Bỏ trốn trong đêm",
    location: "📍 Đèo Mũi Trâu, Đà Nẵng, Việt Nam",
    camera: "",
    lens: "",
    iso: "",
    shutterSpeed: "",
    date: "April 18 2025",
    caption: "Săn Mây",
    lat: 16.115556,
    lng: 107.960667,
  },
  {
    image: hinhthuhaisau,
    title: "Bỏ trốn trong đêm",
    location: "📍 Đèo Mũi Trâu, Đà Nẵng, Việt Nam",
    camera: "",
    lens: "",
    iso: "",
    shutterSpeed: "",
    date: "April 18 2026",
    caption: "4 thằng cợ và một giấc mơ",
    lat: 16.115556,
    lng: 107.960667,
  },
  {
    image: hinhthuhaibay,
    title: "Ham vui",
    location: "📍 Lăng cô, Huế, Việt Nam",
    camera: "Sony A7iii",
    lens: "35mm",
    iso: "",
    shutterSpeed: "",
    date: "June 1 2025",
    caption: "Lôi đầu Bảo dậy vượt dèo tránh nóng",
    lat: 16.223528,
    lng: 108.092694,
  },
  {
    image: hinhthuhaitam,
    title: "Ham vui",
    location: "📍 Lăng cô, Huế, Việt Nam",
    camera: "Sony A7iii",
    lens: "35mm",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 1 2025",
    caption: "Rứa mà cũng được tấm để đời",
    lat: 16.223528,
    lng: 108.092694,
  },
  {
    image: hinhthuhaichin,
    title: "Ham vui",
    location: "📍 Lăng cô, Huế, Việt Nam",
    camera: "Sony A7iii",
    lens: "35mm",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 1 2025",
    caption: "Vô tình làm quen 2 anh Truyện và Ý người Huế đi Honda 67",
    lat: 16.223528,
    lng: 108.092694,
  },
  {
    image: hinhthubamuoi,
    title: "Phượt thủ và bất chấp 50cc",
    location: "📍 Lăng cô, Huế, Việt Nam",
    camera: "Sony A7iii",
    lens: "35mm",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 1 2025",
    caption: "",
    lat: 16.223528,
    lng: 108.092694,
  },
  {
    image: hinhthubamot,
    title: "lần đầu Không tưởng",
    location: "📍 Quốc lộ 14, Ia Phang, Chư Pưh, Gia Lai, Việt Nam",
    camera: "Canon 750d",
    lens: "30mm f/3.5",
    iso: "100",
    shutterSpeed: "1/400s",
    date: "July 23 2025",
    caption:
      "Bay từ Hà Nội về đến nhà lúc 23h ngày 21/7 hơn và sau đó 2 tiếng, rời khỏi nhà lúc 1h sáng ngày 22/7 cùng chiếc 50cc thường ngày đi học, 1 balo và 1 kế hoạch phượt xuyên Tây Nguyên quốc lộ 14 cùng anh họ ",
    lat: 13.489805,
    lng: 108.103611,
  },
  {
    image: hinhthubahai,
    title: "Chặng Pleiku - Buôn Ma Thuột",
    location: "📍 Quốc lộ 14, Ia Le, Gia Lai, Việt Nam",
    camera: "Canon 750d",
    lens: "30mm f/3.5",
    iso: "100",
    shutterSpeed: "1/400s",
    date: "July 23 2026",
    caption:
      "3 km nữa thôi. Hơn một ngày rưỡi và 26 tiếng trên yên xe, tỉnh cuối cùng đã ở ngay trước mắt. ",
    lat: 13.430361,
    lng: 108.092389,
  },
  {
    image: daklak,
    title: "Cầu 14 - Km 1668 +00 ĐHCM",
    location: "📍 Ea H'leo, Đắk Lắk, Việt Nam",
    camera: "Canon 750D",
    lens: "25mm f/3.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "July 23 2026",
    caption: "Đã đi đủ xa để thấy tấm biển này",
    lat: 13.407778,
    lng: 108.091166,
  },
  {
    image: hinhthubaba,
    title: "Hoàng hôn buông xuống",
    location: "📍 65R9+25V Ea Drăng, Đắk Lắk, Việt Nam",
    camera: "Canon 750D",
    lens: "18mm f/3.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "July 23 2025",
    caption: "Nhắm mấy giờ tới nơi Bin ?",
    lat: 13.252111,
    lng: 108.154722,
  },
  {
    image: hinhthubatu,
    title: "Như đường chân trời",
    location: "📍 Ea Drăng, Đắk Lắk, Việt Nam",
    camera: "Canon 750D",
    lens: "18mm f/3.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 23 2025",
    caption: "Đường còn xa lắm",
    lat: 13.240111,
    lng: 108.167917,
  },
  {
    image: hinhthubalam,
    title: "Đêm đấy điên vl thề",
    location: "📍 467M+CX6 Ea Khăl, Đắk Lắk, Việt Nam",
    camera: "Canon 750",
    lens: "50mm f/3.5",
    iso: "400",
    shutterSpeed: "1/125s",
    date: "June 23 2026",
    caption:
      "21:00 và Còn cách BMT 65km, 2 mạng chạy 1 50cc lội mưa vượt đèo có đoạn không đèn đường, nhưng nó đã lắm, theo cái cách được sống trọn vẹn khoảnh khắc đó.",
    lat: 13.113528,
    lng: 108.234889,
  },
  {
    image: hinhthubasau,
    title: "Đại Ngàn",
    location: "📍 Biển hồ Ea Kao, Buôn Ma Thuột, Đắk Lắk, Việt Nam",
    camera: "Canon 750D",
    lens: "30mm f/4.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 24 2026",
    caption: "GIờ mới thực sự là du lịch",
    lat: 12.614917,
    lng: 108.047889,
  },
  {
    image: hinhthubabay,
    title: "Đại Ngàn",
    location: "📍 Biển hồ Ea Kao, Buôn Ma Thuột, Đắk Lắk, Việt Nam",
    camera: "Canon 750D",
    lens: "30mm f/3.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 24 2026",
    caption: "Đồng chí này chịu cực cũng giỏi phết",
    lat: 12.614917,
    lng: 108.047889,
  },
  {
    image: hinhthubatam,
    title: "Chặng về",
    location: "📍 Quốc lộ 19, Đắk Pơ, Gia Lai, Việt Nam",
    camera: "Canon 750D",
    lens: "50mm f/3.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "July 26 2025",
    caption: "Phượt thủ bảnh nhỉ",
    lat: 13.981473,
    lng: 108.476834,
  },
  {
    image: ve,
    title: "Chặng về",
    location: "📍 Đèo An Khê, Gia Lai, Việt Nam",
    camera: "Canon 750D",
    lens: "50mm f/5.6",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "July 26 2025",
    caption: "Sau sát nhập hạ biển Bình Định",
    lat: 13.967723,
    lng: 108.750083,
  },
  {
    image: hinhthubachin,
    title: "Sắp về đến thật hả",
    location: "📍 QL1A, Hoài Nhơn Bắc, Gia Lai, Việt Nam",
    camera: "Canon 750D",
    lens: "50mm f/5.6",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "July 27 2025",
    caption:
      "Còn 220km nữa là đến nhà, kết thúc chuyến đi nhớ đời của 2 anh em sau 6 ngày và 57 tiếng lái xe trước khi đi học xa nhà",
    lat: 14.593889,
    lng: 109.052833,
  },
  {
    image: hinhthubonmuoi,
    title: "flight",
    location: "📍 Narita Airport, CHiba, Japan",
    camera: "iPhone 14 Pro",
    lens: "26mm f/5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "October 23 2025",
    caption:
      "That flight took me to a new land, carrying with it a myriad of emotions beyond words.",
    lat: 35.781195,
    lng: 140.391583,
  },
  {
    image: hinhthubonmot,
    title: "A new country. A new chapter.",
    location: "📍 Montréal Trudeau International Airport , Québec, Canada",
    camera: "Canon 1200D",
    lens: "Canon EF 50mm f/1.8 II",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 23 2026",
    caption: "",
    lat: 45.459278,
    lng: -73.750528,
  },
  {
    image: hinhthubonhai,
    title: "Toàn cảnh",
    location:
      "📍 L'Oratoire Saint-Joseph du Mont-Royal, Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "50mm f/5.6",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "November 8 2026",
    caption: "",
    lat: 45.492222,
    lng: -73.617167,
  },
  {
    image: hinhthubonba,
    title: "Toàn cảnh",
    location:
      "📍 L'Oratoire Saint-Joseph du Mont-Royal ,Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "30mm f/4.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 23 2026",
    caption: "",
    lat: 45.492222,
    lng: -73.617167,
  },
  {
    image: hinhthubonbon,
    title: "Toàn cảnh",
    location:
      "📍 L'Oratoire Saint-Joseph du Mont-Royal ,Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "30mm f/4.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 23 2026",
    caption: "NHiều lúc lại mang cảm xúc khó tả",
    lat: 45.492222,
    lng: -73.617167,
  },
  {
    image: hinhthubonnam,
    title: "Downtown Montréal",
    location: "📍 Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "20mm f/4.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "February 6 2026",
    caption: "Giờ mới có dịp tự khám phá TP",
    lat: 45.4955,
    lng: -73.569973,
  },
  {
    image: hinhthubonsau,
    title: "/0:37:16/",
    location: "📍 Oka National Park, Québec, Canada",
    camera: "Canon 1200D",
    lens: "18mm f/4.5",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "April 6 2026",
    caption: "",
    lat: 45.4815,
    lng: -74.065972,
  },
  {
    image: hinhthubonbay,
    title: "/0:41:16/",
    location: "📍 Oka National Park, Québec, Canada",
    camera: "Canon 1200D",
    lens: "50mm f/5.6",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "April 6 2026",
    caption: "",
    lat: 45.478639,
    lng: -74.064944,
  },
  {
    image: hinhthubontam,
    title: "Dịu hẳn",
    location: "📍 Dollard-Des Ormeaux, Québec, Canada",
    camera: "Fujifilm X-A2",
    lens: "18mm",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "April 23 2026",
    caption: "",
    lat: 45.488639,
    lng: -73.816472,
  },
  {
    image: hinhthubonchin,
    title: "COn mèo béo",
    location: "📍 Beaconsfield, Québec, Canada",
    camera: "iPhone 14 Pro",
    lens: "50mm",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "May 31 2026",
    caption:
      "That fat cat never listens. It's gluttonous and absolutely refuses to lie on its owner's lap, but it often murmurs poetry by the little window on rainy days",
    lat: 45.4326098,
    lng: -73.8770195,
  },
  {
    image: hinhthunammuoi,
    title: "Ngẫu hứng",
    location: "📍 Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "Canon EF 50mm f/1.8 II",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 11 2026",
    caption: "",
    lat: 45.4326098,
    lng: -73.8770195,
  },
  {
    image: hinhthunammot,
    title: "Ngẫu hứng",
    location: "📍 Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "Canon EF 50mm f/1.8 II",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 11 2026",
    caption: "",
    lat: 45.4326098,
    lng: -73.8770195,
  },
  {
    image: hinhthunamhai,
    title: "Ngẫu hứng",
    location: "📍 Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "Canon EF 50mm f/1.8 II",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 11 2026",
    caption: "",
    lat: 45.4326098,
    lng: -73.8770195,
  },
  {
    image: hinhthunamba,
    title: "Ngẫu hứng",
    location: "📍 Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "Canon EF 50mm f/1.8 II",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 11 2026",
    caption: "Art is the highest frequency of the human soul.",
    lat: 45.4326098,
    lng: -73.8770195,
  },
  {
    image: hinhthunamtu,
    title: "Sunset at The Ring",
    location: "📍 Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "50mm ",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 23 2026",
    caption: "Hoàng hôn cuốn tâm hồn tôi trôi xa.",
    lat: 45.500861,
    lng: -73.568806,
  },
  {
    image: hinhthunamlam,
    title: "Sunset",
    location: "📍 Old Montréal, Québec, Canada",
    camera: "Canon 1200D",
    lens: "50mm f/5.6",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 23 2026",
    caption: "Cứ như anime",
    lat: 45.509639,
    lng: -73.556139,
  },
  {
    image: hinhthunamsau,
    title: "Old Montréal",
    location: "📍 Montréal, Québec, Canada",
    camera: "Fujifilm X-A2",
    lens: "24mm f/4",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 27 2026",
    caption: "",
    lat: 45.509722,
    lng: -73.5485,
  },
  {
    image: hinhthunambay,
    title: "Old Montréal",
    location: "📍Montréal, Québec, Canada",
    camera: "Fujifilm X-A2 ",
    lens: "24mm f/4",
    iso: "100",
    shutterSpeed: "1/125s",
    date: "June 27 2026",
    caption: "Nay trời nắng gắt cứ như ở Việt Nam",
    lat: 45.509306,
    lng: -73.547222,
  },
];
