import { home } from '@/lib/content';
import Card from '@/components/ui/Card';

export default function IndustryGrid() {
  return (
    <section className="py-16 md:py-20 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-frost mb-4">
            {home.industries.heading}
          </h2>
          <p className="text-lg text-mist max-w-3xl mx-auto">
            {home.industries.subheading}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {home.industries.list.map((industry, index) => (
            <Card key={index}>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary/20 rounded" />
                </div>
                <h3 className="text-sm font-semibold text-frost">
                  {industry}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
