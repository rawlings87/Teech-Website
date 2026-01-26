import Link from 'next/link';
import { home } from '@/lib/content';
import Card from '@/components/ui/Card';

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-frost mb-4">
            {home.services.heading}
          </h2>
          <p className="text-lg text-mist max-w-3xl mx-auto">
            {home.services.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {home.services.cards.map((service, index) => (
            <Link key={index} href={service.link}>
              <Card hover>
                <h3 className="text-xl font-bold text-frost mb-3">
                  {service.title}
                </h3>
                <p className="text-mist mb-4">{service.description}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center group">
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
