import React from "react";
import Business from "./Business";
import { mobileMenu, settings } from "../data";

function MobileNav() {
  return (
    <div className="w-full block lg:hidden">
      <div className="relative flex items-center bg-white justify-center py-4">
        <span className="absolute left-2 ">
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 16.5L1 9L8.5 1.5"
              stroke="#A6A6A6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <h2 className="font-bold text-lg">Menu</h2>
      </div>
      <Business />
      <div className="bg-white">
        {mobileMenu.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between px-4 py-6 ${
              idx === mobileMenu.length - 1 ? "" : "border-b border-gray-400"
            }`}
          >
            <div className="flex items-center gap-x-4">
              <img src={item.icon} alt={item.tab} className="w-[34px]" />
              <h4 className="text-lg font-bold">{item.tab}</h4>
            </div>
            <svg
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1L9 8.5L1.5 16"
                stroke="#606060"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
      <div>
        <div className="px-4 py-8 ">
          <h4 className="text-xl font-bold text-[#9B9B9B]">Account settings</h4>
        </div>

        <div className="bg-white">
          {settings.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between px-4 py-6 ${
                idx === mobileMenu.length - 1 ? "" : "border-b border-gray-400"
              }`}
            >
              <div className="flex items-center gap-x-4">
                <img src={item.icon} alt={item.tab} className="w-[34px]" />
                <h4 className="text-lg font-bold">{item.tab}</h4>
              </div>
              <svg
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1L9 8.5L1.5 16"
                  stroke="#606060"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
