import blogImg1 from "../../../public/images/blog1.png";
import blogImg2 from "../../../public/images/blog2.png";
import blogImg3 from "../../../public/images/blog3.png";
import blogImg4 from "../../../public/images/blog4.png";
import blogImg5 from "../../../public/images/blog5.png";
import sliderImg1 from "../../../public/images/w-6.png";
import sliderImg2 from "../../../public/images/w-14.jpeg";
import UeberUns from "../UeberUns";
import Sustainability from "../Sustainability";
import Technology from "../Technology";
import Services from "../Services";
import qualitiesImg1 from "../../../public/images/w-11.png";
import qualitiesImg2 from "../../../public/images/w-12.png";
import qualitiesImg3 from "../../../public/images/w-13.png";

export const HeaderLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Über uns",
    url: "/about",
  },
  {
    label: "Produkte",
    url: "/products",
  },
  {
    label: "Ratgeber und Blog",
    url: "/blogs",
  },
  {
    label: "Kontakt",
    url: "",
  },
];

export const SliderData = [
  {
    id: 1,
    image: "/images/w-6.png",
    description:
      "Entdecken Sie den Badezimmerspiegel SOLIS mit integrierter Infrarotheizung und Smart Home in Premium-Qualität.",
    heading: {
      primaryText: "Erleben Sie schon heute das",
      primaryStyle:
        "transition-all max-w-[550px] xl:max-w-[718px] font-MontserratMedium",
      secondaryText: "Badezimmer von Morgen",
      secondaryStyle: "font-PpEditorialRegular italic",
    },
    layout: {
      position:
        "top-[60px] xsm:top-[30px] sm:top-[70px] md:top-[160px] lg:top-[330px] xl:top-[278px]",
      textWidth: "w-[450px] lg:w-[718px]",
    },
  },

  {
    id: 2,
    image: "/images/w-14.jpeg",
    description:
      "Entdecken Sie den Badezimmerspiegel VIVA mit integrierter Infrarotheizung und Smart Home in Premium-Qualität.",
    heading: {
      primaryText: "Innovativste Wärmetechnik",
      primaryStyle: "font-PpEditorialRegular italic xl:leading-[73.14px]",
      secondaryText: "im Bad: VIVA",
      secondaryStyle:
        "transition-all max-w-[550px] xl:max-w-[718px] font-MontserratMedium",
    },
    layout: {
      position:
        "top-[60px] xsm:top-[30px] sm:top-[70px] md:top-[160px] lg:top-[390px] xl:top-[365px]",
      textWidth: "w-[420px] lg:w-[550px] xl:w-[686px]",
    },
  },
];

export const navigationTabs = [
  {
    id: "about-us",
    label: "Über uns",
    content: <UeberUns />,
  },
  {
    id: "sustainability",
    label: "Nachhaltigkeit",
    content: <Sustainability />,
  },
  {
    id: "technology",
    label: "Technologie",
    content: <Technology />,
  },
  {
    id: "services",
    label: "Service",
    content: <Services />,
  },
];

export const productQualities = [
  {
    id: "innovative-design",
    title: "Zeitlose Eleganz trifft auf innovative Technologie",
    description:
      "Wärmemacher Badezimmerspiegel setzen neue Maßstäben in Design und Funktionalität – für ein Badezimmer, das durch zeitlose Ästhetik und höchste technische Raffinesse überzeugt.",
    imageSrc: qualitiesImg1,
  },
  {
    id: "smart-home-features",
    title: "Smart Home Funktionalität",
    description:
      "Mit unseren Badezimmerspiegeln erleben Sie Smart Home neu – von der Weckfunktion über Wetter- und Temperaturanzeigen bis hin zur nahtlosen WiFi-Konnektivität. Erweitern Sie Ihren Alltag mit intelligentem Luxus, der Ihr Badezimmer revolutioniert.",
    imageSrc: qualitiesImg2,
  },
  {
    id: "infrared-heating-benefits",
    title: "Wärme und Vitalität durch Infrarotheizung",
    description:
      "Unsere Badezimmerspiegel bieten nicht nur kristallklare Reflexionen, sondern fördern mit sanfter Infrarotwärme Ihr Wohlbefinden und Ihre Vitalität. Die integrierte Anti-Beschlagsfunktion sorgt zudem jederzeit für klare Sicht – für ein Badeerlebnis, das Komfort und Stil bietet.",
    imageSrc: qualitiesImg3,
  },
];

