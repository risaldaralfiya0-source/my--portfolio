import { projects } from '../data/data';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I’ve built"
          description="A couple of simple projects I built while practising HTML, CSS and Git."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
