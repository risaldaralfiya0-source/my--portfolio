import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, MapPin } from 'lucide-react';
import { profile } from '../data/data';
import SocialLinks from '../components/SocialLinks';

function useTypedRoles(roles) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduceMotion ? roles[0] : '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const current = roles[index];
    let delay = 70;
    if (!deleting && text === current) delay = 1600;
    else if (deleting && text === '') delay = 250;
    else if (deleting) delay = 35;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((value) => (value + 1) % roles.length);
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, roles, reduceMotion]);

  return text;
}

export default function Hero() {
  const typedRole = useTypedRoles(profile.typingRoles);
  const reduceMotion = useReducedMotion();

  const rise = {
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Decorative gradient glow + faint grid, purely visual. */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="animate-float absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -right-32 top-48 h-[24rem] w-[24rem] rounded-full bg-blue-600/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'linear-gradient(to bottom, black, transparent 80%)',
          }}
        />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          {profile.available && profile.availabilityText && (
            <motion.div {...rise} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {profile.availabilityText}
              </span>
            </motion.div>
          )}

          <motion.h1
            {...rise}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-7 text-[2.75rem] font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I’m <span className="gradient-text">{profile.name.split(' ')[0]}.</span>
            <br />
            I build things for the web.
          </motion.h1>

          <motion.p
            {...rise}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 flex min-h-[2rem] flex-wrap items-center gap-x-2 text-lg font-medium text-muted sm:text-2xl"
          >
            <span>I work as a</span>
            <span className="font-semibold text-txt">{typedRole}</span>
            <span className="animate-blink text-brand-light" aria-hidden="true">
              |
            </span>
          </motion.p>

          <motion.p
            {...rise}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted"
          >
            {profile.bio[0]} {profile.bio[1]}
          </motion.p>

          <motion.div
            {...rise}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            {...rise}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-4 w-4 text-brand-light" /> {profile.location}
            </span>
            <SocialLinks variant="plain" />
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-txt sm:flex"
      >
        Scroll
        <ArrowDownRight className="h-4 w-4" />
      </a>
    </section>
  );
}