export const BlogData = {
  section1: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectet onsequat.",
      img: blogImg1,
      height: 494,
      description:
        "Lorem ipsum dolor sit amet consectetur. Erat sociis risus dignissim feugiat amet a molestie habitasse elis congue odio ",
    },
    {
      id: 2,
      title: "Lorem ipsum do et consectet onsequat.",
      img: blogImg4,
      height: 302,
      description:
        "Lorem ipsum dolor sit amet consectetur. Erat sociis risus dignissim feugiat amet a molestie habitasse elis congue odio ",
    },
  ],
  section2: [
    {
      id: 1,
      title: "Amet consectet onsequat.",
      img: blogImg2,
      description:
        "Lorem ipsum dolor sit amet cat sociis risus dignissim feugiat amet a molestie habitasse elis congue odio ",
    },
    {
      id: 2,
      title: "Amet consectet onsequat.",
      img: blogImg3,
      description: "Lorem ipsum dolor sit amemtasse elngue odio ",
    },
    {
      id: 3,
      title: "Amet consectet onsequat.",
      img: blogImg5,
      description:
        "Lorem ipsum dolor sit amet cat sociis risus dignissim feugiat amet a molestie habitasse elis congue odio ",
    },
  ],
};

export const socialLinksData = [
  {
    id: "facebook",
    iconSrc: "/facebook.svg",
    dimensions: { width: 20.25, height: 16.88 },
    url: "https://www.facebook.com",
  },
  {
    id: "twitter",
    iconSrc: "/twitter.svg",
    dimensions: { width: 13.12, height: 13.5 },
    url: "https://www.twitter.com",
  },
  {
    id: "instagram",
    iconSrc: "/instagram.svg",
    dimensions: { width: 16.88, height: 16.88 },
    url: "https://www.instagram.com",
  },
  {
    id: "telegram",
    iconSrc: "/telegram.svg",
    dimensions: { width: 20.25, height: 16.88 },
    url: "https://www.telegram.com",
  },
  {
    id: "tiktok",
    iconSrc: "/tiktok.svg",
    dimensions: { width: 20, height: 20 },
    url: "https://www.tiktok.com",
  },
];

export const quickLinks = [
  { tag: "Home" },
  { tag: "Über uns" },
  { tag: "Produkte" },
  { tag: "Ratgeber und Blog" },
  { tag: "Kontakt" },
];

export const legalLinks = [
  { tag: "Impressum" },
  { tag: "Allgemeine Geschäftsbedingungen" },
  { tag: "Datenschutz und Richtlinien" },
  { tag: "FAQs" },
];

export const features = [
  {
    id: 1,
    imgSrc: "/MiMedia.svg",
    label: "Anti-Beschlags funktion",
  },
  {
    id: 2,
    imgSrc: "/wifi.svg",
    label: "Smart Home / WiFi",
  },
  {
    id: 3,
    imgSrc: "/weather.svg",
    label: "Wetter-Station",
  },
  {
    id: 4,
    imgSrc: "/temperature.svg",
    label: "Temperatur anzeige",
  },
  {
    id: 5,
    imgSrc: "/calender.svg",
    label: "Integrierter Kalender",
  },
  {
    id: 6,
    imgSrc: "/Uhrzeit.svg",
    label: "Uhrzeit",
  },
  {
    id: 7,
    imgSrc: "/LED.svg",
    label: "LED-\nAnzeige",
  },
  {
    id: 8,
    imgSrc: "/alarm-clock1.svg",
    label: "Alarm\nfunktion",
  },
];

