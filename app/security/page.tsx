import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  title: 'Security',
  description: 'Security practices and policies at Rawlings Global Solutions.',
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        headline="Security"
        subheading="Placeholder page for security practices and policies."
      />

      <section className="py-16 md:py-20 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-frost/80 mb-6">
            This is a placeholder page. Replace this content with your actual security practices and policies.
          </p>
          <p className="text-mist">
            Consider including information about:
          </p>
          <ul className="list-disc list-inside space-y-2 text-mist mt-4">
            <li>Security certifications and compliance standards</li>
            <li>Data encryption and protection measures</li>
            <li>Incident response procedures</li>
            <li>Vulnerability disclosure policy</li>
            <li>Access controls and authentication</li>
            <li>Security audit and testing practices</li>
            <li>Contact for security concerns</li>
          </ul>
        </div>
      </section>
    </>
  );
}
