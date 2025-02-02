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
    title: "Home",
    link: "",
  },
  {
    title: "Über uns",
    link: "",
  },
  {
    title: "Produkte",
    link: "",
  },
  {
    title: "Ratgeber und Blog",
    link: "",
  },
  {
    title: "Kontakt",
    link: "",
  },
];

export const SliderData = [
  {
    id: 1,
    img: sliderImg1,
    alt: "Slider Image 1",
    paragraph:
      "Entdecken Sie den Badezimmerspiegel SOLIS mit integrierter Infrarotheizung und Smart Home in Premium-Qualität.",
    MontserratLabel: "Erleben Sie schon heute das",
    Montserratstyle:
      " transition-all  max-w-[550px] xl:max-w-[718px] font-MontserratMedium",
    EditorialLabel: "Badezimmer von Morgen",
    EditorialStyle: "font-PpEditorialRegular italic  ",
    TextWidth: "w-[450px] lg:w-[718px]",
    position: "top-[100px] xsm:top-[100px] sm:top-[150px] md:top-[240px] lg:top-[380px] xl:top-[278px]",
  },
  {
    id: 2,
    img: sliderImg2,
    alt: "Slider Image 2",
    paragraph:
      "Entdecken Sie den Badezimmerspiegel VIVA mit integrierter Infrarotheizung und Smart Home in Premium-Qualität.",
    MontserratLabel: "Innovativste Wärmetechnik",
    Montserratstyle: " font-PpEditorialRegular italic  xl:leading-[73.14px]",
    EditorialLabel: "im Bad: VIVA",
    EditorialStyle:
      " transition-all  max-w-[550px] xl:max-w-[718px] font-MontserratMedium",
    TextWidth: "w-[420px] lg:w-[550px] xl:w-[686px]",
    position: "top-[100px] sm:top-[150px] md:top-[240px] lg:top-[440px] xl:top-[365px]",
  },
];

export const navTabs = [
  {
    id: "uber-uns",
    title: "Über uns",
    component: <AboutSection />,
  },
  {
    id: "sustainability",
    title: "Nachhaltigkeit",
    component: <Sustainability />,
  },
  {
    id: "technology",
    title: "Technologie",
    component: <Technology className="gradient-icon" />,
  },
  {
    id: "services",
    title: "Service",
    component: <Services />,
  },
];

export const QualitiesData = [
  {
    id: "innovative",
    label: "Zeitlose Eleganz trifft auf innovative Technologie",
    description:
      "Wärmemacher Badezimmerspiegel setzen neue Maßstäben in Design und Funktionalität – für ein Badezimmer, das durch zeitlose Ästhetik und höchste technische Raffinesse überzeugt.",
    image: qualitiesImg1,
  },
  {
    id: "smart-home",
    label: "Smart Home Funktionalität",
    description:
      "Mit unseren Badezimmerspiegeln erleben Sie Smart Home neu – von der Weckfunktion über Wetter- und Temperaturanzeigen bis hin zur nahtlosen WiFi-Konnektivität. Erweitern Sie Ihren Alltag mit intelligentem Luxus, der Ihr Badezimmer revolutioniert.",
    image: qualitiesImg2,
  },
  {
    id: "infrared-heating",
    label: "Wärme und Vitalität durch Infrarotheizung",
    description:
      "Unsere Badezimmerspiegel bieten nicht nur kristallklare Reflexionen, sondern fördern mit sanfter Infrarotwärme Ihr Wohlbefinden und Ihre Vitalität. Die integrierte Anti-Beschlagsfunktion sorgt zudem jederzeit für klare Sicht – für ein Badeerlebnis, das Komfort und Stil bietet.",
    image: qualitiesImg3,
  },
];

export const BlogData1 = [
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
];

export const BlogData2 = [
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
];

export const SocialLink = [
  {
    id: 1,
    // icon: <FaFacebookF />,
    image:"/facebook.svg",
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    // icon: <RiTwitterXLine />,
    image:"/twitter.svg",
    link: "https://www.twitter.com",
  },
  {
    id: 3,
    // icon: <FaInstagram />,
    image:"/instagram.svg",
    link: "https://www.instagram.com",
  },
  {
    id: 4,
    // icon: <RiTelegram2Fill />,
    image:"/telegram.svg",
    link: "https://www.telegram.com",
  },
  {
    id: 5,
    // icon: <FaTiktok />,
    image:"/tiktok.svg",
    link: "https://www.tiktok.com",
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
