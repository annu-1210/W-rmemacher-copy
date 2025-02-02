import React from "react";
import { FooterLogo, MailBoxIcon } from "./Icon";
import Text from "./Text";
import SocialLinks from "./SocialLinks";
import ActionButton from "./ActionButton";
import { SocialLink, quickLinks, legalLinks } from "./Helper";
import FooterList from "../FooterList";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();

  const para =
    "Lorem ipsum dolor sit amet consect itae orci vivamus elementum.";
  return (
    <footer className="footer">
      <div className="rounded-2xl max-w-[1920px] mx-auto px-4 xsm:px-10 lg:px-[50px] xl:pl-[100px] xl:pr-[118px] pt-4 lg:pt-[50px] pb-4 flex flex-col gap-[35px] justify-between items-start xl:items-center bg-secondary mt-20 sm:mt-10 md:mt-[100px] lg:mt-[150px] relative z-10">
        <div className="flex flex-col 2xl:flex-row items-start 2xl:justify-between gap-10 xl:gap-12 2xl:gap-x-32 w-full max-w-[1400px]">
          <div className="flex flex-col gap-y-3 xsm:gap-y-0 lg:gap-y-6 w-full max-w-[290px] ">
            <a
              href="/"
              className="flex w-[90px] lg:w-[140px] h-[100px] xsm:h-[121px]"
            >
              <FooterLogo width={140} height={121} />
            </a>
            <Text label={para} size="xsm" color="primary" />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-20 xl:gap-40 2xl:gap-10 w-full max-w-[1400px]">
            <div className="flex gap-5 lg:gap-7 w-full justify-between">
              <FooterList
                title="Quick Links"
                items={quickLinks}
                fontSize="text-xs lg:text-sm"
              />
              <FooterList
                title="Legal"
                items={legalLinks}
                fontSize="text-xs xsm:text-sm lg:text-base"
              />
            </div>
            <div className="flex flex-col w-full xl:max-w-[368px] gap-y-3 md:gap-y-5">
              <h4 className="text-sm xsm:text-base font-PpEditorialRegular italic text-primary">
                Kostenlose Newsletter-Anmeldung:
              </h4>
              <form className="flex max-w-[400px] xl:w-[368px] items-center justify-between p-2 border border-neutral rounded">
                <div className="flex items-center justify-center py-0.5 p-px ">
                  <MailBoxIcon />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Eingabe Ihrer E-Mail-Adresse"
                  className=" w-full pl-1.5 bg-transparent text-xs lg:text-sm  text-neutral font-MontserratRegular  placeholder:text-neutral placeholder:font-MontserratRegular outline-none"
                />
                <ActionButton label="Anmelden" color="primary" size="sm" />
              </form>

              <div className="flex gap-[13.5px] max-w-[206px] mt-2 md:mt-0">
                {SocialLink.map((item) => {
                  return (
                    <a
                      key={item.id}
                      href={item.link ?? "/"}
                      className="flex items-center justify-center w-[31px] h-[31px] rounded-full cursor-pointer bg-transparent border border-neutral  "
                      target="_blank"
                      rel="noopener noreferrer"
                      // className="text-primary"
                      // link={item.link}
                    >
                      <Image
                        width={16.88}
                        height={16.88}
                        alt="image"
                        className=""
                        src={item.image}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-4 pb-1 border-t border-neutral max-w-[1140px] w-full text-neutral text-center sm:text-start text-xs xsm:text-sm sm:text-base font-Gilroy">
          <p>&copy; Wärmemacher {currentYear}, Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
