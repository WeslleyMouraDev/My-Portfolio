'use client';
import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import Head from './head';
import Background from '@/components/Background';
import MyDialog from '@/components/Modal';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Head />
      <Background />
      <HeroSection />
      {/* <MyDialog /> */}
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
