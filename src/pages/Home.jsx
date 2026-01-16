import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BestSellers from '../components/BestSellers';
import CTABanner from '../components/CTABanner';
import Locations from '../components/Locations';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <Hero />
      <BestSellers />
      <CTABanner />
      <Features />
      <Locations />
      <Footer />
    </div>
  );
}

