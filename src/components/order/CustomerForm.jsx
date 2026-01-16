import { APP_CONFIG } from '../../config/constants';

export default function CustomerForm({
  customerInfo,
  formErrors,
  onFieldChange,
  onOrder,
  isSubmitting,
  cartLength,
}) {
  return (
    <form className="space-y-4 mb-4" onSubmit={(e) => { e.preventDefault(); onOrder(); }}>
      <div>
        <label htmlFor="customer-name" className="sr-only">Nombre</label>
        <input
          id="customer-name"
          type="text"
          placeholder="Tu nombre *"
          value={customerInfo.name}
          onChange={(e) => onFieldChange('name', e.target.value)}
          className={`w-full px-4 py-2 rounded-xl border bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-colors duration-300 focus:outline-none focus:ring-2 ${
            formErrors.name 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-slate-300 dark:border-slate-700 focus:ring-primary'
          }`}
          aria-invalid={!!formErrors.name}
          aria-describedby={formErrors.name ? 'name-error' : undefined}
          required
        />
        {formErrors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
            {formErrors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="customer-phone" className="sr-only">Teléfono</label>
        <input
          id="customer-phone"
          type="tel"
          placeholder="Tu teléfono *"
          value={customerInfo.phone}
          onChange={(e) => onFieldChange('phone', e.target.value)}
          className={`w-full px-4 py-2 rounded-xl border bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-colors duration-300 focus:outline-none focus:ring-2 ${
            formErrors.phone 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-slate-300 dark:border-slate-700 focus:ring-primary'
          }`}
          aria-invalid={!!formErrors.phone}
          aria-describedby={formErrors.phone ? 'phone-error' : undefined}
          required
        />
        {formErrors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
            {formErrors.phone}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="delivery-type" className="sr-only">Tipo de entrega</label>
        <select
          id="delivery-type"
          value={customerInfo.address}
          onChange={(e) => onFieldChange('address', e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {APP_CONFIG.delivery.options.map((option) => (
            <option key={option.value} value={option.value} className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100">
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="customer-notes" className="sr-only">Notas adicionales</label>
        <textarea
          id="customer-notes"
          placeholder="Notas adicionales (opcional)"
          value={customerInfo.notes}
          onChange={(e) => onFieldChange('notes', e.target.value)}
          rows="3"
          maxLength={APP_CONFIG.validation.maxNotesLength}
          className={`w-full px-4 py-2 rounded-xl border bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 transition-colors duration-300 focus:outline-none focus:ring-2 ${
            formErrors.notes 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-slate-300 dark:border-slate-700 focus:ring-primary'
          }`}
          aria-invalid={!!formErrors.notes}
          aria-describedby={formErrors.notes ? 'notes-error' : undefined}
        />
        {formErrors.notes && (
          <p id="notes-error" className="mt-1 text-sm text-red-500" role="alert">
            {formErrors.notes}
          </p>
        )}
        <p className="mt-1 text-xs text-slate-500" aria-live="polite">
          {customerInfo.notes.length} / {APP_CONFIG.validation.maxNotesLength} caracteres
        </p>
      </div>
      <button
        onClick={onOrder}
        disabled={cartLength === 0 || isSubmitting}
        className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Enviar pedido por WhatsApp"
      >
        <span className="material-icons" aria-hidden="true">send</span>
        {isSubmitting ? 'Enviando...' : 'Enviar Pedido por WhatsApp'}
      </button>
    </form>
  );
}

