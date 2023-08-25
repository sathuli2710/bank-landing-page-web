import React, { useState } from "react";
import { navLinks } from "../constants";
import { MenuIcon, CloseIcon, logo } from "../assets";

const NavbarMenuOption = ({ menuText, menuUrl }) => {
  return (
    <li className="cursor-pointer border-t border-b border-transparent uppercase hover-text-gradient">
      <a href={menuUrl}>{menuText}</a>
    </li>
  );
};

const Navbar = ({}) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <div className="w-full z-50" id="navbar">
      <nav className="flex justify-between items-center py-4 z-50 mx-auto">
        <img
          src={logo}
          alt="Hoobank Logo"
          className="w-[11.875rem] h-[3.875rem] cursor-pointer"
          onClick={() => window.open("/", "_self")}
        />
        <ul className="items-center gap-x-[3.5rem] hidden lg:flex">
          {navLinks.map((navOption) => (
            <NavbarMenuOption
              key={navOption.id}
              menuText={navOption.title}
              menuUrl={navOption.url}
            />
          ))}
        </ul>
        <div
          onClick={() => setToggleNavbar((prevValue) => !prevValue)}
          className="lg:hidden relative"
        >
          {toggleNavbar ? <CloseIcon /> : <MenuIcon />}
          {toggleNavbar && (
            <div className="w-screen absolute top-[2.5rem] right-[-1.25rem] md:right-[-2.5rem] z-50 bg-black-gradient-2 py-6 rounded-br-lg rounded-bl-lg sidebar">
              <ul className="flex flex-col items-center gap-y-5">
                {navLinks.map((navOption) => (
                  <NavbarMenuOption
                    key={navOption.id}
                    menuText={navOption.title}
                    menuUrl={navOption.url}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
