import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/data';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const linkClass = (href) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      active === href.slice(1) ? 'text-txt' : 'text-muted hover:text-txt'
    }`;

  return (
    <header className="glass sticky top-0 z-50">
      <nav className="container-x flex h-16 items-center justify-between gap-4 sm:h-20" aria-label="Main navigation">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 rounded-lg"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white shadow-glow">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass(link.href)} aria-current={active === link.href.slice(1) ? 'page' : undefined}>
                {link.label}
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-brand-gradient"
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="btn-primary hidden px-4 py-2 text-xs sm:inline-flex"
          >
            Let’s talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface/60 text-txt md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      active === link.href.slice(1)
                        ? 'bg-surface2 text-txt'
                        : 'text-muted hover:bg-surface/60 hover:text-txt'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
