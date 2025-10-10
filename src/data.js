import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  // {
  //   id: 5,
  //   gambar: Tools5,
  //   nama: "Bootstrap",
  //   ket: "Framework",
  //   dad: "500",
  // },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  // {
  //   id: 9,
  //   gambar: Tools9,
  //   nama: "Adobe Illustrator",
  //   ket: "Design App",
  //   dad: "900",
  // },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  // {
  //   id: 12,
  //   gambar: Tools12,
  //   nama: "Kotlin",
  //   ket: "Language",
  //   dad: "1200",
  // },
  // {
  //   id: 13,
  //   gambar: Tools13,
  //   nama: "Firebase",
  //   ket: "Framework",
  //   dad: "1300",
  // },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  // {
  //   id: 17,
  //   gambar: Tools17,
  //   nama: "PHP",
  //   ket: "Language",
  //   dad: "1700",
  // },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek from "../public/assets/proyek/Proyek.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek,
    title: "E-Klinik Polbangtan Malang",
    subtitle: "E-Klinik Polbangtan Malang is an integrated digital solution designed...",
    fullDescription:"E-Klinik Polbangtan Malang is an integrated digital solution designed to streamline healthcare services by managing patient medical records, tracking clinic inventory, and providing a comprehensive counseling system. The application enhances administrative efficiency with features like role-based access and a QR code system for quick patient identification, creating a more accessible healthcare ecosystem for the entire academic community.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/brummbitio",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek,
    title: "E-Management Polbangtan Malang",
    subtitle: "E-Management Asrama Polbangtan Malang is an integrated system for...",
    fullDescription:"E-Management Asrama Polbangtan Malang is an integrated system for digitizing dormitory supervision, focusing on QR code-based attendance for activities, a point-based system for recording disciplinary violations, and scheduling mandatory events. It provides administrators with a centralized dashboard to efficiently monitor student data, track participation, and generate reports to support student development.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/brummbitio",
    dad: "200",
  },
];
