import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('light')
      : false,
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', isLight);
    root.classList.toggle('dark', !isLight);
    root.style.colorScheme = isLight ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  return (
    <button
      type="button"
      onClick={() => setIsLight((value) => !value)}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line
        bg-surface/60 text-muted transition-colors duration-300 hover:border-brand-violet/50 hover:text-txt"
    >
      <motion.span
        key={isLight ? 'sun' : 'moon'}
        initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isLight ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
      </motion.span>
    </button>
  );
}
