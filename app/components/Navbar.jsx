import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <nav className="bg-slate-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl">Home</Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
