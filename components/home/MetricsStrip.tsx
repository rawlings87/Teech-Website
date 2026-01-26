import { home } from '@/lib/content';

export default function MetricsStrip() {
  return (
    <section className="bg-steel border-y border-slate py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {home.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-mist">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
