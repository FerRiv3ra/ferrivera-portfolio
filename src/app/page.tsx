import { Cards } from '@/ui/components/Cards';
import Footer from '@/ui/components/Footer';
import { Header } from '@/ui/components/Header';
import { NavBar } from '@/ui/components/NavBar';
import { PortfolioNav } from '@/ui/components/PortfolioNav';
import StickyTitle from '@/ui/components/StickyTitle';

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Header />
      <StickyTitle />
      <PortfolioNav />
      <Cards />
      <Footer />
    </main>
  );
}
