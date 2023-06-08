import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";
import navLogo from "../public/navLogo.svg";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inicio",
    page: "inicio",
  },
  {
    label: "Sobre",
    page: "sobre",
  },
  {
    label: "Projetos",
    page: "projetos",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);

  const currentTheme = theme || "light"; // Defina o tema padrão aqui

  return (
    <header
      className={`w-full mx-auto px-4 sm:px-5 fixed top-0 z-50 shadow bg-white ${
        currentTheme === "dark"
          ? "dark:bg-stone-900 dark:border-b dark:border-stone-600"
          : ""
      }`}
    >
      <div className="justify-between md:items-center md:flex">
        <div>
          <div>
            <div className="md:py-5 md:block">
              <Image src={navLogo} alt="/" width={80} />
            </div>
            <div>
              <button>
                {navbar ? <IoMdClose /> : <IoMdMenu />}
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center md:space-x-6">
          {NAV_ITEMS.map((item, idx) => {
            return <a key={idx}>{item.label}</a>;
          })}

          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl md:items-center"
            >
              <BsSun size={25} color="black"/>
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl md:items-center"
            >
              <BsMoonStarsFill />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
