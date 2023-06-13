'use client'; // this is a client component
import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';
import { BsFiletypePdf, BsArrowDownRight } from 'react-icons/bs';
import {
  AiFillCheckCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

const HeroSection = () => {
  const { theme: currentTheme } = useTheme();
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const isDarkTheme = currentTheme === 'dark';

  const handleDownload = () => {
    setMostrarPopup(true);

    // Define um timeout para esconder o pop-up depois de 3 segundos
    setTimeout(() => {
      setMostrarPopup(false);
    }, 3000);
  };

  return (
    <section id="home" style={lato.style}>
      <div className="flex flex-col items-center justify-center text-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-30 md:py-32 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/avatar.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Olá, eu sou Weslley!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Sou um{' '}
            <span className="font-bold text-[#12A0A8]">
              Desenvolvedor Fullstack{' '}
            </span>
            apaixonado por transformar ideias em realidade através de tecnologia
            e inovação.
          </p>
          <div className="flex items-center gap-4 md:justify-start justify-center">
            <Link
              to="projects"
              className="flex items-center text-neutral-100 font-semibold px-6 py-2 bg-[#12A0A8] rounded border border-gray-300 shadow hover:bg-teal-700 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span className="mr-2">Projetos</span>
              <BsArrowDownRight />
            </Link>

            <div>
              {mostrarPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                  <div className="flex items-center bg-white backdrop-blur-lg bg-opacity-80 rounded-lg p-4 shadow">
                    <p className="pr-2">Download do currículo iniciado!</p>
                    <AiFillCheckCircle className="text-green-500 w-5 h-5" />
                  </div>
                </div>
              )}
              <a
                // href="https://github.com/WeslleyMouraDev/My-Portfolio/raw/main/public/resume/Weslley%20Moura%20-%20Curriculo%20Developer.pdf"
                href="#"
                onClick={handleDownload}
                className={`flex items-center hover:bg-gray-300 ${
                  isDarkTheme ? 'text-white' : 'text-gray-800'
                } hover:text-gray-900 py-2 px-4 rounded border border-gray-300 shadow`}
              >
                <span className="mr-2">Currículo</span>
                <BsFiletypePdf
                  className={`${
                    isDarkTheme ? 'text-white' : 'text-neutral-500'
                  }`}
                />
              </a>
            </div>
            <a
              href="https://github.com/WeslleyMouraDev"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub
                className={`hover:-translate-y-1 transition-transform cursor-pointer ${
                  isDarkTheme ? 'text-white' : 'text-neutral-500'
                }`}
                size={30}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/souweslleymoura/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin
                className={`hover:-translate-y-1 transition-transform cursor-pointer ${
                  isDarkTheme ? 'text-white' : 'text-neutral-500'
                }`}
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
