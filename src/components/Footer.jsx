import { Link } from 'react-router-dom';
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import { ROUTES } from '../config/constants';

export default function Footer() {
  return (
    <>
      <footer className="bg-zinc-100 dark:bg-zinc-950 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Información de la Empresa */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link to="/" className="font-display text-2xl text-primary hover:opacity-80 transition-opacity">
                  EL CHISPA EXPRESS
                </Link>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                Sirviendo los mejores sabores. Rápido, fresco y siempre delicioso.
              </p>
              <div className="flex gap-3">
                <a
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                  href="https://www.instagram.com/elchispaexpress/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <span className="material-icons text-xl">camera_alt</span>
                </a>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-slate-100">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to={ROUTES.menu}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm"
                  >
                    <span className="material-icons text-base">restaurant_menu</span>
                    Nuestro Menú
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/order"
                    className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm"
                  >
                    <span className="material-icons text-base">shopping_cart</span>
                    Hacer Pedido
                  </Link>
                </li>
                <li>
                  <a 
                    className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm" 
                    href="#locations"
                  >
                    <span className="material-icons text-base">location_on</span>
                    Ubicación
                  </a>
                </li>
              </ul>
            </div>

            {/* Horarios */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-slate-100">Horarios</h4>
              <ul className="space-y-1">
                <li className="flex justify-between items-center text-slate-600 dark:text-slate-400 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="material-icons text-base">schedule</span>
                    Lun: Cerrado
                  </span>
                </li>
                <li className="flex justify-between items-center text-slate-600 dark:text-slate-400 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="material-icons text-base">schedule</span>
                    Mar - Dom: 12:00 - 23:00</span>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-slate-100">Contacto</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="tel:+56936400558"
                    className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 text-sm group"
                  >
                    <span className="material-icons text-base group-hover:scale-110 transition-transform">phone</span>
                    <span className="font-semibold">9 3640 0558</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/56936400558"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-[#25D366] transition-colors flex items-center gap-2 text-sm group"
                  >
                    <span className="material-icons text-base group-hover:scale-110 transition-transform">chat</span>
                    <span className="font-semibold">WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/elchispaexpress/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-pink-600 transition-colors flex items-center gap-2 text-sm group"
                  >
                    <span className="material-icons text-base group-hover:scale-110 transition-transform">camera_alt</span>
                    <span className="font-semibold">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  © 2026 El Chispa Express. Todos los derechos reservados.
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Hecho con <span className="text-red-500">❤️</span> por <a href="https://iwalab.site" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">IwaLab</a> por un futuro más sostenible.
                </p>
              </div>
              <div className="flex justify-center">
                <WebsiteCarbonBadge url="https://chispaexpress.netlify.app/" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        href="https://wa.me/56936400558"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-icons text-3xl">chat</span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2 font-bold">
          Pide por WhatsApp
        </span>
      </a>
    </>
  );
}

