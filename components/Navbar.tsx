import Link from "next/link";
import './navbar.css'
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container container">
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
        <li>
          <Link href={"/posts"}>posts</Link>
        </li>

      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
