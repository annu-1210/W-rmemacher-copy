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

export const NavLinks = [
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

export const BlogData1 = [{
  id: 1,
  title: "Lorem ipsum dolor sit amet consectet onsequat.",
  img: blogImg1,
  height:494,
  description: "Lorem ipsum dolor sit amet consectetur. Erat sociis risus dignissim feugiat amet a molestie habitasse elis congue odio ",
}, 
{
  id: 2,
  title: "Lorem ipsum do et consectet onsequat.",
  img: blogImg4,
  height:302,
  description: "Lorem ipsum dolor sit amet consectetur. Erat sociis risus dignissim feugiat amet a molestie habitasse elis congue odio ",
}
];

export const BlogData2 = [{
  id: 1,
  title: "Amet consectet onsequat.",
  img: blogImg2,
  description: "Lorem ipsum dolor sit amet cat sociis risus dignissim feugiat amet a molestie habitasse elis congue odio ",
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
  description: "Lorem ipsum dolor sit amet cat sociis risus dignissim feugiat amet a molestie habitasse elis congue odio ",
}
];


export const SocialLink = [
  {
    id: 1,
    icon: (
      <FaFacebookF
        style={{
          backgroundColor:
            "linear-gradient(101.49deg, #E94E1B 0.92%, #FDC801 96.93%)",
        }}
      />
    ),
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <RiTwitterXLine />,
    link: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  {
    id: 4,
    icon: <RiTelegram2Fill />,
    link: "https://www.telegram.com",
  },
  {
    id: 5,
    icon: <FaTiktok />,
    link: "https://www.tiktok.com",
  },
];

export const FooterListData = [
  {
    id: 1,
    title: "Quick Links",
    list: ["Home", "Über uns", "Produkte", "Ratgeber und Blog", "Kontakt"],
  },
  {
    id: 2,
    title: "Legal",
    list: [
      " Impressum",
      "Allgemeine Geschäftsbedingungen",
      "Datenschutz und Richtlinien",
      "FAQs",
    ],
  },
];
