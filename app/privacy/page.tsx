import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Rawlings Global Solutions.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        headline="Privacy Policy"
        subheading="Placeholder page for privacy policy content."
      />

      <section className="py-16 md:py-20 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-frost/80 mb-6">
            This is a placeholder page. Replace this content with your actual privacy policy.
          </p>
          <p className="text-mist">
            Consider including information about:
          </p>
          <ul className="list-disc list-inside space-y-2 text-mist mt-4">
            <li>What data you collect</li>
            <li>How you use collected data</li>
            <li>Data storage and security practices</li>
            <li>Third-party services and cookies</li>
            <li>User rights and data access</li>
            <li>Contact information for privacy inquiries</li>
          </ul>
        </div>
      </section>
    </>
  );
}
