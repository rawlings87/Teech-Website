import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import { contact, siteConfig } from '@/lib/content';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import QuoteForm from '@/components/contact/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Rawlings Global Solutions for quotes, consultations, and inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline={contact.hero.headline}
        subheading={contact.hero.subheading}
      />

      <section className="py-16 md:py-20 bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Quote Form */}
            <div>
              <QuoteForm />
            </div>

            {/* Consultation & Contact Details */}
            <div className="space-y-8">
              {/* Book a Consultation */}
              <Card>
                <h2 className="text-2xl font-bold text-frost mb-4">
                  {contact.consultation.heading}
                </h2>
                <p className="text-mist mb-6">{contact.consultation.body}</p>
                <Button variant="primary" href="#" fullWidth>
                  {contact.consultation.cta}
                </Button>
                <p className="text-xs text-mist mt-4 italic">
                  {contact.consultation.note}
                </p>
              </Card>

              {/* Contact Details */}
              <Card>
                <h2 className="text-2xl font-bold text-frost mb-4">
                  {contact.details.heading}
                </h2>
                <div className="space-y-3 text-mist">
                  <p className="font-semibold text-frost">{siteConfig.name}</p>
                  <p>{siteConfig.location}</p>
                  <p>
                    <span className="text-frost">Email:</span> {siteConfig.email}
                  </p>
                  <p>
                    <span className="text-frost">Phone:</span> {siteConfig.phone}
                  </p>
                </div>
                <p className="text-xs text-mist mt-6 italic">
                  {contact.details.note}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
