import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import Head from "./head";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <Head />
      <Background />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}