import React from "react";
import { FooterLogo, MailBoxIcon } from "./Icon";
import Text from "./Text";
import SocialLinks from "./SocialLinks";
import ActionButton from "./ActionButton";
import { SocialLink, quickLinks, legalLinks } from "./Helper";
import FooterList from "../FooterList";

function Footer() {
  const currentYear = new Date().getFullYear();

  const para =
    "Lorem ipsum dolor sit amet consect itae orci vivamus elementum.";
  return (
    <footer className="footer">
      <div className="rounded-2xl max-w-[1400px] mx-auto pl-[100px] pr-[118px] pt-[50px] pb-11 flex flex-col gap-[35px] justify-between items-center bg-secondary mt-[150px]">
        <div className="flex justify-between gap-x-32 w-full">
          <div className="flex flex-col gap-y-6 max-w-[290px] ">
            <a href="/" className="flex w-[140px] h-[121px]">
              <FooterLogo width={140} height={121} />
            </a>
            <Text label={para} size="xsm" color="primary" />
          </div>
          <div className="flex justify-between gap-10 ">
            <div className="flex gap-7">
              <FooterList title="Quick Links" items={quickLinks} fontSize="text-sm"/>
              <FooterList title="Legal" items={legalLinks} fontSize="text-base"/>
            </div>
            <div className="flex flex-col max-w-[368px] gap-y-5">
              <h4 className="text-base font-PpEditorialRegular italic text-primary">
                Kostenlose Newsletter-Anmeldung:
              </h4>
              <form className="flex  w-[368px] items-center justify-between p-2 border border-borderColor rounded">
                <div className="flex items-center justify-center py-0.5 p-px ">
                  <MailBoxIcon />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Eingabe Ihrer E-Mail-Adresse"
                  className="w-full pl-1.5 bg-transparent text-sm  text-neutral font-MontserratRegular placeholder:text-sm placeholder:text-neutral placeholder:font-MontserratRegular outline-none"
                />
                <ActionButton label="Anmelden" color="primary" size="sm" />
              </form>

              <div className="flex gap-[13.5px] max-w-[206px]">
                {SocialLink.map((item) => {
                  return (
                    <SocialLinks
                      key={item.id}
                      className="text-primary"
                      link={item.link}
                    >
                      {item.icon}
                    </SocialLinks>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-4 pb-1 border-t border-neutral max-w-[1140px] w-full text-neutral text-base font-Gilroy">
          <p>&copy; Wärmemacher {currentYear}, Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
