import PolizeihemdSeite from "@/assets/polizeihemd_bayern_seite.jpg";
import PolizeihemdFront from "@/assets/polizeihemd_bayern_front.jpg";
import PolizeihemdWappen from "@/assets/polizeihemd_bayern_wappen.jpg";
import MonteurkombiFront from "@/assets/Monteurkombi_Front.jpg";
import MonteurkombiSeite from "@/assets/Monteurkombi_Seite.jpg";
import fs from 'fs';
const projects = [
  {
    title: {
      de: "BWBM Kälteschutz",
      en: "BWBM Cold Protection"
    },
    slug: "bwbm-kalteschutz",
    shortDescription: {
      de: "Die Unterziehjacke, Kälteschutz ist Teil der Feldbekleidung und ist speziell für die Anforderungen der Bundeswehr optimiert - funktional, widerstandsfähig und ideal für kalte Einsätze.\nDie Unterziehkälteschutzhose nach TL 8415-0260 ist eine leichte, hochisolierende und funktionale Hose, die optimal für den militärischen Einsatz bei Kälte geeignet ist. Sie kombiniert Wärmeleistung, Komfort und Langlebigkeit – perfekt für anspruchsvolle Bedingungen.",
      en: "The underjacket for cold protection is part of the field uniform and specially optimized for Bundeswehr requirements – functional, durable, and ideal for cold missions. The underlayer cold protection pants according to TL 8415-0260 are lightweight, highly insulating, and functional, making them ideal for military operations in cold environments. They combine warmth, comfort, and durability – perfect for demanding conditions."
    },
    mainImage: "https://cdn.prod.website-files.com/66fbdc612b6ec708353a8c01/67bb3ccf300720200e993263_K%C3%A4lteschutz%20Jacke_.jpg",
    customer: {
      de: "BWBM",
      en: "Federal Office for Bundeswehr Equipment"
    },
    tags: {
      de: [
        "kaelteschutz",
        "gefuttert"
      ],
      en: [
        "kaelteschutz",
        "gefuttert"
      ]
    },
    tl: "TL 8415-0234/TL 8415-0260",
    images: [
      PolizeihemdSeite.src,
      PolizeihemdFront.src,
      PolizeihemdWappen.src
    ],
    amount: 51000,
    status: {
      de: "Laufend",
      en: "Running"
    },
    date: "2021"
  },
  {
    title: {
      de: "Einsatzanzug BMI der Bundespolizei",
      en: "Operational Suit BMI of the Federal Police"
    },
    slug: "einsatzanzug-bmi-bundespolizei",
    shortDescription: {
      de: "Der zweiteilige Einsatzanzug besteht aus einem Einsatzblouson und einer Einsatzhose...",
      en: "The two-piece operational suit consists of a blouson and trousers, designed for Federal Police officers. It is worn over body protection gear. This suit is lightweight, breathable, durable, and flame-retardant without a waterproof membrane – ideal for daily police service and tactical missions, offering great comfort with robust protection."
    },
    mainImage: "https://cdn.prod.website-files.com/66fbdc612b6ec708353a8c01/67b9df896d7f0ade26404d6f_BMI%20Jacke%20Hinten.jpg",
    customer: {
      de: "Bundesinnenministerium",
      en: "Federal Ministry of the Interior"
    },
    tags: {
      de: [
        "flammhemmend",
        "aramidgewebe"
      ],
      en: [
        "flammhemmend",
        "aramidgewebe"
      ]
    },
    tl: "Issue No. 5",
    images: [
      PolizeihemdSeite.src,
      PolizeihemdFront.src,
      PolizeihemdWappen.src
    ],
    amount: 18500,
    status: {
      de: "Laufend",
      en: "Running"
    },
    date: "2024"
  },
  {
    title: {
      de: "Einsatzanzug Polizei Berlin",
      en: "Operational Suit Berlin Police"
    },
    slug: "einsatzanzug-polizei-berlin",
    shortDescription: {
      de: "Es handelt sich um einen Einsatzanzug...",
      en: "This is an operational suit consisting of a blouson and trousers, made from dark blue aramid fabric, permanently flame-retardant and antistatic..."
    },
    mainImage: "https://cdn.prod.website-files.com/66fbdc612b6ec708353a8c01/67bafe31a034f4a5d329b319_Jacke%20Berlin%20Seite.jpg",
    customer: {
      de: "Polizei Berlin",
      en: "Berlin Police"
    },
    tags: {
      de: [
        "aramidgewebe",
        "schwer-entflammbar",
        "antistatisch"
      ],
      en: [
        "aramidgewebe",
        "schwer-entflammbar",
        "antistatisch"
      ]
    },
    tl: "TL 8405-075",
    images: [
      PolizeihemdSeite.src,
      PolizeihemdFront.src,
      PolizeihemdWappen.src
    ],
    amount: 2400,
    status: {
      de: "Abgeschlossen",
      en: "Finished"
    },
    date: "2024"
  },
  {
    title: {
      de: "Monteurkombi Deutsche Bundeswehr Lfz TechnPers, Sommer und Variabel",
      en: "Maintenance Coverall German Bundeswehr, Summer and Modular"
    },
    slug: "monteurkombi-deutsche-bundeswehr",
    shortDescription: {
      de: "Die Monteurkombi der Deutschen Bundeswehr ist eine Funktionsbekleidung...",
      en: "The utility coverall of the German Bundeswehr is functional clothing designed for maintenance and operational tasks, suitable for work, service, and combat wear."
    },
    mainImage: "https://cdn.prod.website-files.com/66fbdc612b6ec708353a8c01/67bb3b32baa95ed68e28c991_Monteurkombi%20Schr%C3%A4g.jpg",
    customer: {
      de: "BWBM Deutschland",
      en: "Federal Office for Bundeswehr Equipment Germany"
    },
    tags: {
      de: [
        "atlasgewebe"
      ],
      en: [
        "atlasgewebe"
      ]
    },
    tl: "TL 8415-0212 / TL 8415-0213",
    images: [
      PolizeihemdSeite.src,
      PolizeihemdFront.src,
      PolizeihemdWappen.src
    ],
    amount: 45000,
    status: {
      de: "Laufend",
      en: "Running"
    },
    date: "2021"
  },
  {
    title: {
      de: "Polizeihemden Bayern",
      en: "Bavarian Police Shirts"
    },
    slug: "polizeihemden-bayern",
    shortDescription: {
      de: "Es handelt sich hierbei um das Uniformhemd der Polizei Bayern...",
      en: "These are uniform shirts of the Bavarian police. The shirts are part of a functional clothing system and are worn during patrol duty, shift duty, and also in office service."
    },
    mainImage: "https://cdn.prod.website-files.com/66fbdc612b6ec708353a8c01/67bc85af7d77f896da71f5bf_Bayernhemd%20Brust.jpg",
    customer: {
      de: "Polizei Bayern",
      en: "Bavarian Police"
    },
    tags: {
      de: [
        "mischgewebe"
      ],
      en: [
        "mischgewebe"
      ]
    },
    tl: "TL-BY4",
    images: [
      PolizeihemdSeite.src,
      PolizeihemdFront.src,
      PolizeihemdWappen.src
    ],
    amount: 680000,
    status: {
      de: "Laufend",
      en: "Running"
    },
    date: "2023"
  },
  {
    title: {
      de: "Unterhemd der Deutschen Bundeswehr",
      en: "Undershirt of the German Bundeswehr"
    },
    slug: "unterhemd-bwbm-deutsche-bundeswehr",
    shortDescription: {
      de: "Das Unterhemd ist Teil der Feld-und Kampfbekleidung...",
      en: "The undershirt is part of the field and combat clothing and can be worn by both men and women. Description: Solid-color, slightly fitted undershirt made from a double-layer knit with short sleeves, national emblem on the sleeves, two narrow hook-and-loop fasteners on the chest, round neckline with ribbed collar, tubular body or with side seams and a slightly sloped shoulder."
    },
    mainImage: "https://cdn.prod.website-files.com/66fbdc612b6ec708353a8c01/67bc85c178083f050d2f0d09_Unterhemd%20BWBM%20Unten.jpg",
    customer: {
      de: "BWBM",
      en: "Federal Office for Bundeswehr Equipment"
    },
    tags: {
      de: [
        "mischgewebe"
      ],
      en: [
        "mischgewebe"
      ]
    },
    tl: "TL 8420-0052",
    images: [
      PolizeihemdSeite.src,
      PolizeihemdFront.src,
      PolizeihemdWappen.src
    ],
    amount: 170000,
    status: {
      de: "Laufend",
      en: "Running"
    },
    date: "2024"
  }
];

export default projects;
