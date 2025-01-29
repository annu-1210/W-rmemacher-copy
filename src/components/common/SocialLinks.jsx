import React from "react";

function SocialLinks({ children, size = 20, link, className = "" }) {
  return (
    <>
      <a
        href={link ?? "/"}
        className={`flex items-center justify-center w-30 h-30 rounded-full cursor-pointer  ${className} `}
        target="_blank" rel="noopener noreferrer"
      >
        {React.cloneElement(children, { size })}
      </a>
    </>
  );
}

export default SocialLinks;