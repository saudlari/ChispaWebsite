import FooterSection from './FooterSection';

export default function FooterEcological() {
  return (
    <FooterSection title="Compromiso Ecológico">
      <div className="space-y-3">
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          Estamos comprometidos con la sostenibilidad y la reducción de nuestra huella de carbono.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
            <span className="material-icons text-base text-primary dark:text-accent mt-0.5">eco</span>
            <span>Optimización de recursos y energía</span>
          </li>
          <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
            <span className="material-icons text-base text-primary dark:text-accent mt-0.5">speed</span>
            <span>Carga eficiente y rápida</span>
          </li>
          <li className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
            <span className="material-icons text-base text-primary dark:text-accent mt-0.5">cloud_done</span>
            <span>Hosting con energía renovable</span>
          </li>
        </ul>
      </div>
    </FooterSection>
  );
}

