interface StatProps {
  value: string;
  label: string;
  tone?: 'dark' | 'light';
}

export default function Stat({ value, label, tone = 'dark' }: StatProps) {
  const isLight = tone === 'light';
  return (
    <div>
      <p
        className={`font-display text-6xl font-bold tracking-[-0.02em] md:text-7xl ${
          isLight ? 'text-white' : 'text-ink'
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-3 text-[11px] font-semibold uppercase tracking-widest2 ${
          isLight ? 'text-white/50' : 'text-stone'
        }`}
      >
        {label}
      </p>
    </div>
  );
}
