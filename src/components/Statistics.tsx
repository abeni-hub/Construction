import Stat from '@/components/Stat';
import { stats } from '@/data/site';

export default function Statistics() {
  return (
    <section className="border-b border-ink/10 bg-bone">
      <div className="wrap grid grid-cols-1 divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 py-12 sm:py-16">
            <Stat value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
