import React from "react";

function Navar() {
  return (
    <nav className=" hidden space-y-1 py-3 border-t pt-2 md:hidden">
      <a
        href="#"
        className=" bg-sky-500 text-white px-3 py-2 rounded-md block "
      >
        Home
      </a>
      <a
        href="#"
        className="text-slate-700 block hover:bg-sky-500 hover:text-white px-3 py-2 rounded-md transition-colors"
      >
        About
      </a>
      <a
        href="#"
        className="text-slate-700 block hover:bg-sky-500 hover:text-white px-3 py-2 rounded-md transition-colors"
      >
        Blog
      </a>
      <a
        href="#"
        className="text-slate-700 block hover:bg-sky-500 hover:text-white px-3 py-2 rounded-md transition-colors"
      >
        Contact
      </a>
    </nav>
  );
}

export default Navar;
