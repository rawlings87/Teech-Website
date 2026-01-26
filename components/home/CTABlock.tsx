import { home } from '@/lib/content';
import Button from '@/components/ui/Button';

export default function CTABlock() {
  return (
    <section className="py-16 md:py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-steel border border-slate rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-frost mb-4">
            {home.consultation.heading}
          </h2>
          <p className="text-lg text-mist max-w-3xl mx-auto mb-8">
            {home.consultation.description}
          </p>
          <Button variant="primary" href="/contact">
            {home.consultation.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
