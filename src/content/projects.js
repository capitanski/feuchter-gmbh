import PolizeihemdSeite from "@/assets/Projekte/polizeihemd_bayern_seite.webp";
import PolizeihemdFront from "@/assets/Projekte/polizeihemd_bayern_front.webp";
import bmiHoseRechts from "@/assets/Projekte/bmi_hose_front.webp"
import bmiJackeFront from "@/assets/Projekte/bmi_jacke_front.webp"
import berlinHoseLinks from "@/assets/Projekte/berlin_hose_front.webp"
import berlinJackeSeite from "@/assets/Projekte/berlin_jacke_front.webp"
import unterhemdSeite from "@/assets/Projekte/Unterhemd BWBM Seite.webp";
import unterhemdFront from "@/assets/Projekte/Unterhemd BWBM vorne.webp"
import monteurkombiFront from "@/assets/Projekte/Monteurkombi Front.webp"
import monteurkombiSeite from "@/assets/Projekte/Monteurkombi Seite.webp"
import ksJacke from "@/assets/Projekte/Kaelteschutzjacke Seite.webp"
import ksHose from "@/assets/Projekte/Kaelteschutzhose Seite.webp"
import rucksackUeberzug from "@/assets/Projekte/rucksackueberzug_tropentarn.webp"
import rucksackUeberzugSeite from "@/assets/Projekte/rucksackueberzug_tropentarn_seite.webp"
import feuerwehrPolo from "@/assets/Projekte/feuerwehr_polo_front.webp"
import feuerwehrSweatshirt from "@/assets/Projekte/feuerwehr_sweatshirt_front.webp"
import trageRiemen_1 from "@/assets/Projekte/trageriemen_1.webp"
import trageRiemen_2 from "@/assets/Projekte/trageriemen_2.webp"
import fs from "fs";
const projects = [
  {
    title: {
      de: "BWBM Kälteschutz",
      en: "BWBM Cold Protection",
    },
    slug: "bwbm-kalteschutz",
    shortDescription: {
      de: "Die Unterziehjacke, Kälteschutz ist Teil der Feldbekleidung und ist speziell für die Anforderungen der Bundeswehr optimiert - funktional, widerstandsfähig und ideal für kalte Einsätze.\nDie Unterziehkälteschutzhose nach TL 8415-0260 ist eine leichte, hochisolierende und funktionale Hose, die optimal für den militärischen Einsatz bei Kälte geeignet ist. Sie kombiniert Wärmeleistung, Komfort und Langlebigkeit – perfekt für anspruchsvolle Bedingungen.",
      en: "The underjacket for cold protection is part of the field uniform and specially optimized for Bundeswehr requirements – functional, durable, and ideal for cold missions. The underlayer cold protection pants according to TL 8415-0260 are lightweight, highly insulating, and functional, making them ideal for military operations in cold environments. They combine warmth, comfort, and durability – perfect for demanding conditions.",
    },
    mainImage: "https://example.com/kaelteschutz.webp",
    customer: {
      de: "BWBM",
      en: "Federal Office for Bundeswehr Equipment",
    },
    tags: {
      de: ["kaelteschutz", "gefuttert"],
      en: ["kaelteschutz", "gefuttert"],
    },
    tl: "TL 8415-0234/TL 8415-0260",
    images: [ksJacke.src, ksHose.src],
    amount: 51000,
    status: {
      de: "Laufend",
      en: "Running",
    },
    date: "2021",
  },
  {
    title: {
      de: "Einsatzanzug BMI",
      en: "Operational Suit BMI",
    },
    slug: "einsatzanzug-bmi",
    shortDescription: {
      de: "Der zweiteilige Einsatzanzug besteht aus einem Einsatzblouson und einer Einsatzhose\nund ist für die Beamten/Beamtinnen der Bundespolizei bestimmt. Er wird über den\nKörperschutzausstattungen der Bundespolizei getragen.\nDieser Einsatzanzug ist besonders leicht, atmungsaktiv, strapazierfähig und flammhemmend, ohne eine wasserdichte Membran zu enthalten. Er ist optimal für den täglichen Polizeidienst sowie taktische Einsätze geeignet und bietet hohen Tragekomfort bei gleichzeitig robustem Schutz.",
      en: "The two-piece operational suit consists of a blouson and trousers, designed for Federal Police officers. It is worn over body protection gear. This suit is lightweight, breathable, durable, and flame-retardant without a waterproof membrane – ideal for daily police service and tactical missions, offering great comfort with robust protection.",
    },
    mainImage: "https://example.com/bmi.webp",
    customer: {
      de: "BMI",
      en: "Federal Ministry of the Interior",
    },
    tags: {
      de: ["flammhemmend", "aramidgewebe"],
      en: ["flammhemmend", "aramidgewebe"],
    },
    tl: "Ausgabe No. 5",
    images: [bmiJackeFront.src, bmiHoseRechts.src],
    amount: 18500,
    status: {
      de: "Laufend",
      en: "Running",
    },
    date: "2024",
  },
  {
    title: {
      de: "Einsatzanzug Polizei Berlin",
      en: "Police Berlin Operational Suit",
    },
    slug: "einsatzanzug-polizei-berlin",
    shortDescription: {
      de: "Es handelt sich um einen Einsatzanzug, bestehend aus Blouson und Hose, gefertigt aus dunkelblauem Aramidgewebe, permanent schwer entflammbar und antistatisch.",
      en: "This is an operational suit consisting of a blouson and trousers, made from dark blue aramid fabric, permanently flame-retardant and antistatic.",
    },
    mainImage: "https://example.com/berlin.webp",
    customer: {
      de: "Polizei Berlin",
      en: "Berlin Police",
    },
    tags: {
      de: ["aramidgewebe"],
      en: ["aramidgewebe"],
    },
    tl: "TL 8405-075",
    images: [berlinJackeSeite.src, berlinHoseLinks.src],
    amount: 2400,
    status: {
      de: "Abgeschlossen",
      en: "Finished",
    },
    date: "2024",
  },
  {
    title: {
      de: "Monteurkombi Sommer/Variabel",
      en: "Maintenance Coverall Summer/Variable",
    },
    slug: "monteurkombi-deutsche-bundeswehr",
    shortDescription: {
      de: "Die Monteurkombi der Deutschen Bundeswehr ist eine Funktionsbekleidung für Instandsetzungs- und Einsatzaufträge, für Arbeits-, Dienst- und Kampfbekleidung.",
      en: "The utility coverall of the German Bundeswehr is functional clothing designed for maintenance and operational tasks, suitable for work, service, and combat wear.",
    },
    mainImage: "https://example.com/monteurkombi.webp",
    customer: {
      de: "BWBM Deutschland",
      en: "BWBM Germany",
    },
    tags: {
      de: ["atlasgewebe"],
      en: ["atlasgewebe"],
    },
    tl: "TL 8415-0212 / TL 8415-0213",
    images: [monteurkombiFront.src, monteurkombiSeite.src],
    amount: 45000,
    status: {
      de: "Laufend",
      en: "Running",
    },
    date: "2021",
  },
  {
    title: {
      de: "Polizeihemden Bayern",
      en: "Bavarian Police Shirts",
    },
    slug: "polizeihemden-bayern",
    shortDescription: {
      de: "Es handelt sich hierbei um das Uniformhemd der Polizei Bayern. Die Hemden sind Teil eines funktionellen Bekleidungssystems und werden sowohl im Wach- und\nWechseldienst als auch im Bürodienst getragen.",
      en: "These are uniform shirts of the Bavarian police. The shirts are part of a functional clothing system and are worn during patrol duty, shift duty, and also in office service.",
    },
    mainImage: "https://example.com/bayern.webp",
    customer: {
      de: "Polizei Bayern",
      en: "Bavarian Police",
    },
    tags: {
      de: ["mischgewebe"],
      en: ["mischgewebe"],
    },
    tl: "TL-BY4",
    images: [PolizeihemdSeite.src, PolizeihemdFront.src],
    amount: 680000,
    status: {
      de: "Laufend",
      en: "Running",
    },
    date: "2023",
  },
  {
    title: {
      de: "Unterhemd Deutsche Bundeswehr",
      en: "Undershirt German Bundeswehr",
    },
    slug: "unterhemd-bwbm-deutsche-bundeswehr",
    shortDescription: {
      de: "Das Unterhemd ist Teil der Feld-und Kampfbekleidung, kann sowohl von Männern als auch Frauen getragen werden. Kurzbeschreibung: Einfarbiges, leicht tailliertes Unterhemd aus einem Zweischichtgestricke mit kurzen Ärmeln, Nationalitätsabzeichen auf den Ärmeln, zwei schmalen Haftverschlüssen (Schlingenteil) auf der Brustseite, runder Halsausschnitt mit Bündchen, Rumpf in Schlauchform oder mit zwei Seitennähten und leicht abfallender Schulter.",
      en: "The undershirt is part of the field and combat clothing and can be worn by both men and women. Description: Solid-color, slightly fitted undershirt made from a double-layer knit with short sleeves, national emblem on the sleeves, two narrow hook-and-loop fasteners on the chest, round neckline with ribbed collar, tubular body or with side seams and a slightly sloped shoulder.",
    },
    mainImage: "https://example.com/unterhemd.webp",
    customer: {
      de: "BWBM",
      en: "Federal Office for Bundeswehr Equipment",
    },
    tags: {
      de: ["mischgewebe"],
      en: ["mischgewebe"],
    },
    tl: "TL 8420-0052",
    images: [unterhemdFront.src, unterhemdSeite.src],
    amount: 170000,
    status: {
      de: "Laufend",
      en: "Running",
    },
    date: "2024",
  },
  {
    title: {
      de: "Rucksacküberzug Deutsche Bundeswehr",
      en: "Backpack cover German Federal Armed Forces",
    },
    slug: "rucksackueberzug-deutsche-bundeswehr",
    shortDescription: {
      de: "Der Rucksacküberzug im Tropentarndruck schützt den Rucksack vor Witterung und sorgt für eine exzellente Tarnung in subtropischen Gebieten",
      en: "The backpack cover in desert camouflage protects the backpack from the elements and provides excellent concealment in subtropical environments.",
    },
    mainImage: "https://example.com/unterhemd.webp",
    customer: {
      de: "BWBM",
      en: "Federal Office for Bundeswehr Equipment",
    },
    tags: {
      de: ["mischgewebe"],
      en: ["mischgewebe"],
    },
    tl: "TL 8420-0052",
    images: [rucksackUeberzug.src, rucksackUeberzugSeite.src],
    amount: 50000,
    status: {
      de: "Laufend",
      en: "Running",
    },
    date: "2021",
  },
  {
    title: {
      de: "Feuerwehr Tragedienstbekleidung",
      en: "Fire service duty uniform",
    },
    slug: "feuerwehr-tragedienstbekleidung",
    shortDescription: {
      de: "Hierbei handelt es sich um Tragedienstbekleidung der Feuerwehr, sowohl Langarm-Sweatshirts als auch Kurzarm-Poloshirts.",
      en: "This is duty wear for firefighters, including both long-sleeve sweatshirts and short-sleeve polo shirts.",
    },
    mainImage: "https://example.com/unterhemd.webp",
    customer: {
      de: "BWBM",
      en: "Federal Office for Bundeswehr Equipment",
    },
    tags: {
      de: ["mischgewebe"],
      en: ["mischgewebe"],
    },
    tl: "TL 8420-0052",
    images: [feuerwehrPolo.src, feuerwehrSweatshirt.src],
    amount: 25000,
    status: {
      de: "Abgeschlossen",
      en: "Finished",
    },
    date: "2020",
  },
  {
    title: {
      de: "Trageriemenausstattung",
      en: "Carrying strap system",
    },
    slug: "trageriemen",
    shortDescription: {
      de: "Es handelt sich um Trageriemen für verschiedenste Einsatzmöglichkeiten.",
      en: "These are carrying straps designed for a wide range of operational uses.",
    },
    mainImage: "https://example.com/unterhemd.webp",
    customer: {
      de: "BWBM",
      en: "Federal Office for Bundeswehr Equipment",
    },
    tags: {
      de: ["mischgewebe"],
      en: ["mischgewebe"],
    },
    tl: "TL 8465-0133",
    images: [trageRiemen_1.src, trageRiemen_2.src],
    amount: 150000,
    status: {
      de: "Laufend",
      en: "Running",
    },
    date: "2023",
  },
];

export default projects;
