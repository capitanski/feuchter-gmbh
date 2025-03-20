import PolizeihemdSeite from "@/assets/polizeihemd_bayern_seite.jpg";
import PolizeihemdFront from "@/assets/polizeihemd_bayern_front.jpg";
import PolizeihemdWappen from "@/assets/polizeihemd_bayern_wappen.jpg";
import MonteurkombiFront from "@/assets/Monteurkombi_Front.jpg";
import MonteurkombiSeite from "@/assets/Monteurkombi_Seite.jpg";
import fs from 'fs';


const translatedProject = {
  slug: "polizeihemden-bayern",
  title: {
    de: "Polizeihemden Bayern",
    en: "Police Shirts Bavaria"
  },
  customer: {
    de: "Polizei Bayern",
    en: "Bavarian Police"
  },
  tl: "TL-BY4",
  date: "2023",
  amount: 680000,
  status: {
    de: "Laufend",
    en: "Running"
  },
  tags: {
    de: ["Mischgewebe"],
    en: ["Blended Fabric"]
  },
  mainImage: PolizeihemdSeite.src,
  images: [PolizeihemdSeite.src, PolizeihemdFront.src, PolizeihemdWappen.src],
  shortDescription: {
    de: `Es handelt sich hierbei um das Uniformhemd der Polizei Bayern. Die Hemden sind Teil eines funktionellen Bekleidungssystems und werden sowohl im Wach- und Wechseldienst als auch im Bürodienst getragen.`,
    en: `This is the uniform shirt of the Bavarian police. The shirts are part of a functional clothing system and are worn both in patrol and shift duty as well as in office duty.`
  }
}
const monteurKombi = {
  slug: "monteurkombi-lfz",
  title: {
    de: "Monteurkombi Lfz. TechnPers Sommer & Variabel",
    en: "Mechanic coverall Aircraft Technical Personnel Summer & Variable"
  },
  customer: {
    de: "BWBM",
    en: "BWBM"
  },
  tl: "TL-BY4",
  date: "2023",
  amount: 680000,
  status: {
    de: "Laufend",
    en: "Running"
  },
  tags: {
    de: ["Mischgewebe"],
    en: ["Blended Fabric"]
  },
  mainImage: MonteurkombiFront.src,
  images: [MonteurkombiFront.src, MonteurkombiSeite.src],
  shortDescription: {
    de: `Die Monteurkombi der Deutschen Bundeswehr ist eine Funktionsbekleidung für Instandsetzungs- und Einsatzaufträge, für Arbeits-, Dienst- und Kampfbekleidung.`,
    en: `The mechanic coverall of the German Bundeswehr is functional clothing designed for maintenance and operational assignments, as well as for work, service, and combat wear.`
  }
}
const projects = [
  translatedProject,
  monteurKombi
];
export default projects;
