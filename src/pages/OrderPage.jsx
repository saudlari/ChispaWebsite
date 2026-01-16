import Header from '../components/Header';
import Order from '../components/Order';
import Footer from '../components/Footer';

export default function OrderPage() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <Order />
      <Footer />
    </div>
  );
}

