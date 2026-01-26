/**
 * CONTENT.TS
 * Single source of truth for all website copy
 * Edit text here to update the entire site
 */

export const siteConfig = {
  name: 'Rawlings Global Solutions',
  tagline: 'Digital Security & IT Excellence for Modern Organisations',
  description: 'A leading technology consultancy delivering enterprise-grade security, cloud modernisation, and IT excellence to organisations worldwide.',
  url: 'https://www.rawlingsglobalsolutions.com',
  location: 'Sugar Land, TX • Serving North America & Offshore Delivery',
  email: 'contact@rawlingsglobalsolutions.com', // Placeholder
  phone: '+1 (000) 000-0000', // Placeholder
};

export const navigation = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Training', href: '/training' },
    { label: 'Recruitment', href: '/recruitment' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: [
    { label: 'Book a Consultation', href: '/contact', primary: true },
    { label: 'Get a Quote', href: '/contact', primary: false },
  ],
};

export const home = {
  hero: {
    headline: 'Enterprise-Grade Security & IT Excellence',
    subheading: 'We deliver consulting, training, and talent solutions with a security-first, forensic mindset. From database performance optimisation to cloud modernisation and workforce enablement, we provide measurable outcomes for organisations that demand excellence.',
    cta1: 'Book a Consultation',
    cta2: 'Get a Quote',
  },
  metrics: [
    { value: '72h', label: 'Rapid assessment & action plan' },
    { value: '99.9%', label: 'Reliability mindset (SRE-inspired)' },
    { value: 'Zero Noise', label: 'Only measurable work' },
  ],
  telemetry: {
    heading: 'Live Operations View',
    subheading: 'Simulated telemetry showcasing our security-first, evidence-driven approach',
    events: [
      '[THREAT INTEL] Analysing phishing campaign vectors for client infrastructure',
      '[MFA CHALLENGE] Multi-factor authentication policy deployed across 3 sites',
      '[DFIR TRIAGE] Digital forensics investigation initiated, evidence chain secured',
      '[SQL LATENCY] Database query optimisation reduced response time by 340ms',
      '[LEAST PRIVILEGE] Identity access review completed for 120 user accounts',
      '[TRAINING COHORT] SQL Server fundamentals track, intake open for Q2 2026',
    ],
  },
  services: {
    heading: 'What We Do',
    subheading: 'Cost-effective optimisation, performance engineering, and talent delivery for organisations that demand reliability and precision.',
    cards: [
      {
        title: 'IT Consulting & Optimisation',
        description: 'Streamline your technology stack, reduce costs, and improve system performance with expert guidance.',
        link: '/services#consulting',
      },
      {
        title: 'Database & Platform Engineering',
        description: 'Performance tuning, migrations, reliability upgrades, and modernisation for SQL Server and cloud platforms.',
        link: '/services#database',
      },
      {
        title: 'IT Training & Career Enablement',
        description: 'SQL Server training at multiple levels, plus career coaching to build workforce capability.',
        link: '/training',
      },
      {
        title: 'Recruitment & Global Delivery',
        description: 'Access skilled engineers across offshore locations and North American SMEs for your projects.',
        link: '/recruitment',
      },
    ],
  },
  industries: {
    heading: 'Industries We Serve',
    subheading: 'Risk-aware architecture, performance engineering, and operations discipline for regulated sectors.',
    list: [
      'Banking & Finance',
      'Insurance',
      'Oil & Gas',
      'Manufacturing',
      'Telecommunications',
      'Public Sector',
    ],
  },
  consultation: {
    heading: 'Start with a Rapid Assessment',
    description: '72-hour discovery, prioritised action plan, delivery with evidence. No noise, no guesswork, just measurable outcomes.',
    cta: 'Book a Consultation',
  },
  team: {
    heading: 'Meet Our Experts',
    subheading: 'Experienced professionals delivering world-class technology solutions',
    members: [
      {
        name: 'Ken Rawlings',
        role: 'Chief Technology Officer',
        image: '/images/team/ken-rawlings.jpg',
        bio: 'Leading technology strategy and innovation with extensive experience in enterprise architecture and digital transformation.',
      },
      {
        name: 'Angelina Brooks',
        role: 'Director of Security',
        image: '/images/team/security-director-placeholder.jpg',
        bio: 'Overseeing cybersecurity operations and digital forensics with a proven track record in protecting critical infrastructure.',
      },
      {
        name: 'Lionel Prevet',
        role: 'Head of Consulting',
        image: '/images/team/consulting-head-placeholder.jpg',
        bio: 'Driving strategic IT consulting initiatives and delivering measurable outcomes for global enterprise clients.',
      },
      {
        name: 'Keoni Peterson',
        role: 'Director of Training',
        image: '/images/team/training-director-placeholder.jpg',
        bio: 'Designing and delivering world-class technical training programs that empower IT professionals worldwide.',
      },
    ],
    note: 'Replace placeholder images with actual team member professional headshots',
  },
};

