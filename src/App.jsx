import React from "react";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import MobileNav from "./components/MobileNav";


function App() {
  return (
    <main
      className="w-full h-full font-figtree  bg-[rgba(245,245,245,1)] flex gap-x-2"
    >
      <SideNav />
      <MobileNav />
      <Dashboard />
    </main>
  );
}

export default App;
