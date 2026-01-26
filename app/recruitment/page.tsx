import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import { recruitment } from '@/lib/content';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Recruitment & Global Delivery',
  description: 'Access skilled engineering talent through offshore delivery and North American subject matter experts.',
};

export default function RecruitmentPage() {
  return (
    <>
      <PageHero
        headline={recruitment.hero.headline}
        subheading={recruitment.hero.subheading}
      />

      <section className="py-16 md:py-20 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-frost mb-6">
              {recruitment.model.heading}
            </h2>
            <p className="text-lg text-frost/80 leading-relaxed">
              {recruitment.model.body}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-frost mb-8">
              {recruitment.pools.heading}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-xl font-bold text-frost mb-3">
                  {recruitment.pools.offshore.title}
                </h3>
                <p className="text-mist">
                  {recruitment.pools.offshore.description}
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-frost mb-3">
                  {recruitment.pools.northAmerica.title}
                </h3>
                <p className="text-mist">
                  {recruitment.pools.northAmerica.description}
                </p>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-frost mb-8">
              {recruitment.process.heading}
            </h2>
            <div className="space-y-6">
              {recruitment.process.steps.map((step, index) => (
                <Card key={index}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-frost mb-2">
                        {step.title}
                      </h3>
                      <p className="text-mist">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-frost mb-8">Need Talent?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/contact">
              Request Talent
            </Button>
            <Button variant="secondary" href="/services">
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
