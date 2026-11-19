/* ---------------------------------------------------------------------------
   ALL PERSONAL CONTENT LIVES HERE.
   Edit this file only — no component needs to be touched to make it yours.
   Only the skills actually confirmed by Alafiya are listed here.
--------------------------------------------------------------------------- */

export const profile = {
  name: 'Alafiya Risaldar',
  initials: 'AR',
  role: 'Web Developer — Fresher',
  // Shown one-by-one in the hero typing animation.
  typingRoles: ['Web Developer', 'HTML & CSS', 'Git & GitHub'],
  bio: [
    "I'm Alafiya, a fresher web developer who enjoys building clean, responsive pages with HTML and CSS.",
    'I use Git and GitHub to manage my work, and I’m focused on getting the fundamentals right.',
  ],
  location: 'Pune, India',
  // No availability claim is shown unless you set this to true.
  available: false,
  availabilityText: '',
  // Paste a direct image URL here, OR put a file in /public and use '/photo.jpg'.
  // Leave empty for the clean initials placeholder.
  photo: '',
};

// Left empty on purpose — no invented numbers. Add real ones when you have them.
export const stats = [];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    title: 'Frontend Basics',
    icon: 'Code2',
    description: 'The foundation of every page I build.',
    items: ['HTML5', 'CSS3', 'Responsive Layouts'],
  },
  {
    title: 'Programming Languages',
    icon: 'Braces',
    description: 'Languages I am learning alongside web development.',
    items: ['C Programming', 'Java', 'Python'],
  },
  {
    title: 'Tools',
    icon: 'Github',
    description: 'How I track and share my work.',
    items: ['Git', 'GitHub'],
  },
];

export const projects = [
  {
    name: 'Responsive Landing Page',
    description:
      'A single-page website built with semantic HTML and modern CSS, designed to look and work well on both mobile and desktop.',
    tech: ['HTML', 'CSS'],
    live: '', // Add a real URL when you have one — buttons appear automatically.
    github: '',
    image: '',
    accent: 'from-violet-500/25 to-blue-500/10',
  },
  {
    name: 'My Portfolio Site',
    description:
      'A simple, accessible site that brings my introduction, skills and work together in one place.',
    tech: ['HTML', 'CSS', 'Git'],
    live: '',
    github: '',
    image: '',
    accent: 'from-blue-500/25 to-indigo-500/10',
  },
];

// Fresher — no work experience entries.
export const experience = [];

export const education = [
  {
    role: 'Bachelor of Engineering',
    company: 'Computer Science & Engineering — 2nd year',
    period: '2025 — 2029',
    description:
      'Currently in the second year of B.E. in Computer Science & Engineering, learning the fundamentals of web development along the way.',
    tech: ['Computer Science', 'Web Development', 'HTML', 'CSS'],
  },
];

// Empty links are hidden automatically by SocialLinks.
export const socials = [
  { label: 'GitHub', icon: 'Github', href: 'https://github.com/risaldaralfiya0-source' },
  {
    label: 'LinkedIn',
    icon: 'Linkedin',
    href: 'https://www.linkedin.com/in/alafiya-risaldar-ab3b7b410',
  },
];

export const contact = {
  // Add your email here to enable the mail-based contact form.
  email: '',
  blurb:
    'Have a question or want to get in touch? Connect with me on LinkedIn or GitHub — I usually reply within a day or two.',
};
