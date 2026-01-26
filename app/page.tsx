import Hero from '@/components/home/Hero';
import MetricsStrip from '@/components/home/MetricsStrip';
import TelemetryFeed from '@/components/home/TelemetryFeed';
import ServicesGrid from '@/components/home/ServicesGrid';
import TeamSection from '@/components/home/TeamSection';
import IndustryGrid from '@/components/home/IndustryGrid';
import CTABlock from '@/components/home/CTABlock';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsStrip />
      <TelemetryFeed />
      <ServicesGrid />
      <TeamSection />
      <IndustryGrid />
      <CTABlock />
    </>
  );
}
