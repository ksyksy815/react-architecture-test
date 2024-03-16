"use client";

import React from "react";
import NavItems from "./NavItems";

const Navigation = () => {
  return (
    <nav className="w-full hidden lg:block">
      <NavItems />
    </nav>
  );
};

export default Navigation;