export const articles = [
  {
    id: 1,
    img: "/images/w-16.png",
    height: 850,
    description:
      "Mit integrierter Infrarotheizung und Smart-Home-Technologie verwandeln unsere Spiegel das Badezimmer in einen Ort der Ruhe, Schönheit und des modernen Komforts",
  },
  {
    id: 2,
    img: "/images/w-15.png",
    height: 341,
    description:
      "Bei Wärmemacher glauben wir, dass das Badezimmer der Ort ist, an dem jeder Tag beginnt und endet – und deshalb sollte es ein Raum sein, der nicht nur funktional, sondern inspirierend ist. Unsere Mission ist es, mit technologischer Innovation und exzellentem Design ein Badezimmererlebnis zu schaffen, das weit über das Gewöhnliche hinausgeht.  ",
  },
  {
    id: 3,
    img: "/images/w-17.png",
    height: 345,
    description:
      "Bis zu 90% der Wärme wird direkt an den Körper abgegeben – für eine gezielte und effiziente Wärmeverteilung in Ihrem Badezimmer.",
  },
];

export const featureHighlightDescription = [
  {
    heading: {
      regular: "Innovation trifft auf",
      italic: "zeitlosen Luxus",
    },
    content: [
      "Wärmemacher setzt neue Maßstäbe für Ihr Badezimmer – ein Spiegel, der weit mehr kann als nur reflektieren. Unsere integrierte Infrarotheizung liefert nicht nur wohltuende Wärme, sondern fördert auch Ihre Vitalität und schützt Ihr Badezimmer vor Schimmelbildung",
      "Die intelligenten Smart Home Funktionen machen Ihren Alltag komfortabler: Mit Wecker, Wetterstation, Temperaturanzeige und WiFi haben Sie alles im Blick, während die Anti-Beschlagsfunktion und die elegante LED-Beleuchtung für klare Sicht sorgen, wann immer Sie sie brauchen.",
      "Dieses zeitlos edle Design verwandelt Ihr Badezimmer in einen Raum, der perfekt auf Ihre Bedürfnisse abgestimmt ist und Ihnen täglich ein Höchstmaß an Komfort und Stil bietet",
    ],
  },
  {
    content: [
      "Wärmemacher steht für unvergleichliche Qualität und höchste Handwerkskunst. Unsere Badezimmerspiegel werden mit größter Sorgfalt und Präzision gefertigt, um den höchsten Ansprüchen gerecht zu werden. Jedes Detail wird sorgfältig durchdacht, von der Auswahl der hochwertigsten Materialien bis hin zur Integration modernster Technologien",
      "Wir kombinieren zeitloses Design mit zukunftsweisender Funktionalität, um Produkte zu schaffen, die nicht nur optisch beeindrucken, sondern auch durch ihre Langlebigkeit und Leistungsfähigkeit überzeugen",
      "Bei Wärmemacher verschmelzen Ästhetik und Technik zu einem einzigartigen Erlebnis, das Ihrem Badezimmer eine neue Dimension verleiht",
    ],
  },
];

export const bathroomTransformationArticles = [
  {
    id: 1,
    img: "/images/w-16.png",
    height: 778,
    description:
      "Lorem ipsum dolor sit amet consectetur. Consectetur platea tortor id pretium m commodo penatibus aenean molestie.  ",
  },
  {
    id: 2,
    img: "/images/w-15.png",
    height: 341,
    description:
      "Integrierte Funktion für Wettervorhersage und Temperatur – behalten Sie jederzeit die Uhrzeit und Temperatur im Auge.  ",
  },
  {
    id: 3,
    img: "/images/w-18.jpeg",
    height: 345,
    description:
      "Im gedrückten Zustand der digitalen Taste wird die Anti-Beschlagsfunktion am Spiegel aktiviert.",
  },
];

export const aboutSectionSlides = [
  {
    imageSrc: "/images/w-15.png",
    title: "Steigerung der Vitalität und Wärme",
    description:
      "Steigerung Sie Ihre Vitalität und sorgen Sie für eine gleichverteilte Wärme in Ihrem Bad durch integrierte Infrarotheizung",
  },
  {
    imageSrc: "/images/w-12.png",
    title: "Smart Home",
    description:
      "Intelligenter Spiegel mit innovativen Dual-Bluetooth-Lautsprechern – genießen Sie Ihre Lieblingsmusik mit 360-Grad-Surround-Sound",
  },
  {
    imageSrc: "/images/w-7.jpeg",
    title: "Anti-Beschlagsfunktion",
    description:
      "Halten Sie die digitale Taste gedrückt und beginnen Sie die Anti-Beschlagsfunktion – innerhalb von 5-10 Minuten weist der Spiegel ein klares Bild auf.",
  },
  {
    imageSrc: "/images/w-18.jpeg",
    title: "Technologische Funktionalität",
    description:
      "Erleichtern Sie Ihren Tag morgens und abends mit integrierten Funktionalitäten wie bspw. Wetter-Anzeige, Kalender oder der Temperatur-Anzeige",
  },
];

