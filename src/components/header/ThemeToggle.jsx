export default function ThemeToggle({ theme, onToggleTheme, variant = 'desktop' }) {
  const isMobile = variant === 'mobile';
  
  return (
    <button
      className={`p-${isMobile ? '3' : '2'} rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${isMobile ? 'flex items-center justify-center gap-2' : ''}`}
      style={{
        backgroundColor: isMobile ? 'var(--button-bg)' : 'var(--button-bg)'
      }}
      onMouseEnter={!isMobile ? (e) => e.target.style.backgroundColor = 'var(--button-hover)' : undefined}
      onMouseLeave={!isMobile ? (e) => e.target.style.backgroundColor = 'var(--button-bg)' : undefined}
      onClick={onToggleTheme}
      id={isMobile ? 'theme-toggle-mobile' : 'theme-toggle'}
      type="button"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-pressed={theme === 'dark'}
    >
      <span 
        className="material-icons text-xl align-middle theme-icon-light" 
        style={{ display: theme === 'light' ? 'block' : 'none' }}
        aria-hidden="true"
      >
        dark_mode
      </span>
      <span 
        className="material-icons text-xl align-middle theme-icon-dark text-secondary" 
        style={{ display: theme === 'dark' ? 'block' : 'none' }}
        aria-hidden="true"
      >
        light_mode
      </span>
      {isMobile && (
        <span className="ml-2">
          {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
        </span>
      )}
    </button>
  );
}

