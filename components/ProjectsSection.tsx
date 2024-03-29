import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import { Lato } from 'next/font/google';
import { useTheme } from 'next-themes';

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

const projects = [
  {
    name: 'W.Task - Gerenciador de Tarefas',
    description:
      'Uma solução prática para organizar suas tarefas diárias. Aplicação Fullstack utilizando as tecnologias: React, Next.js, Tailwind, Headless UI, React DnD, Typescript, Zusland, Appwrite.',
    image: '/w-task.png',
    github: 'https://github.com/WeslleyMouraDev/w-task',
    link: 'https://wtask.vercel.app',
  },
  // {
  //   name: 'Projeto 02',
  //   description: 'Descrição do projeto.',
  //   image: '/web.png',
  //   github: '#',
  //   link: '#',
  // },
  // {
  //   name: 'Projeto 03',
  //   description: 'Descrição do projeto.',
  //   image: '/web.png',
  //   github: '#',
  //   link: '#',
  // },
];

const ProjectsSection = () => {
  const { theme: currentTheme } = useTheme();
  const isDarkTheme = currentTheme === 'dark';

  return (
    <section id="projects" style={lato.style}>
      <h1 className="my-10 text-center font-bold text-4xl">
        Projetos
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt="project-image"
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <h1 className="text-4xl font-bold mb-6">
                        {project.name}
                      </h1>
                    </Link>
                    <p
                      className={`text-xl leading-7 mb-4 ${
                        isDarkTheme ? 'text-neutral-200' : 'text-neutral-600'
                      } `}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
