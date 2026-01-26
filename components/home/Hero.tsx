import { home, siteConfig } from '@/lib/content';
import { heroImages } from '@/lib/images';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImages.background.url}
          alt={heroImages.background.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/70" />
        {/* Accent gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-frost mb-6 text-balance leading-tight">
            {home.hero.headline}
          </h1>

          <p className="text-lg md:text-xl text-frost/90 mb-8 max-w-3xl text-balance leading-relaxed">
            {home.hero.subheading}
          </p>

          <p className="text-sm text-accent mb-12 font-mono tracking-wide">
            {siteConfig.location}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="/contact">
              {home.hero.cta1}
            </Button>
            <Button variant="secondary" href="/contact">
              {home.hero.cta2}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink to-transparent z-[5]" />
    </section>
  );
}
