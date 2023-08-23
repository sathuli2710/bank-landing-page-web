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
    <div className="w-full z-50">
      <nav className="flex justify-between items-center px-6 py-4 w-[1170px] z-50 mx-auto">
        <img
          src={logo}
          alt="Hoobank Logo"
          className="w-[190px] h-[62px] cursor-pointer"
          onClick={() => window.open("/", "_self")}
        />
        <ul className="items-center gap-x-[56px] hidden lg:flex">
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
            <div className="absolute top-[40px] right-0 z-20 bg-black-gradient-2 px-6 py-3 rounded-lg sidebar">
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
