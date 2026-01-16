export default function WhatsAppFloat() {
  return (
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
  );
}

