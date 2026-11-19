import { motion, useReducedMotion } from 'framer-motion';

/** Small wrapper for consistent, subtle scroll-reveal animations. */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  as = 'div',
}) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
}
