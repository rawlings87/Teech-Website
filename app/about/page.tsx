import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import { about } from '@/lib/content';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Rawlings Global Solutions and our security-first approach to IT excellence.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline={about.hero.headline}
        subheading={about.hero.subheading}
      />

      <section className="py-16 md:py-20 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-frost mb-6">
              {about.mission.heading}
            </h2>
            <p className="text-lg text-frost/80 leading-relaxed">
              {about.mission.body}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-frost mb-6">
              {about.positioning.heading}
            </h2>
            <p className="text-lg text-frost/80 leading-relaxed">
              {about.positioning.body}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-frost mb-6">
              {about.delivery.heading}
            </h2>
            <p className="text-lg text-frost/80 leading-relaxed whitespace-pre-line">
              {about.delivery.body}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-frost mb-6">
              {about.geographic.heading}
            </h2>
            <p className="text-lg text-frost/80 leading-relaxed">
              {about.geographic.body}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-frost mb-8">
            Ready to Work Together?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/contact">
              Get a Quote
            </Button>
            <Button variant="secondary" href="/services">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
