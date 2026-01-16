export default function FooterSection({ title, children }) {
  return (
    <div>
      <h4 className="font-bold text-lg mb-6 text-slate-900 dark:text-slate-100">{title}</h4>
      {children}
    </div>
  );
}

