import React from "react";
import { navTabs } from "../data";
import { useState } from "react";

function SideNav() {
  const [current, setCurrent] = useState(""); //can use url state to compare using react router too but wanted to keep it simple
  return (
    <div className="hidden lg:block max-w-[353px] space-y-10 bg-white p-4">
      <div className="flex items-center gap-4">
        <div className="w-[61px] h-[61px]">
          <img src="/logo.png" alt="logo" className="w-full h-full" />
        </div>
        <h1 className="text-[32px] font-bold">Invoyse</h1>
      </div>

      <ul className="space-y-2 w-full">
        {navTabs.map((nav, idx) => (
          <li
            key={idx}
            className="flex items-center gap-x-4 h-[54px] cursor-pointer group"
            onClick={() => setCurrent(nav.tab)}
          >
            <div
              className={`flex items-center gap-x-4 h-full w-[95%] group-hover:bg-[rgba(245,245,245,1)] rounded-md px-4 ${
                current === nav.tab && "bg-[rgba(245,245,245,1)]"
              }`}
            >
              <img
                src={nav.icon}
                alt="icon"
                className="w-[30px] h-[30px]"
                style={{ fill: "red" }}
              />
              <p className={`text-lg whitespace-nowrap ${
                current !== nav.tab ? "text-[rgba(96,96,96,1)] font-normal" : "font-medium"
              }`}>{nav.tab}</p>
            </div>
            <div className="h-full flex items-center justify-center">
              {current === nav.tab && (
                <div className="h-2 w-2 rounded-full bg-black"></div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
