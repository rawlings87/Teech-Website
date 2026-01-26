'use client';

import { useEffect, useState } from 'react';
import { home } from '@/lib/content';

export default function TelemetryFeed() {
  const [isPaused, setIsPaused] = useState(false);

  // Double the events array for seamless infinite scroll
  const events = [...home.telemetry.events, ...home.telemetry.events];

  return (
    <section className="py-16 md:py-20 bg-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-frost mb-4">
            {home.telemetry.heading}
          </h2>
          <p className="text-lg text-mist max-w-2xl mx-auto">
            {home.telemetry.subheading}
          </p>
        </div>

        <div className="relative h-96 overflow-hidden bg-steel/50 rounded-lg border border-slate">
          <div
            className={`space-y-3 py-4 ${!isPaused ? 'animate-scroll' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {events.map((event, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-steel/80 border-l-2 border-accent font-mono text-sm text-frost/90"
              >
                {event}
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-steel/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-steel/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
