import { socials } from '../data/data';
import Icon from './Icon';

export default function SocialLinks({ className = '', variant = 'card' }) {
  const iconClass = variant === 'plain' ? 'h-5 w-5' : 'h-[18px] w-[18px]';

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.filter((social) => social.href).map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target={social.href.startsWith('http') ? '_blank' : undefined}
            rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={social.label}
            className={
              variant === 'plain'
                ? 'inline-flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors duration-300 hover:text-txt'
                : 'inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface/70 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/50 hover:text-txt'
            }
          >
            <Icon name={social.icon} className={iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
}