export const about = {
  hero: {
    headline: 'About Rawlings Global Solutions',
    subheading: 'Security-minded IT excellence for organisations that refuse to compromise.',
  },
  mission: {
    heading: 'Our Mission',
    body: 'We exist to digitally secure organisations worldwide through enterprise-grade technology solutions. With a security-first, forensic mindset, we deliver exceptional results in every engagement, whether tuning a database, modernising a cloud platform, or training the next generation of IT professionals.',
  },
  positioning: {
    heading: 'Who We Are',
    body: 'Rawlings Global Solutions delivers consulting, training, and talent solutions for modern organisations. We specialise in database performance, cloud modernisation, cyber security, digital forensics, and workforce enablement. Our work is grounded in evidence, measured in outcomes, and delivered with operational discipline.',
  },
  delivery: {
    heading: 'How We Work',
    body: 'SOC-grade delivery. Digital forensics energy. 2026 interface.\n\nWe operate with the rigour of a security operations centre: every recommendation is traceable, every change is documented, and every result is verified. Our clients do not get vendor theatrics, they get rapid assessments, prioritised action plans, and reliable execution.',
  },
  geographic: {
    heading: 'Where We Operate',
    body: 'Headquartered in Sugar Land, Texas, we serve clients across North America and leverage offshore delivery capabilities to provide cost-effective, round-the-clock support. Our focus remains on digitally securing businesses in Africa while expanding our footprint globally.',
  },
};

export const services = {
  hero: {
    headline: 'Services',
    subheading: 'From database tuning to cloud modernisation, we deliver measurable improvements with security-first discipline.',
  },
  intro: 'We offer four core capabilities designed to optimise your IT systems, strengthen your workforce, and scale your operations with confidence.',
  offerings: [
    {
      id: 'consulting',
      title: 'IT Consulting & Optimisation',
      description: 'Cost-effective optimisation of IT systems and processes. We assess your current state, identify inefficiencies, and implement improvements that reduce costs and increase performance.',
      engagements: [
        'IT infrastructure audits and roadmaps',
        'Technology stack rationalisation',
        'Performance bottleneck analysis',
        'Vendor and licensing optimisation',
      ],
      deliverables: [
        'Assessment report with prioritised recommendations',
        'Implementation roadmap with cost projections',
        'Post-delivery verification and knowledge transfer',
      ],
    },
    {
      id: 'database',
      title: 'Database & Platform Engineering',
      description: 'Performance tuning, reliability engineering, migrations, and modernisation for SQL Server and cloud platforms. We ensure your data layer is fast, resilient, and ready to scale.',
      engagements: [
        'SQL Server performance tuning and query optimisation',
        'Database migrations (on-premises to cloud, version upgrades)',
        'High availability and disaster recovery design',
        'Platform reliability engineering (SRE practices)',
      ],
      deliverables: [
        'Performance baselines and improvement metrics',
        'Migration playbooks and runbooks',
        'Reliability targets (SLOs) and monitoring setup',
      ],
    },
    {
      id: 'training',
      title: 'IT Training & Career Enablement',
      description: 'SQL Server training at multiple levels, plus career coaching and enablement programmes to build internal capability and advance individual careers.',
      engagements: [
        'SQL Server fundamentals, intermediate, and advanced tracks',
        'Cloud platform training (Azure, AWS - marked configurable)',
        'Cyber security awareness and practitioner training',
        'Career coaching for IT professionals',
      ],
      deliverables: [
        'Structured curriculum with hands-on labs',
        'Certification preparation support (where applicable)',
        'Post-training assessments and progress tracking',
      ],
    },
    {
      id: 'recruitment',
      title: 'Recruitment & Global Delivery',
      description: 'Access to skilled engineers across offshore locations and North American subject matter experts. We provide vetted talent for contract, contract-to-hire, and permanent placements.',
      engagements: [
        'Offshore engineering teams (dedicated or shared)',
        'North America SME placements (contract or permanent)',
        'Technical screening and candidate vetting',
        'Managed delivery teams for project-based work',
      ],
      deliverables: [
        'Candidate profiles with technical assessments',
        'Onboarding and integration support',
        'Ongoing performance tracking',
      ],
    },
  ],
};

