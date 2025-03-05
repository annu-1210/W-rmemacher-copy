"use client";
import React, { useState, useEffect } from "react";
import { HeaderLinks } from "./Helper";
import { Logo } from "./Icon";
import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import Dropdown from "../Dropdown";
import { usePathname } from "next/navigation";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  // Determine if we're on a product detail page
  const isProductDetailPage = pathname.startsWith("/products/") && pathname !== "/products";

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <header className="max-w-[1880px] w-full">
      <div className="w-full overflow-hidden max-w-[310px] xxsm:max-w-[360px] xsm:max-w-[385px] sm:max-w-[600px] md:max-w-[728px] lg:max-w-[984px] xl:max-w-[1400px] 4xl:max-w-[1880px] absolute z-20 bg-transparent top-2 xsm:top-5 left-0 right-0 flex items-center justify-between sm:pt-2 xl:pt-3.5 px-6 md:px-8 xl:px-10 mx-auto">
        <div
          className="flex lg:hidden w-[50px] xsm:w-10 sm:w-20"
          onClick={toggleNavbar}
        >
          <VscMenu
            size={26}
            className={`cursor-pointer ${
              isProductDetailPage ? "text-gray-900" : "text-neutral"
            } w-[20px] sm:w-[26px]`}
          />
        </div>
        <div className="hidden lg:flex items-center gap-x-5">
          {HeaderLinks.map((link, index) => {
            const isActive = pathname === link.url;
            return (
              <Link
                key={index}
                href={link.url}
                className={`${
                  isProductDetailPage ? "text-gray-900" : "text-neutral"
                } text-xs xl:text-sm font-MontserratRegular underline-animation hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <a
          href="/"
          className="flex w-[40px] sm:w-[50px] md:w-[60px] xl:w-[77px] xl:h-[66px] items-center justify-center"
        >
          <Logo width={77} height={66} />
        </a>
        <div className="flex lg:w-[300px] xl:w-[450px] bg-transparent justify-end">
          <Dropdown />
        </div>
        
        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={toggleNavbar}
          />
          
          {/* Mobile Menu */}
          <div 
            className={`absolute left-0 top-0 h-full transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <HeaderMobile onClose={toggleNavbar} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
