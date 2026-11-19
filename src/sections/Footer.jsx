import { ArrowUp } from 'lucide-react';
import { profile } from '../data/data';
import SocialLinks from '../components/SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 sm:py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-xs font-bold text-white">
            {profile.initials}
          </span>
          <div>
            <p className="text-sm font-semibold text-txt">{profile.name}</p>
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>

        <SocialLinks variant="plain" />

        <a
          href="#home"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-txt"
        >
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
