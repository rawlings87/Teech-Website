interface PageHeroProps {
  headline: string;
  subheading: string;
}

export default function PageHero({ headline, subheading }: PageHeroProps) {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-frost mb-6 text-balance">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-frost/80 text-balance">
            {subheading}
          </p>
        </div>
      </div>
    </section>
  );
}
