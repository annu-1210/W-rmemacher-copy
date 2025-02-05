import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import blogImg1 from "../../../public/images/blog1.png";
import blogImg2 from "../../../public/images/blog2.png";
import blogImg3 from "../../../public/images/blog3.png";
import blogImg4 from "../../../public/images/blog4.png";
import blogImg5 from "../../../public/images/blog5.png";
import sliderImg1 from "../../../public/images/w-6.png";
import sliderImg2 from "../../../public/images/w-14.jpeg";
import AboutSection from "../AboutSection";
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
    url: "",
  },
  {
    label: "Produkte",
    url: "",
  },
  {
    label: "Ratgeber und Blog",
    url: "",
  },
  {
    label: "Kontakt",
    url: "",
  },
];

export const SliderData = [
  {
    id: 1,
    image: {
      src: sliderImg1,
      alt: "Slider Image 1",
    },
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
        "top-[100px] xsm:top-[100px] sm:top-[150px] md:top-[240px] lg:top-[380px] xl:top-[278px]",
      textWidth: "w-[450px] lg:w-[718px]",
    },
  },

  {
    id: 2,
    image: {
      src: sliderImg2,
      alt: "Slider Image 2",
    },
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
        "top-[100px] sm:top-[150px] md:top-[240px] lg:top-[440px] xl:top-[365px]",
      textWidth: "w-[420px] lg:w-[550px] xl:w-[686px]",
    },
  },
];

export const navigationTabs = [
  {
    id: "about-us",
    label: "Über uns",
    content: <AboutSection />,
  },
  {
    id: "sustainability",
    label: "Nachhaltigkeit",
    content: <Sustainability />,
  },
  {
    id: "technology",
    label: "Technologie",
    content: <Technology className="gradient-icon" />,
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

// export const quickLinks = [
//   { id: "home", label: "Home", link: "/" },
//   { id: "about-us", label: "Über uns", link: "/uber-uns" },
//   { id: "products", label: "Produkte", link: "/produkte" },
//   { id: "blog", label: "Ratgeber und Blog", link: "/ratgeber-blog" },
//   { id: "contact", label: "Kontakt", link: "/kontakt" },
// ];

// export const legalLinks = [
//   { id: "imprint", label: "Impressum", link: "/impressum" },
//   { id: "terms-conditions", label: "Allgemeine Geschäftsbedingungen", link: "/agb" },
//   { id: "privacy-policy", label: "Datenschutz und Richtlinien", link: "/datenschutz" },
//   { id: "faqs", label: "FAQs", link: "/faqs" },
// ];
