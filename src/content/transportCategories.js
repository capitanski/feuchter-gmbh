import schutzwandSchraeg from "@/assets/Produkte/schutzwand_schraeg.jpg"
import schutzwandFront from "@/assets/Produkte/schutzwand_front.jpg"
import schutzwandVerschluss from "@/assets/Produkte/schutzwand_verschluss.jpg"
import schutzwandFarbig from "@/assets/Produkte/Transportwand farbig.jpg"
import thermohaubeFarbig from "@/assets/Staubhaube Farbig.jpg"
import staubhaubeFarbig from "@/assets/Thermohaube farbig.jpg"
import schutzwand from "@/assets/Produkte/schutzwand_schraeg_header.jpg"
import thermohaube from "@/assets/Produkte/thermohaube_schraeg_header.jpg"
import staubhaube from "@/assets/Produkte/staubhaube_schraeg_header.jpg"
export const transportCategories = [
    {
        slug: "transportsolutions/protectivewalls",
        title: {
            de: "Schutzwände",
            en: "Protective walls",
        },
        description: {
            de: `Unsere patentierten Schutzwände bieten eine umweltfreundliche Alternative zur herkömmlichen Stretchfolie. Sie sichern die Ladung zuverlässig, lassen sich schnell anbringen und sparen nicht nur Material, sondern auch Zeit und Kosten.`,
            en: `With our patented protective wall for roll containers, you can finally say goodbye to stretch film. It completely replaces stretch film in load securing and offers a sustainable, reusable alternative.
Thanks to the innovative 6-point click system and integrated fiberglass rods, the protective wall ensures maximum stability and safety – while also saving valuable time during installation.`
        },

        img: schutzwand.src
    },
    {
        slug: "transportsolutions/dustcovers",
        title: {
            de: "Staubhauben",
            en: "Dust covers",
        },
        description: {
            de: "Für besonders sensible Produkte bieten unsere Staub- und Schutzhauben optimalen Schutz vor äußeren Einflüssen wie Schmutz, Feuchtigkeit oder Beschädigung. Die hochwertigen Materialien garantieren Langlebigkeit und einfache Handhabung im täglichen Einsatz.",
            en: "For particularly sensitive products, our dust and protective covers offer optimal protection against external influences such as dirt, moisture, or damage. High-quality materials ensure long-lasting performance and easy handling in daily use."
        },
        img: staubhaube.src
    },
    {
        slug: "transportsolutions/thermalcovers",
        title: {
            de: "Thermohauben",
            en: "Thermal covers",
        },
        description: {
            de: "Ob heiß oder kalt – unsere Thermohauben schützen temperaturempfindliche Waren zuverlässig auf dem gesamten Transportweg. Sie sind robust, mehrfach verwendbar und sorgen für konstante Bedingungen, selbst bei wechselnden Außentemperaturen.",
            en: "Hot or cold – our thermal covers reliably protect temperature-sensitive goods throughout the entire transport process. They are durable, reusable, and ensure stable conditions even in fluctuating external temperatures."
        },
        img: thermohaube.src
    }
]

