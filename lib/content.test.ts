import {
  siteConfig,
  navigation,
  home,
  about,
  services,
  training,
  recruitment,
  events,
  contact,
  footer,
} from './content';

describe('Content Configuration', () => {
  describe('siteConfig', () => {
    it('has required site configuration properties', () => {
      expect(siteConfig.name).toBe('Rawlings Global Solutions');
      expect(siteConfig.tagline).toBeDefined();
      expect(siteConfig.description).toContain('Black-owned tech company');
      expect(siteConfig.url).toBeDefined();
      expect(siteConfig.location).toContain('Sugar Land, TX');
    });

    it('has contact information (placeholder or real)', () => {
      expect(siteConfig.email).toBeDefined();
      expect(siteConfig.phone).toBeDefined();
    });
  });

  describe('navigation', () => {
    it('has all main navigation items', () => {
      expect(navigation.main).toHaveLength(7);
      expect(navigation.main.map((item) => item.label)).toEqual([
        'Home',
        'About',
        'Services',
        'Training',
        'Recruitment',
        'Events',
        'Contact',
      ]);
    });

    it('has CTA buttons configured', () => {
      expect(navigation.cta).toHaveLength(2);
      expect(navigation.cta[0].label).toBe('Book a Consultation');
      expect(navigation.cta[1].label).toBe('Get a Quote');
    });
  });

  describe('home page content', () => {
    it('has hero section configured', () => {
      expect(home.hero.headline).toBeDefined();
      expect(home.hero.subheading).toContain('Black-owned tech company');
      expect(home.hero.cta1).toBe('Book a Consultation');
      expect(home.hero.cta2).toBe('Get a Quote');
    });

    it('has three metrics defined', () => {
      expect(home.metrics).toHaveLength(3);
      expect(home.metrics[0].value).toBe('72h');
      expect(home.metrics[1].value).toBe('99.9%');
      expect(home.metrics[2].value).toBe('Zero Noise');
    });

    it('has telemetry feed events', () => {
      expect(home.telemetry.events).toHaveLength(6);
      expect(home.telemetry.events[0]).toContain('THREAT INTEL');
      expect(home.telemetry.heading).toBe('Live Operations View');
      expect(home.telemetry.subheading).toContain('Simulated');
    });

    it('has four service cards', () => {
      expect(home.services.cards).toHaveLength(4);
      expect(home.services.cards[0].title).toBe('IT Consulting & Optimisation');
      expect(home.services.cards[1].title).toBe('Database & Platform Engineering');
    });

    it('has six industries listed', () => {
      expect(home.industries.list).toHaveLength(6);
      expect(home.industries.list).toContain('Banking & Finance');
      expect(home.industries.list).toContain('Public Sector');
    });
  });

  describe('about page content', () => {
    it('has all sections defined', () => {
      expect(about.hero).toBeDefined();
      expect(about.mission).toBeDefined();
      expect(about.positioning).toBeDefined();
      expect(about.delivery).toBeDefined();
      expect(about.geographic).toBeDefined();
    });

    it('references key brand positioning', () => {
      expect(about.mission.body).toContain('Africa');
      expect(about.mission.body).toContain('Black-owned tech company');
    });
  });

  describe('services page content', () => {
    it('has four service offerings', () => {
      expect(services.offerings).toHaveLength(4);
    });

    it('each service has required properties', () => {
      services.offerings.forEach((service) => {
        expect(service.id).toBeDefined();
        expect(service.title).toBeDefined();
        expect(service.description).toBeDefined();
        expect(service.engagements).toBeDefined();
        expect(service.deliverables).toBeDefined();
      });
    });

    it('services have correct IDs for anchors', () => {
      const ids = services.offerings.map((s) => s.id);
      expect(ids).toEqual(['consulting', 'database', 'training', 'recruitment']);
    });
  });

  describe('training page content', () => {
    it('has three training tracks', () => {
      expect(training.tracks.list).toHaveLength(3);
    });

    it('tracks include SQL, Cloud, and Security', () => {
      const titles = training.tracks.list.map((t) => t.title);
      expect(titles).toContain('SQL Server Track');
      expect(titles).toContain('Cloud Platform Track');
      expect(titles).toContain('Cyber Security Track');
    });
  });

  describe('recruitment page content', () => {
    it('has process steps defined', () => {
      expect(recruitment.process.steps).toHaveLength(4);
    });

    it('has talent pool descriptions', () => {
      expect(recruitment.pools.offshore).toBeDefined();
      expect(recruitment.pools.northAmerica).toBeDefined();
    });
  });

  describe('events page content', () => {
    it('has placeholder events', () => {
      expect(events.placeholders).toHaveLength(3);
    });

    it('includes disclaimer note', () => {
      expect(events.note).toContain('placeholder');
    });
  });

  describe('contact page content', () => {
    it('has form configuration', () => {
      expect(contact.form.fields.name).toBeDefined();
      expect(contact.form.fields.email).toBeDefined();
      expect(contact.form.fields.service).toBeDefined();
    });

    it('form has service options', () => {
      expect(contact.form.fields.service.options).toHaveLength(5);
      expect(contact.form.fields.service.options).toContain('Consulting');
    });

    it('includes configuration notes', () => {
      expect(contact.form.note).toContain('placeholder');
      expect(contact.consultation.note).toContain('placeholder');
    });
  });

  describe('footer content', () => {
    it('has status line and copyright', () => {
      expect(footer.status).toContain('Operational Status');
      expect(footer.copyright).toContain('2026');
      expect(footer.copyright).toContain('Rawlings Global Solutions');
    });

    it('has legal links', () => {
      expect(footer.links).toHaveLength(3);
      expect(footer.links.map((l) => l.label)).toEqual([
        'Privacy Policy',
        'Terms of Service',
        'Security',
      ]);
    });
  });
});
