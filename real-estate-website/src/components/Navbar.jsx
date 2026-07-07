import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navHeadings = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Services", href: "/services" },
    { id: 4, name: "Blog", href: "/blog" },
    { id: 5, name: "Pricing", href: "/pricing" },
    { id: 6, name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed z-50 bg-white w-full h-17 shadow-md">
      <div className="flex justify-between max-w-7xl mx-auto items-center px-6 py-4">
        <div className="flex justify-center items-center">
          <img
            src="/navbar/navbar-logo.png"
            alt="navbar-logo"
            className="h-10 cursor-pointer"
          />
        </div>
        <div className="flex gap-8 w-auto">
          {navHeadings.map((headings, i) => (
            <NavLink to={headings.href} key={i}>
              <ul key={headings.id}>
                <li className="font-semibold text-md cursor-pointer hover:text-[#27ae60]">
                  {headings.name}
                </li>
              </ul>
            </NavLink>
          ))}
        </div>
        <div className="flex gap-6 items-center justify-center">
          <div className="flex gap-2">
            <span className="rounded-full bg-[#27ae60] h-6 w-6 flex justify-center items-center font-semibold text-white text-md">
              2
            </span>
            <span className="font-semibold text-md">My List</span>
          </div>
          <button className="bg-[#27ae60] px-10 py-3 rounded-md text-white font-semibold cursor-pointer">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="text-sm font-bold">Sign in</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
