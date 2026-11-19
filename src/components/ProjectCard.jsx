import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import Icon from './Icon';

const placeholderIcons = ['LayoutGrid', 'Sparkles', 'Compass', 'CheckSquare'];

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group card relative flex h-full flex-col overflow-hidden transition-colors duration-300
        hover:border-brand-violet/50 hover:shadow-glow"
    >
      {/* Soft violet glow that fades in on hover. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300
          group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at 50% 0%, rgba(139,92,246,0.16), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div
        className={`relative h-44 w-full overflow-hidden border-b border-line bg-gradient-to-br ${project.accent}`}
        aria-hidden="true"
      >
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <Icon
                name={placeholderIcons[index % placeholderIcons.length]}
                className="h-7 w-7 text-white/70"
              />
            </div>
          </div>
        )}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-txt">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        {(project.live || project.github) && (
          <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2 text-xs"
              >
                Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4 py-2 text-xs"
              >
                <Github className="h-3.5 w-3.5" /> Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
