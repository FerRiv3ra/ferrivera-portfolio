import { AboutMe } from '@/ui/components/AboutMe';
import { ContactMe } from '@/ui/components/contact/ContactMe';
import { Header } from '@/ui/components/Header';
import { ProjectsSection } from '@/ui/components/projects/ProjectsSection';
import StickyTitle from '@/ui/components/StickyTitle';

export default function Home() {
  return (
    <main className="container flex flex-col min-h-screen px-4 py-5 mx-auto bg-[#121212]">
      <Header />
      <AboutMe />
      <StickyTitle />
      <ProjectsSection />
      <ContactMe />
    </main>
  );
}
