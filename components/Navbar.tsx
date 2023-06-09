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
    page: "home",
  },
  {
    label: "Sobre",
    page: "about",
  },
  {
    label: "Projetos",
    page: "projects",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);

  const currentTheme = theme || "light";

  return (
    <header
      className={`w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white ${
        currentTheme === "dark"
          ? "dark:bg-stone-900 dark:border-b dark:border-stone-600"
          : ""
      }`}
    >
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <Link to="home">
              <div className="container flex items-center space-x-2 cursor-pointer">
                <Image src={navLogo} alt="/" width={80} />
              </div>
            </Link>
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={`block lg:inline-block ${
                      currentTheme === "dark"
                        ? "text-white"
                        : "text-neutral-900"
                    } hover:text-neutral-500 cursor-pointer`}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl md:items-center"
                >
                  <BsSun size={25} color="black" />
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
