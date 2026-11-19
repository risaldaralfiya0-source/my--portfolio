import {
  Braces,
  CheckSquare,
  Code2,
  Compass,
  Github,
  LayoutGrid,
  Linkedin,
  Mail,
  Palette,
  Server,
  Sparkles,
} from 'lucide-react';

// One place to map the icon names stored in data.js to Lucide components.
const icons = {
  Braces,
  CheckSquare,
  Code2,
  Compass,
  Github,
  LayoutGrid,
  Linkedin,
  Mail,
  Palette,
  Server,
  Sparkles,
};

export default function Icon({ name, className = 'h-5 w-5', ...props }) {
  const Component = icons[name] || Sparkles;
  return <Component className={className} aria-hidden="true" {...props} />;
}
