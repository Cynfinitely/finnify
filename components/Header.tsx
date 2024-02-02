import React from "react";
import Image from "next/image";
import logo from "../public/images/logo_without_bg.png";

const Header = () => {
  return (
    <div className="flex flex-row  h-1/4">
      <div className="w-1/4">
        <Image src={logo} width={200} height={200} alt="Finnify Logo" />
      </div>
      <div className="w-3/4 flex flex-col  items-center h-full">
        LEARN FINNISH WITH FINNIFY!
      </div>
    </div>
  );
};

export default Header;
