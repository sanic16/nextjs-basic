import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/store"}>store</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
