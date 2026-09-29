interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent?: string;
  lede?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  lede,
  align = 'left',
  tone = 'dark',
}: SectionHeadingProps) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-ink';
  const ledeColor = tone === 'light' ? 'text-white/60' : 'text-stone';

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={align === 'center' ? 'eyebrow' : 'eyebrow-rule'}>{eyebrow}</p>
      <h2
        className={`headline-lg mt-7 ${titleColor} ${
          align === 'center' ? 'mx-auto max-w-3xl text-balance' : 'text-balance'
        }`}
      >
        {title}
        {accent && (
          <>
            <br />
            <span className="text-bronze">{accent}</span>
          </>
        )}
      </h2>
      {lede && <p className={`mt-6 max-w-xl text-lg leading-relaxed ${ledeColor} ${align === 'center' ? 'mx-auto' : ''}`}>{lede}</p>}
    </div>
  );
}
