import { education, experience } from '../data/data';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

function TimelineItem({ item, index }) {
  return (
    <Reveal className="relative mb-6 last:mb-0" delay={index * 0.06}>
      <span
        className="absolute -left-[35px] top-6 h-3 w-3 rounded-full border-2 border-brand-violet bg-bg"
        aria-hidden="true"
      />
      <article className="card p-6 transition-colors duration-300 hover:border-brand-violet/40 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <div>
            <h4 className="text-base font-semibold tracking-tight text-txt sm:text-lg">
              {item.role}
            </h4>
            <p className="mt-0.5 text-sm font-medium text-brand-light">{item.company}</p>
          </div>
          <span className="tag shrink-0">{item.period}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((tag) => (
            <li key={tag} className="rounded-md bg-surface2/70 px-2.5 py-1 text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

function GroupTitle({ children }) {
  return (
    <div className="relative mb-6 mt-2 first:mt-0">
      <span
        className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full bg-brand-gradient"
        aria-hidden="true"
      />
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
        {children}
      </h3>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="education" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Background"
          title="Education"
          description="Where I am in my journey so far."
        />

        <div className="relative mt-12 pl-9 sm:max-w-4xl">
          <div
            className="absolute bottom-2 left-[6px] top-2 w-px bg-gradient-to-b from-brand-violet via-brand-blue/50 to-transparent"
            aria-hidden="true"
          />
          {experience.length > 0 && (
            <>
              <GroupTitle>Experience</GroupTitle>
              {experience.map((item, index) => (
                <TimelineItem key={`${item.role}-${item.company}`} item={item} index={index} />
              ))}
              <div className="h-6" />
            </>
          )}

          <GroupTitle>Education</GroupTitle>
          {education.map((item, index) => (
            <TimelineItem key={`${item.role}-${item.company}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
