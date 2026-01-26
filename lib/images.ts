/**
 * IMAGE ASSETS CONFIGURATION
 * Central configuration for all imagery used across the site
 * Replace placeholder URLs with your actual image assets
 */

export const heroImages = {
  // Hero background - abstract technology/data visualization
  // Recommended: 1920x1080px, optimized WebP format
  // Source: Use royalty-free from Unsplash, Pexels, or Pixabay
  background: {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    alt: 'Advanced technology and data visualization',
    credit: 'NASA (Unsplash)',
    license: 'Unsplash License (free to use)',
  },

  // Alternative hero images for variety
  cyberSecurity: {
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    alt: 'Cyber security and network infrastructure',
    credit: 'Adi Goldstein (Unsplash)',
    license: 'Unsplash License (free to use)',
  },

  cloudInfra: {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    alt: 'Cloud infrastructure and modern technology',
    credit: 'Anas Alshanti (Unsplash)',
    license: 'Unsplash License (free to use)',
  },
};

export const teamImages = {
  // Professional team photos - PLACEHOLDERS
  // Replace with actual high-resolution staff photos (800x800px minimum)
  // All team photos should have consistent lighting, background, and style
  cto: {
    url: '/images/team/ken-rawlings.jpg',
    alt: 'Ken Rawlings, Chief Technology Officer',
    placeholder: false,
  },
  securityDirector: {
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    alt: 'Director of Security',
    placeholder: true,
    note: 'Replace with actual Security Director professional headshot',
  },
  consultingHead: {
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    alt: 'Head of Consulting',
    placeholder: true,
    note: 'Replace with actual Head of Consulting professional headshot',
  },
  trainingDirector: {
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
    alt: 'Director of Training',
    placeholder: true,
    note: 'Replace with actual Training Director professional headshot',
  },
};

export const serviceImages = {
  // Service section imagery
  consulting: {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    alt: 'IT consulting and strategic planning',
    credit: 'Helloquence (Unsplash)',
    license: 'Unsplash License (free to use)',
  },
  database: {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    alt: 'Database and platform engineering',
    credit: 'Anas Alshanti (Unsplash)',
    license: 'Unsplash License (free to use)',
  },
  training: {
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    alt: 'IT training and career development',
    credit: 'Marvin Meyer (Unsplash)',
    license: 'Unsplash License (free to use)',
  },
  recruitment: {
    url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
    alt: 'Recruitment and global delivery',
    credit: 'Cytonn Photography (Unsplash)',
    license: 'Unsplash License (free to use)',
  },
};

export const industryIcons = {
  // Industry icons/imagery
  finance: {
    url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80',
    alt: 'Banking and finance sector',
    credit: 'Unsplash',
    license: 'Unsplash License (free to use)',
  },
  insurance: {
    url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80',
    alt: 'Insurance industry',
    credit: 'Unsplash',
    license: 'Unsplash License (free to use)',
  },
  energy: {
    url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80',
    alt: 'Oil and gas industry',
    credit: 'Unsplash',
    license: 'Unsplash License (free to use)',
  },
  manufacturing: {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
    alt: 'Manufacturing sector',
    credit: 'Unsplash',
    license: 'Unsplash License (free to use)',
  },
  telecom: {
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
    alt: 'Telecommunications industry',
    credit: 'Unsplash',
    license: 'Unsplash License (free to use)',
  },
  publicSector: {
    url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
    alt: 'Public sector and government',
    credit: 'Unsplash',
    license: 'Unsplash License (free to use)',
  },
};

/**
 * IMAGE OPTIMIZATION NOTES:
 *
 * 1. All images should be converted to WebP format for optimal performance
 * 2. Provide multiple sizes for responsive images
 * 3. Use lazy loading for images below the fold
 * 4. Compress images to < 200KB while maintaining quality
 * 5. Ensure all team photos have consistent aspect ratio (1:1 recommended)
 * 6. Hero images should be at least 1920x1080px for desktop displays
 *
 * REPLACEMENT GUIDE:
 * - Team photos: Replace URLs in teamImages with actual staff photos from /public/images/team/
 * - Hero background: Use custom hero image or select from alternatives
 * - Service images: Can customize per service offering
 *
 * FREE IMAGE SOURCES (Commercial use allowed):
 * - Unsplash: https://unsplash.com (tech, business, professional)
 * - Pexels: https://pexels.com (diverse stock imagery)
 * - Pixabay: https://pixabay.com (free commercial use)
 */
