import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import { events } from '@/lib/content';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming workshops, webinars, and industry gatherings from Rawlings Global Solutions.',
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        headline={events.hero.headline}
        subheading={events.hero.subheading}
      />

      <section className="py-16 md:py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {events.placeholders.map((event, index) => (
              <Card key={index}>
                <Badge variant="warning" className="mb-4">
                  {event.status}
                </Badge>
                <h3 className="text-xl font-bold text-frost mb-3">
                  {event.title}
                </h3>
                <p className="text-mist">{event.description}</p>
              </Card>
            ))}
          </div>

          <p className="text-sm text-mist text-center italic">
            {events.note}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-frost mb-4">Stay Updated</h2>
          <p className="text-lg text-mist mb-8 max-w-2xl mx-auto">
            Sign up to receive notifications about upcoming events and training
            cohorts.
          </p>
          <Button variant="primary" href="/contact">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
