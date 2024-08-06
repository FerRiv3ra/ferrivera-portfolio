import { Cards } from '@/ui/components/Cards';
import Footer from '@/ui/components/Footer';
import { Header } from '@/ui/components/Header';
import { PortfolioNav } from '@/ui/components/PortfolioNav';
import StickyTitle from '@/ui/components/StickyTitle';

export default function Home() {
  return (
    <main className="">
      <Header />
      <StickyTitle />
      <PortfolioNav />
      <Cards />
      <Footer />
    </main>
  );
}
