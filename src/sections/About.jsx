import { profile, stats } from '../data/data';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-y border-t border-line">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-violet-500/20 via-surface2 to-blue-500/15 p-2">
            <div className="flex h-full w-full items-center justify-center rounded-[1.35rem] border border-line bg-surface/40">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  className="h-full w-full rounded-[1.35rem] object-cover"
                />
              ) : (
                <div role="img" aria-label={`Photo placeholder for ${profile.name}`}>
                  <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-gradient text-3xl font-bold text-white shadow-glow">
                    {profile.initials}
                  </span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-line bg-surface px-4 py-3 shadow-card">
              <p className="text-xs text-muted">Based in</p>
              <p className="text-sm font-semibold text-txt">{profile.location}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About me"
            title="A little about who I am"
            description="A beginner web developer focused on the basics of HTML, CSS and Git."
          />

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
            {profile.bio.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.06}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          {stats.length > 0 && (
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.08}>
                  <div className="rounded-2xl border border-line bg-surface/50 p-4 text-center sm:p-5">
                    <p className="text-2xl font-bold tracking-tight gradient-text sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
