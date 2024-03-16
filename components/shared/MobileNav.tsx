import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import React from "react";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">Menu</SheetTrigger>
      <SheetContent>
        <NavItems />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
