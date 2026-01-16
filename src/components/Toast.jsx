import { useEffect } from 'react';

export default function Toast({ message, type = 'info', isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  const icons = {
    success: 'check_circle',
    error: 'error',
    info: 'info',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 ${typeStyles[type]} text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 min-w-[300px] max-w-md animate-slide-up`}
      role="alert"
      aria-live="polite"
    >
      <span className="material-icons">{icons[type]}</span>
      <p className="flex-1">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 hover:opacity-80 transition-opacity"
        aria-label="Cerrar notificación"
      >
        <span className="material-icons text-sm">close</span>
      </button>
    </div>
  );
}

