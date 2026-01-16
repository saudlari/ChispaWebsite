import FooterCompany from './footer/FooterCompany';
import FooterLinks from './footer/FooterLinks';
import FooterSchedule from './footer/FooterSchedule';
import FooterContact from './footer/FooterContact';
import FooterEcological from './footer/FooterEcological';
import FooterBottom from './footer/FooterBottom';
import WhatsAppFloat from './footer/WhatsAppFloat';

export default function Footer() {
  return (
    <>
      <footer className="bg-zinc-100 dark:bg-zinc-950 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <FooterCompany />
            <FooterLinks />
            <FooterSchedule />
            <FooterContact />
            <FooterEcological />
          </div>
          <FooterBottom />
        </div>
      </footer>
      <WhatsAppFloat />
    </>
  );
}
