import FooterSection from './FooterSection';

export default function FooterSchedule() {
  return (
    <FooterSection title="Horarios">
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
    </FooterSection>
  );
}