export const smartMirrorsData = [
  {
    heading: {
      regular: "Erleben Sie unbegrenzte Möglichkeiten ",
      italic: "unserer Smart Mirror Spiegel",
    },
    content:
      "Entdecken Sie einzigartig technologische Funktionalität unserer Wärmemacher Badezimmerspiegel.",
    list: [
      "LED Display",
      "Wetterstation",
      "Anti-Beschlagsfunktion",
      "Temperatur- und Uhranzeige",
      "WiFi (Bluetooth)",
      "Timer",
    ],
    footerNote: "Machen Sie Ihr Bad bereit für Morgen – schon heute.",
  },
  {
    imageSrc: "/images/w-3.png",
    heading: {
      regular: "Einfache Konnektivität mit ",
      italic: "der Wise App",
    },
    content: [
      "Der intelligente Badezimmerspiegel von Wärmemacher kann über die App WiseMirror gesteuert werden und unterstützt nur das 2,4-GHz-Netzwerk.",
      "Wenn Sie also einen Dualband-Router verwenden, trennen Sie bitte die 2,4G- und 5G-Netzwerke oder schalten Sie 5G aus, bis die WLAN-Verbindung hergestellt ist. Alternativ können Sie es über einen Hotspot verbinden. ",
    ],
    dimensions: {
      width: 529,
      height: 578,
      gap: 58,
    },
    flexDirection: "row",
  },
];

export const GuideAndBlogFaqs = [
  {
    question: "Lorem ipsum dolor sit amet cmentum purus cum?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet cmentum purus cum?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet cmentum purus cum?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet cmentum purus cum?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet cmentum purus cum?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Lorem ipsum dolor sit amet cmentum purus cum?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
];

export const productFeatureHighlightDescription = [
  {
    heading: {
      regular: "Lorem ipsum dolor sit ",
      italic: "amet consecte Arcu",
    },
    content: [
      "Lorem ipsum dolor sit amet consectetur. Id interdum habitasse habitant id amet eget lorem. Nulla elit neque pharetra a. Quam eget amet neque nulla fermentum nam vitae sagittis. A neque vestibulum in dui bibendum. Cras porttitor molestie amet eget diam enim suspendisse pellentesque. Eget enim massa amet fringilla pharetra convallis turpis. Egestas sit congue faucibus pellentesque id sed cras sit. Ut nisi euismod urna sollicitudin commodo gravida sed. Nunc in cras donec facilisi. Nibh imperdiet faucibus dignissim ac massa nec.",
    ],
  },
  {
    heading: {
      regular: "Erleben Sie",
      italic: " wohltuende Wärme",
    },
    content: [
      "Steigern Sie Ihre Vitalität und entdecken Sie die zahlreichen Vorteile durch die Infrarotheizung wie bspw. gleichmäßige Wärmeverteilung im Raum, keine trockne Luft und ein umweltfreundliches System im Vergleich zu konventionellen Heizsystemen.",
    ],
  },
];

export const productDetailsFaqs = [
  {
    question: "Wie funktioniert die integrierte Infrarotheizung im Spiegel?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Welche Smart Home Funktionen bietet der Spiegel?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Ist die Installation des Spiegels kompliziert?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Kann der Spiegel auch in feuchten Räumen verwendet werden?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Welche Vorteile hat die LED-Beleuchtung des Spiegels?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Wie wird die Infrarotheizung gesteuert?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Wie lange dauert es, bis der Spiegel versandfertig ist?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
  {
    question: "Welche Garantie bieten wir auf den Spiegel?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Molestie duis tincidunt ferme ntum eleifend tristique scelerisque. Consectetur cursus faucibus.",
  },
];