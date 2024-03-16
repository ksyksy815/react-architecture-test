import React from "react";
import Link from "next/link";

const NavItems = () => {
  return (
    <ul className="flex flex-col gap-7 lg:flex-row">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/todo">Todo</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavItems;