export const training = {
  hero: {
    headline: 'Training & Career Enablement',
    subheading: 'Build workforce capability with structured, hands-on training in SQL Server, cloud platforms, and cyber security.',
  },
  philosophy: {
    heading: 'Our Approach',
    body: 'We deliver training with the same rigour we apply to consulting: clear objectives, measurable progress, and real-world application. Our programmes are designed for working professionals who need to upskill quickly and effectively.',
  },
  tracks: {
    heading: 'Training Tracks',
    list: [
      {
        title: 'SQL Server Track',
        subtitle: 'Fundamentals → Intermediate → Advanced',
        description: 'Performance tuning, query optimisation, high availability, and administration.',
      },
      {
        title: 'Cloud Platform Track',
        subtitle: 'Azure and AWS foundational services',
        description: 'Migrations, cost optimisation, and security best practices. (Configurable based on client needs)',
      },
      {
        title: 'Cyber Security Track',
        subtitle: 'Security awareness and incident response',
        description: 'Threat intelligence, incident response, and digital forensics foundations. (Configurable based on client needs)',
      },
    ],
  },
  cohort: {
    heading: 'Cohort Intake',
    body: 'We run quarterly cohorts with limited enrolment to ensure personalised attention and high completion rates. Q2 2026 intake is now open for SQL Server fundamentals.',
  },
  delivery: {
    heading: 'Delivery Modes',
    body: 'Online (live instructor-led and self-paced) and in-class options available. (Configurable based on client requirements and geographic location)',
  },
};

export const recruitment = {
  hero: {
    headline: 'Recruitment & Global Delivery',
    subheading: 'Skilled engineers, vetted talent, and managed delivery teams available offshore and across North America.',
  },
  model: {
    heading: 'Global Delivery Model',
    body: 'We provide access to skilled engineering talent through two channels: offshore delivery centres for cost-effective, round-the-clock support, and North American subject matter experts for high-touch, strategic engagements.',
  },
  pools: {
    heading: 'Talent Pools',
    offshore: {
      title: 'Offshore',
      description: 'Cost-effective engineering teams with expertise in database administration, cloud operations, security monitoring, and application support. Ideal for managed services, 24/7 operations, and project-based delivery.',
    },
    northAmerica: {
      title: 'North America SMEs',
      description: 'Senior consultants and architects for strategic initiatives, complex troubleshooting, and client-facing roles. Available for contract, contract-to-hire, and permanent placements.',
    },
  },
  process: {
    heading: 'How It Works',
    steps: [
      {
        title: 'Requirements Gathering',
        description: 'We define the role, skills, and engagement model.',
      },
      {
        title: 'Candidate Vetting',
        description: 'Technical assessments, reference checks, and culture fit evaluation.',
      },
      {
        title: 'Placement & Onboarding',
        description: 'Integration support and ongoing performance tracking.',
      },
      {
        title: 'Continuous Improvement',
        description: 'Regular check-ins and adjustments as needed.',
      },
    ],
  },
};

export const events = {
  hero: {
    headline: 'Events',
    subheading: 'Workshops, webinars, and industry gatherings where we share knowledge and connect with the community.',
  },
  placeholders: [
    {
      title: 'Q2 2026 SQL Server Fundamentals Cohort',
      description: 'Intake opening soon, register your interest.',
      status: 'Coming Soon',
    },
    {
      title: 'Cloud Security Best Practices Webinar',
      description: 'Date TBC, virtual event for IT leaders.',
      status: 'Coming Soon',
    },
    {
      title: 'Digital Forensics Workshop',
      description: 'Hands-on DFIR training for security professionals.',
      status: 'Planning Phase',
    },
  ],
  note: '(Do not invent real events, these are placeholders only)',
};

export const contact = {
  hero: {
    headline: 'Get in Touch',
    subheading: 'Request a quote, book a consultation, or ask us a question. We will respond within one business day.',
  },
  form: {
    heading: 'Get a Quote',
    fields: {
      name: { label: 'Name', type: 'text', required: true },
      email: { label: 'Email', type: 'email', required: true },
      organisation: { label: 'Organisation', type: 'text', required: false },
      service: {
        label: 'Service of Interest',
        type: 'select',
        required: true,
        options: [
          'Consulting',
          'Database Engineering',
          'Training',
          'Recruitment',
          'Other',
        ],
      },
      description: { label: 'Project Description', type: 'textarea', required: true },
      startDate: { label: 'Preferred Start Date', type: 'date', required: false },
    },
    submit: 'Submit Quote Request',
    note: '(Form posts to placeholder endpoint, marked as configurable)',
  },
  consultation: {
    heading: 'Book a Consultation',
    body: 'Prefer to speak directly? Schedule a 30-minute discovery call to discuss your needs.',
    cta: 'Book a Consultation',
    note: '(Calendar booking tool placeholder—Calendly, etc.)',
  },
  details: {
    heading: 'Contact Details',
    note: '(Demo placeholders unless you replace them)',
  },
};

export const footer = {
  status: 'Operational Status: Online • API Responsive • SOC View Active • Evidence Chain Verified',
  copyright: '© 2026 Rawlings Global Solutions. All rights reserved.',
  links: [
    { label: 'Privacy Policy', href: '/privacy' }, // Placeholder
    { label: 'Terms of Service', href: '/terms' }, // Placeholder
    { label: 'Security', href: '/security' }, // Placeholder
  ],
};
