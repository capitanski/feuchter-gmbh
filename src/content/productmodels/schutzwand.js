import schutzwandSchraeg from "@/assets/Produkte/schutzwand_schraeg.jpg"
import schutzwandFront from "@/assets/Produkte/schutzwand_front.jpg"
import schutzwandVerschluss from "@/assets/Produkte/schutzwand_verschluss.jpg"
import schutzwandFarbig from "@/assets/Produkte/Transportwand farbig.jpg"
import schutzwandImage from "@/assets/Produkte/Transportwand farbig.jpg";
import skirt from "@/assets/Produkte/BMI Jacke Front.jpg"
import pants from "@/assets/Produkte/BMI Hose Seite.jpg"
import vest from "@/assets/official_headwear.png"
import star from "@/assets/star-regular.svg"



export const schutzwand = {
    headerImage: schutzwandImage.src,
    title: {
        de: "Die Patentierte Schutzwand für Rollcontainer",
        en: "The Patented Protective Wall for Roll Containers"
    },
    subtitle: {
        de: "Nachhaltig sichern statt verschwenden",
        en: "Secure sustainably instead of wasting"
    },
    shortDescription: {
        de: `Mit unserer patentierten Schutzwand für Rollbehälter verabschieden Sie sich endgültig von Stretchfolie. Sie ersetzt diese vollständig bei der Ladungssicherung und bietet eine nachhaltige, wiederverwendbare Alternative.
Dank des innovativen 6-Punkt-Clicksystems und der integrierten Glasfaserstäbe überzeugt die Schutzwand durch maximale Stabilität und Sicherheit – und spart gleichzeitig wertvolle Zeit beim Anbringen. Die Schutzwand kann für alle Rollcontainergrößen angefertigt werden.`,
        en: `With our patented protective wall for roll containers, you can finally say goodbye to stretch film. It completely replaces stretch film in load securing and offers a sustainable, reusable alternative.
Thanks to the innovative 6-point click system and integrated fiberglass rods, the protective wall ensures maximum stability and safety – while also saving valuable time during installation. The Protective wall can be manufactured for every size of Roll cage trolley.`
    },
    category: {
        de: "Schutzwände",
        en: "Protective Walls"
    },
    tag: {
        de: "Wahlweise mit Logodruck & verschiedenen Farben",
        en: "Optionally with logo print & different colors"
    },
    numbers: {
        headline: {
            de: "Kosteneffizient & schnell",
            en: "Costefficient & fast",
        },
        text: {
            de: "Auf einen LKW mit 48 Rollcontainern lassen sich bereits bis zu 7920€ sparen, da die Schutzwand auch bei kleineren Mengen nicht mehr als 20€ kostet, die Arbeitszeit gegenüber dem Einstretchen nur noch 20% beträgt und die Kosten für Stretchfolie sowie deren Entsorgung komplett wegfallen.",
            en: "For every 100 transports, savings of up to €165 per roll container can already be achieved, as the protective wall costs no more than €20 even for smaller quantities, the working time is reduced to just 20% compared to stretch-wrapping, and the costs for stretch film and its disposal are completely eliminated."
        },
        numbers: [
            {

                de: "Kosten Stretchfolie",
                en: "Cost of Stretch Film",
                color: "gray",
                number: 8880

            }, {

                de: "Kosten Schutzwand",
                en: "Cost of Protective Wall",
                color: "sand",
                number: 960
            }, {

                de: "Ersparnis",
                en: "Savings",
                color: "white",
                number: 7920

            }
        ]
    },
    function: {
        headline: {
            de: "Funktionsweise & Lagerung",
            en: "How it works"
        },
        intro: {
            de: `Die Montage der Schutzwand ist denkbar einfach: Zuerst werden die sechs Haken mühelos in die Gitter des Rollcontainers eingehängt – möglich durch die flexible Mittelbahn, die den Kraftaufwand auf ein Minimum reduziert. Anschließend lässt sich das Gurtband an der Rückseite individuell auf die gewünschte Spannung einstellen.
Zum Öffnen wird der Vorgang einfach in umgekehrter Reihenfolge durchgeführt.
Wird die Schutzwand vorübergehend nicht benötigt, kann sie platzsparend und schonend an den Seitengittern des Rollcontainers befestigt werden.`,
            en: `Installing the protective wall is quick and effortless: First, the six hooks are easily attached to the container’s mesh – made simple by the flexible center panel, which minimizes the required force. Then, the rear strap is adjusted to the desired tension with just a few easy steps.
To open the protective wall, simply reverse the process.
When not in use, the wall can be conveniently and gently stored by securing it to the side panels of the roll container`
        },
        items: [
            {
                title: {
                    de: "Haken einhängen",
                    en: "Apply hooks"
                },
                img: schutzwandSchraeg.src,
                text: {
                    de: `Hängen Sie alle sechs Haken in die Seitengitter des Rollcontainers ein. Achten Sie dabei unbedingt darauf, dass die breitere Seite der Mittelbahn nach oben zeigt. Dieser Schritt ist besonders wichtig, da der obere Bereich des Rollcontainers mehr Flexibilität benötigt und von der erhöhten Elastizität der oberen Zone profitiert.`,
                    en: `Attach all six hooks to the side panels of the roll container. Be sure that the wider side of the center panel is facing upward. This step is crucial, as the upper section of the container requires greater flexibility and benefits from the enhanced elasticity of the top part.`
                }
            },
            {
                title: {
                    de: "Spannung einstellen",
                    en: "Adjust the tension"
                },
                img: schutzwandFront.src,
                text: {
                    de: `Stellen Sie nun die Spannung des Gurtbandes auf der Rückseite der Schutzwand so ein, dass die Gitterwände des Rollcontainers die Ware sicher fixieren – ohne sie zu quetschen. Herzlichen Glückwunsch: Ihre Ladung ist jetzt bereit für den Transport – ganz ohne teure und umweltschädliche Stretchfolie.`,
                    en: `Now adjust the tension of the strap at the back of the protective wall so that the container’s mesh panels hold the goods securely in place – without compressing them. Congratulations – your shipment is now ready for transport, without the need for costly and environmentally harmful stretch film.`
                }
            },
            {
                title: {
                    de: "Lagerung der Schutzwand",
                    en: "Storage of the protective wall"
                },
                img: schutzwandVerschluss.src,
                text: {
                    de: `Wenn Sie die Schutzwand gerade nicht benötigen, kann sie ganz einfach an einer beliebigen Seitenwand des Rollcontainers eingehängt werden. So wird die Transportsicherung platzsparend und materialschonend gelagert. Für den nächsten Einsatz ist sie damit sofort griffbereit – das spart Zeit und bares Geld.`,
                    en: `When the protective wall is not in use, it can be easily hooked onto any side panel of the roll container. This allows for space-saving and gentle storage of the load securing system. For the next transport, it’s already in the right place – saving both time and money.`
                }
            }
        ]
    },
    usps: {
        headline: {
            de: "Individualisierbar, umweltschonend und einfach",
            en: "The All-Round Solution"
        },
        intro: {
            de: "",
            en: ""
        },
        items: [
            {
                title: {
                    de: "Personalisierbar",
                    en: "Customizable"
                },
                img: star.src,
                text: {
                    de: "Auf Wunsch versehen wir Ihre Schutzwand mit Ihrem individuellen Logo. Unser Team übernimmt die professionelle Aufbereitung und sorgt für eine platzgenaue Umsetzung nach Ihren Vorgaben. Zudem können die Außenbahnen der Schutzwand in verschiedenen Farben gefertigt werden – ganz nach Ihrem Corporate Design. Die Schutzwand ist wahlweise mit oder ohne integrierte Dokumententasche erhältlich.",
                    en: "If desired, the protective wall can be customized with your company logo. Our team will handle the professional preparation and ensure precise placement according to your specifications. The outer panels of the protective wall are also available in a variety of colors to match your corporate design. The protective wall is available with or without an integrated document pocket."
                }
            },
            {
                title: {
                    de: "Automatische Warenbestückung",
                    en: "automated goods loading"
                },
                img: star.src,
                text: {
                    de: "Sie setzen auf automatische Warenbestückung? Kein Problem – unsere Schutzwand ist vollständig mit diesem Verfahren kompatibel. Und sollte Ihr individueller Anwendungsfall weitere Anpassungen erfordern, entwickeln wir gerne eine passgenaue Lösung gemeinsam mit Ihnen.",
                    en: "Using automated goods loading? No problem – our protective wall is fully compatible with this process. And if your specific application requires additional customization, we’re happy to work with you to develop a tailored solution."
                }
            },
            {
                title: {
                    de: "Sicher, nachhaltig, stabil",
                    en: "Secure, sustainable, and strong"
                },
                img: star.src,
                text: {
                    de: "Die eingearbeiteten Glasfaserstäbe sorgen in Kombination mit den Haken für maximale Sicherheit beim Transport. Mit unserer nachhaltigen Lösung verabschieden Sie sich dauerhaft von herkömmlicher Stretchfolie – und optimieren gleichzeitig Ihre Lagerlogistik um ein Vielfaches.",
                    en: "The integrated fiberglass rods, together with the hooks, ensure maximum transport safety. With our sustainable solution, you can completely eliminate conventional stretch film – while significantly accelerating your warehouse logistics."
                }
            },
        ]
    },
    colors: {
        headline: {
            de: "Farbvarianten",
            en: "Color Variants"
        },
        intro: {
            de: "Für kleinere Stückzahlen ist unsere Schutzwand in fünf attraktiven Basisfarben erhältlich: Schwarz, Anthrazit, Dunkelblau, Hellgrau und Beige. Bei größeren Abnahmemengen fertigen wir das Gewebe selbstverständlich in Ihrer Wunschfarbe – perfekt abgestimmt auf Ihr Corporate Design. Beachten Sie bitte, dass die Farbe je nach Bildschirm vom Original abweichen kann.",
            en: "For smaller order quantities, our protective wall is available in five attractive standard colors: black, anthracite, navy blue, light grey, and beige. For larger volumes, we’re happy to produce the fabric in your custom color – perfectly matched to your corporate design. Please keep in mind, that the color on your monitor may differ from the original."
        },
        items: [
            {
                title: {
                    de: "Schwarz",
                    en: "Black",

                },
                image: schutzwandFarbig.src
            },
            {
                title: {
                    de: "Anthrazit",
                    en: "Anthracite",

                },
                image: schutzwandFarbig.src
            },
            {
                title: {
                    de: "Dunkelblau",
                    en: "Dark blue",

                },
                image: schutzwandFarbig.src
            },
            {
                title: {
                    de: "Hellgrau",
                    en: "Bright gray",

                },
                image: schutzwandFarbig.src
            },
            {
                title: {
                    de: "Beige",
                    en: "Sand",

                },
                image: schutzwandFarbig.src
            },
        ]
    },
    lists: [
        {
            title: {
                de: "Technische Daten",
                en: "Technical Data"
            },
            content: [
                {
                    de: "Verwendung von umweltschädlicher Stretch-Folie entfällt",
                    en: "Eliminates the need for environmentally harmful stretch film"
                },
                {
                    de: "Schutzwand wird durch die Kraft elastischer Bänder auf Zug gehalten; somit kein Überspannen der Seitengitter nach innen; Quetschungen empfindlicher Ware daher ausgeschlossen",
                    en: "Held under tension by elastic bands — prevents side grids from bending inward and protects sensitive goods from being crushed"
                },
                {
                    de: "Vorspannung justierbar",
                    en: "Adjustable tensioning"
                },
                {
                    de: "Kompatibel mit automatisierter Warenbestückung des Rollbehälters",
                    en: "Compatible with automated goods loading systems for roll containers"
                },
                {
                    de: "Schutzwände können nach Gebrauch an den Seitengittern verstaut bzw. eingeklappt werden",
                    en: "Can be folded or stored on the side panels when not in use"
                },
                {
                    de: "Stabilität: Stabilisierung durch zwei an den Seiten eingenähte Glasfaserstäbe",
                    en: "Stabilized with two integrated fiberglass rods sewn into the sides"
                },
                {
                    de: "Außenbahnen in Wunschfarbe oder transparent erhältlich",
                    en: "Outer panels available in custom colors or transparent"
                },
                {
                    de: "Personalisierung der Schutzwand mit Ihrem Kundenlogo",
                    en: "Custom branding with your company logo possible"
                },
                {
                    de: "Zusätzliche Verstärkungsstäbe",
                    en: "Optional reinforcement rods for extra durability"
                },
                {
                    de: "Dokumententasche",
                    en: "Integrated document pocket"
                },
                {
                    de: "Diebstahlschutz (Sicherungskeile)",
                    en: "Anti-theft protection (locking wedges)"
                }
            ]
        }
    ],
    optionalRichtext: {
        title: {
            de: "Richtext Titel Optional",
            en: "Richtext Title Optional"
        },
        content: {
            de: "Deutscher Richtext set:html",
            en: "English Richtext set:html"
        }
    }
}