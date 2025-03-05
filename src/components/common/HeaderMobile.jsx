"use client";
import React from "react";
import { HeaderLinks } from "./Helper";
import { Logo } from "./Icon";
import { IoClose } from "react-icons/io5";

function HeaderMobile({ onClose }) {
  return (
    <div className="flex flex-col items-start justify-start h-screen w-full max-w-[300px] bg-custom-gradient backdrop-blur-md shadow-lg">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-iron-gray rounded-full transition-colors"
        aria-label="Close menu"
      >
        <IoClose size={24} className="text-quaternary" />
      </button>

      {/* Logo */}
      <div className="w-full p-6 border-b border-iron-gray">
        <a href="/" className="flex w-[50px] sm:w-[77px] sm:h-[66px]">
          <Logo width={77} height={66} style={{ color: "black" }} />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="w-full p-6">
        <ul className="flex flex-col gap-y-6">
          {HeaderLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="text-quaternary text-lg font-MontserratMedium hover:text-primary transition-colors"
                onClick={onClose}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMobile;
