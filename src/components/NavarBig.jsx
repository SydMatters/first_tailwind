import React from "react";

function NavarBig() {
  return (
    <nav className="space-x-8 ml-8 hidden md:flex">
      <a className="px-3 py2 text-sky-500 transition-colors" href="#">
        Home
      </a>
      <a
        className="text-slate-600 px-3 py2 hover:text-sky-700 transition-colors"
        href="#"
      >
        About
      </a>
      <a
        className="text-slate-600 px-3 py2 hover:text-sky-700 transition-colors"
        href="#"
      >
        Blog
      </a>
      <a
        className="text-slate-600 px-3 py2 hover:text-sky-700 transition-colors"
        href="#"
      >
        Contact
      </a>
    </nav>
  );
}

export default NavarBig;
