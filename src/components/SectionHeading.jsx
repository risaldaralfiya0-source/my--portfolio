import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const centered = align === 'center';

  return (
    <Reveal
      className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-brand-gradient ${centered ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
    </Reveal>
  );
}
