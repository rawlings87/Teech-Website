import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import { training } from '@/lib/content';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Training & Career Enablement',
  description: 'Structured IT training in SQL Server, cloud platforms, and cyber security for working professionals.',
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        headline={training.hero.headline}
        subheading={training.hero.subheading}
      />

      <section className="py-16 md:py-20 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-frost mb-6">
              {training.philosophy.heading}
            </h2>
            <p className="text-lg text-frost/80 leading-relaxed">
              {training.philosophy.body}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-frost mb-8">
              {training.tracks.heading}
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              {training.tracks.list.map((track, index) => (
                <Card key={index}>
                  <h3 className="text-xl font-bold text-frost mb-2">
                    {track.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{track.subtitle}</p>
                  <p className="text-mist">{track.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-frost mb-6">
              {training.cohort.heading}
            </h2>
            <p className="text-lg text-frost/80 leading-relaxed">
              {training.cohort.body}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-frost mb-6">
              {training.delivery.heading}
            </h2>
            <p className="text-lg text-frost/80 leading-relaxed">
              {training.delivery.body}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-frost mb-8">
            Ready to Enrol?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/contact">
              Get a Quote
            </Button>
            <Button variant="secondary" href="/contact">
              Contact Us for Details
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
