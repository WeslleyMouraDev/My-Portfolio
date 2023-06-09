import React from "react"
import { useTheme } from "next-themes";
import {
  AiOutlineGithub,
  AiOutlineLinkedin
} from "react-icons/ai"


const Footer = () => {
  const { theme: currentTheme } = useTheme();

  const isDarkTheme = currentTheme === "dark";

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
        <div className={`flex flex-row items-center justify-center space-x-1 ${isDarkTheme ? "text-white" : "text-neutral-500"}`}>
          © 2023 - Weslley Moura<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/weslleymouradev" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className={`hover:-translate-y-1 transition-transform cursor-pointer ${isDarkTheme ? "text-white" : "text-neutral-500"}`}
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/souweslleymoura/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className={`hover:-translate-y-1 transition-transform cursor-pointer ${isDarkTheme ? "text-white" : "text-neutral-500"}`}
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
