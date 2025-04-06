import { AboutMe } from '@/ui/components/AboutMe';
import { Cards } from '@/ui/components/Cards';
import { ContactMe } from '@/ui/components/contact/ContactMe';
import { Header } from '@/ui/components/Header';
import { PortfolioNav } from '@/ui/components/PortfolioNav';
import StickyTitle from '@/ui/components/StickyTitle';

export default function Home() {
  return (
    <main className="container flex flex-col min-h-screen px-4 py-5 mx-auto bg-[#121212]">
      <Header />
      <AboutMe />
      <StickyTitle />
      <PortfolioNav />
      <Cards />
      <ContactMe />
    </main>
  );
}
