import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function MenuPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

