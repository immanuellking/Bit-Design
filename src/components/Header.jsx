import React from "react";
import Business from "./Business";

function Header() {
  return (
    <div className="w-full bg-white px-8 py-2 flex justify-between items-center">
      <Business />
      <div className="flex items-center gap-x-8">
        <div className="flex items-center gap-x-4">
          <img
            src="/header/search.svg"
            alt="search"
            className="w-[34px] h-[34px]"
          />
          <img
            src="/header/settings.svg"
            alt="settings"
            className="w-[34px] h-[34px]"
          />
          <img
            src="/header/bell.svg"
            alt="bell"
            className="w-[34px] h-[34px]"
          />
        </div>

        <div className="flex items-center rounded-full gap-x-2 bg-gray-500 p-2">
          <div className="bg-white rounded-full">
            <img
              src="/header/sun.svg"
              alt="light-mode"
              className="w-[24px] h-[24px]"
            />
          </div>
          <div>
            <img
              src="/header/moon.svg"
              alt="dark-mode"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
