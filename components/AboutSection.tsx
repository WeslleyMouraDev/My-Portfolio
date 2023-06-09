import React from "react";
import Image from "next/image";

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "Docker" },
    { skill: "Node.js" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "MySQL" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre mim
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Me conheça!
            </h1>
            <p>
              Olá, meu nome é Weslley Moura e eu sou um Desenvolvedor Fullstack{" "}
              <span className="font-bold">{"altamente ambicioso"}</span>,
              <span className="font-bold">{" motivado"}</span>, e
              <span className="font-bold">{" determinado"}</span>. Atualmente
              resido em Paulista - Pernambuco.
            </p>
            <br />
            <p>
              Estou finalizando minha formação Fullstack na Trybe, área que
              desde criança sempre fui (e sou) completamente apaixonado. Focado
              em sempre aprender algo novo, o que me faz amar cada dia mais essa
              área!
            </p>
            <br />
            <p>
              Tenho muitos hobbies e paixões que vão desde ler, jogar
              video-game, ir a praia e até meditar. Eu estou sempre buscando
              novas experiências e aprender novas coisas sobre tudo que puder.
            </p>
            <br />
            <p>
              Eu acredito fortemente que{" "}
              <span className="font-bold text-teal-500">
                nunca se deve parar de crescer
              </span>{" "}
              e é isso que eu me esforço para fazer. Tenho uma paixão diferente
              pela tecnologia e estou sempre quebrando meus limites para
              acompanhar cada passo desse mercado. Fico muito
              entusiasmado para saber onde minha carreira vai me levar e estou
              sempre aberto a novas oportunidades. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image2.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:top-5 md:left-5 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
