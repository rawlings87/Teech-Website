import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import { services } from '@/lib/content';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Services',
  description: 'IT consulting, database engineering, training, and recruitment services with security-first discipline.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline={services.hero.headline}
        subheading={services.hero.subheading}
      />

      <section className="py-16 md:py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-frost/80 text-center max-w-3xl mx-auto mb-16">
            {services.intro}
          </p>

          <div className="space-y-16">
            {services.offerings.map((service) => (
              <div key={service.id} id={service.id}>
                <Card>
                  <h2 className="text-2xl md:text-3xl font-bold text-frost mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-frost/80 mb-6">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-frost mb-3">
                        Typical Engagements
                      </h3>
                      <ul className="space-y-2">
                        {service.engagements.map((engagement, idx) => (
                          <li key={idx} className="text-mist flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {engagement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-frost mb-3">
                        Deliverables
                      </h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-mist flex items-start">
                            <span className="text-accent mr-2">•</span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button variant="primary" href="/contact">
                    Get a Quote
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
