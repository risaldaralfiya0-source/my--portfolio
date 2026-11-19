import { motion, useReducedMotion } from 'framer-motion';
import { skills } from '../data/data';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills & toolkit"
          title="The tools I reach for"
          description="The basics I know and use as I build my first projects."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.08}>
              <div className="card h-full p-6 transition-colors duration-300 hover:border-brand-violet/40 sm:p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-violet/25 bg-brand-violet/10 text-brand-light">
                  <Icon name={group.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{group.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.3,
                        delay: groupIndex * 0.08 + itemIndex * 0.04,
                      }}
                      whileHover={{ y: -2 }}
                      className="tag hover:border-brand-violet/40 hover:text-txt"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
