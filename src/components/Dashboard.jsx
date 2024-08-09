import React from "react";
import Header from "./Header";

function Dashboard() {
  return (
    <div className="hidden lg:block w-full h-full space-y-2">
      <Header />
      <div className="w-full h-[135vh] bg-white"></div>
    </div>
  );
}

export default Dashboard;
