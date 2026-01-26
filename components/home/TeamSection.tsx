import { home } from '@/lib/content';
import { teamImages } from '@/lib/images';
import Image from 'next/image';
import Card from '@/components/ui/Card';

export default function TeamSection() {
  const imageMap: { [key: string]: any } = {
    '/images/team/ken-rawlings.jpg': teamImages.cto,
    '/images/team/cto-placeholder.jpg': teamImages.cto,
    '/images/team/security-director-placeholder.jpg': teamImages.securityDirector,
    '/images/team/consulting-head-placeholder.jpg': teamImages.consultingHead,
    '/images/team/training-director-placeholder.jpg': teamImages.trainingDirector,
  };

  return (
    <section className="py-20 md:py-28 bg-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-frost mb-4">
            {home.team.heading}
          </h2>
          <p className="text-xl text-mist max-w-3xl mx-auto">
            {home.team.subheading}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {home.team.members.map((member, index) => {
            const imageData = imageMap[member.image];
            return (
              <Card key={index} className="text-center group">
                {/* Team Member Photo */}
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-slate group-hover:ring-primary transition-all duration-300">
                  <Image
                    src={imageData.url}
                    alt={imageData.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-bold text-frost mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-mist">{member.bio}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
