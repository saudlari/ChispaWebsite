export default function CategoryHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="h-1 flex-1 bg-secondary rounded-full"></div>
      <h2 className="font-display text-5xl text-primary flex items-center gap-3">
        <span className="material-icons text-4xl">{icon}</span> {title}
      </h2>
      <div className="h-1 flex-1 bg-secondary rounded-full"></div>
    </div>
  );
}

