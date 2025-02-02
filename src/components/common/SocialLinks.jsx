import React from "react";

function SocialLinks({ children, size = 15, link, className = "" }) {
  return (
    <>
      <a
        href={link ?? "/"}
        className={`flex items-center justify-center w-[31px] h-[31px] rounded-full cursor-pointer bg-transparent border border-neutral ${className} `}
        target="_blank" rel="noopener noreferrer"
      >
        {React.cloneElement(children, { size })}
      </a>
    </>
  );
}

export default SocialLinks;