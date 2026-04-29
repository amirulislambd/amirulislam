"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  RiMenuFold2Fill,
  RiMenuUnfold2Line,
} from "react-icons/ri";
import ThemeSwitch from "./ThemeSwitch";

const NavLinks = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathName=usePathname();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onCloseMenu = () => {
    setIsMenuOpen(false);
  }

  return (
   
    <div className="flex items-center justify-between  px-4 w-full">
      <div className="flex space-x-4 hidden md:flex">
        {links.map((link) => (
          <Link
          onClick={onCloseMenu}
            key={link.name}
            href={link.href}
            className={` px-2 py-1 text-lg text-center  rounded-md hover:bg-zinc-200 font-medium text-gray-700 ${pathName === link.href && 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'}`}
          >
           {link.name}
          </Link>
        ))}
      </div>
      <div
        className={`flex flex-col gap-2 absolute shadow-sm  p-5 rounded-lg bg-zinc-50 border-2 border-zinc-50  right-8 top-10 transition-all duration-300 ease-in-out origin-top-right  ${isMenuOpen ?"scale-100 opacity-100 translate-y-0 translate-0":"opacity-0 translate-x-4 scale-0"}`}
      >
        <ThemeSwitch/>
        {links.map((link) => (
          <Link
            onClick={onCloseMenu}
            key={link.name}
            href={link.href}
            className={`text-lg text-center w-full px-3  rounded-md hover:bg-zinc-200 font-medium text-gray-700 ${pathName === link.href && 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'}`}
          >
        {link.name}
          </Link>
        ))}
      </div>
      <div className="md:hidden cursor-pointer p-2 rounded text-2xl font-semibold">
        {!isMenuOpen ? (
          <RiMenuUnfold2Line onClick={handleMenuClick} />
        ) : (
          <RiMenuFold2Fill onClick={handleMenuClick} />
        )}
      </div>
    </div>
  );
};

export default NavLinks;
