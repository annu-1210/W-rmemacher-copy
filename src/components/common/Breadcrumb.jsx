import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

function Breadcrumb() {
  return (
    <nav className=" bg-transparent absolute top-[100px] left-[60px] z-10">
      <div className="max-w-[333px] mx-auto pr-5 py-2.5 ">
        <div className="flex items-center space-x-1 text-base font-MontserratRegular">
          <span className="text-ironGray">
            <BiHomeAlt2 size={19} />
          </span>
          <Link href="/" className="text-ironGray hover:text-gray-900">
            Home
          </Link>
          <span className="text-ironGray">
            <MdKeyboardArrowRight />
          </span>
          <Link href="/products" className="text-ironGray hover:text-gray-900">
            Produkte
          </Link>
          <span className="text-ironGray">
            <MdKeyboardArrowRight />
          </span>
          <span className="text-transparent bg-clip-text bg-custom-gradient font-MontserratMedium">
            Produktdetails
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Breadcrumb;
