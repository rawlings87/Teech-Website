import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Rawlings Global Solutions.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        headline="Terms of Service"
        subheading="Placeholder page for terms of service content."
      />

      <section className="py-16 md:py-20 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-frost/80 mb-6">
            This is a placeholder page. Replace this content with your actual terms of service.
          </p>
          <p className="text-mist">
            Consider including information about:
          </p>
          <ul className="list-disc list-inside space-y-2 text-mist mt-4">
            <li>Service scope and limitations</li>
            <li>User responsibilities and conduct</li>
            <li>Intellectual property rights</li>
            <li>Liability limitations and disclaimers</li>
            <li>Payment terms and refund policies</li>
            <li>Termination conditions</li>
            <li>Governing law and dispute resolution</li>
          </ul>
        </div>
      </section>
    </>
  );
}
