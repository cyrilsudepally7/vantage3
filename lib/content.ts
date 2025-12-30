// lib/content.ts
// All website content is centralized here for easy editing

export const siteConfig = {
  name: 'Vantage',
  tagline: 'Modern Brand Infrastructure',
  description: 'Vantage builds modern brand infrastructure for businesses ready to grow. Websites, social presence, owned growth channels, and monetization systems.',
  email: 'contact@usevantage.net',
  social: {
    twitter: '',
    linkedin: '',
    instagram: 'https://www.instagram.com/usevantage_net/',
  },
}

export const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: true,
      items: [
        {
          group: 'Brand Website',
          items: [
            { name: 'Modernized Website', href: '/services/modernized-website', description: 'Your digital headquarters, built to convert.' },
          ]
        },
        {
          group: 'Brand Presence',
          items: [
            { name: 'Social Media Systems', href: '/services/social-media-systems', description: 'TikTok, Instagram, YouTube presence built for growth.' },
          ]
        },
        {
          group: 'Owned Growth',
          items: [
            { name: 'Email & Messaging', href: '/services/email-messaging', description: 'Build audiences you own, not rent.' },
          ]
        },
        {
          group: 'Monetization',
          items: [
            { name: 'Digital & Physical Products', href: '/services/monetization', description: 'Revenue systems that compound.' },
          ]
        },
        {
          group: 'Specialized',
          items: [
            { name: 'Nonprofit & Student Orgs', href: '/services/nonprofit-student-org', description: 'Premium work for organizations making impact.' },
          ]
        },
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  cta: { name: 'Apply', href: 'https://calendly.com/cyrilsudepally7/30min' },
}

export const hero = {
  headline: 'Build a Brand System That Scales.',
  subheadline: 'Vantage builds modern brand infrastructure—websites, social presence, owned channels, and monetization—for businesses serious about growth.',
  primaryCta: { text: 'Apply', href: 'https://calendly.com/cyrilsudepally7/30min' },
  secondaryCta: { text: 'See How It Works', href: '#process' },
}

export const problems = {
  title: 'The Problem',
  subtitle: 'Most businesses operate with fragmented brand infrastructure that limits growth.',
  items: [
    {
      title: 'Fragmented Brand',
      description: 'Inconsistent presence across platforms dilutes trust and recognition.',
    },
    {
      title: 'Low-Converting Website',
      description: 'Beautiful templates that fail to turn visitors into customers.',
    },
    {
      title: 'Platform Dependence',
      description: 'Building on rented land where algorithms control your reach.',
    },
    {
      title: 'Unclear Monetization',
      description: 'No systematic approach to capturing and compounding revenue.',
    },
  ],
}

export const vantageSystem = {
  title: 'The Vantage System',
  subtitle: 'Four pillars of modern brand infrastructure, built to work together.',
  pillars: [
    {
      title: 'Brand HQ',
      subtitle: 'Website',
      description: 'Your digital headquarters—strategically designed to build trust and convert visitors.',
      icon: 'globe',
    },
    {
      title: 'Distribution',
      subtitle: 'Social',
      description: 'Systematic social presence that builds audience and drives traffic back to you.',
      icon: 'share',
    },
    {
      title: 'Ownership',
      subtitle: 'Email & Messaging',
      description: 'Owned channels where you control the relationship, not the algorithm.',
      icon: 'mail',
    },
    {
      title: 'Revenue',
      subtitle: 'Monetization',
      description: 'Products and systems designed to capture value and compound growth.',
      icon: 'trending-up',
    },
  ],
}

export const services = {
  overview: {
    title: 'Services',
    subtitle: 'Every service is designed to integrate into a cohesive brand system.',
  },
  items: [
    {
      slug: 'modernized-website',
      title: 'Modernized Website',
      category: 'Brand Website',
      shortDescription: 'Your digital headquarters, built to convert.',
      fullDescription: 'A strategically designed website that establishes credibility, communicates value, and converts visitors into customers. Not a template. Not a generic agency build. A custom digital headquarters built for your specific business.',
      forWho: [
        'Businesses with outdated websites that no longer reflect their brand',
        'Companies ready to invest in a serious digital presence',
        'Brands that need to stand out in competitive markets',
        'Organizations scaling and needing infrastructure that grows with them',
      ],
      deliverables: [
        'Custom design system aligned with your brand',
        'Responsive, high-performance development',
        'SEO foundation and technical optimization',
        'CMS integration for easy content management',
        'Analytics and conversion tracking setup',
        'Launch support and documentation',
      ],
      timeline: '6-10 weeks',
      faqs: [
        {
          question: 'What makes this different from template websites?',
          answer: 'Templates optimize for the seller, not your business. Every element we build is strategically designed for your specific goals, audience, and market position. The result is a website that actually converts, not just looks good.',
        },
        {
          question: 'What platforms do you build on?',
          answer: 'We typically build on modern frameworks like Next.js with headless CMS options like Sanity or Contentful. For specific needs, we also work with Webflow, Shopify, and WordPress. Technology choice is driven by your requirements.',
        },
        {
          question: 'Do you offer ongoing maintenance?',
          answer: 'Yes. We offer retainer arrangements for ongoing updates, optimization, and support. Most clients find this valuable as their business evolves.',
        },
      ],
    },
    {
      slug: 'social-media-systems',
      title: 'Social Media Systems',
      category: 'Brand Presence',
      shortDescription: 'TikTok, Instagram, YouTube presence built for growth.',
      fullDescription: 'A systematic approach to social presence that builds audience, establishes authority, and drives traffic to your owned channels. We build the systems, templates, and strategies—you execute with confidence.',
      platforms: ['TikTok', 'Instagram', 'YouTube'],
      forWho: [
        'Brands that know they need social presence but lack a clear system',
        'Businesses tired of random posting with no measurable results',
        'Companies ready to invest in building real audience',
        'Teams that need scalable content frameworks',
      ],
      deliverables: [
        'Platform-specific strategy and positioning',
        'Content pillars and series frameworks',
        'Visual templates and brand guidelines for social',
        'Posting cadence and calendar system',
        'Analytics framework and KPI tracking',
        'Team training and handoff documentation',
      ],
      timeline: '4-8 weeks',
      faqs: [
        {
          question: 'Do you create the content for us?',
          answer: 'We build the systems, frameworks, and templates—you or your team create the content. For ongoing content creation, we can recommend production partners or discuss retainer arrangements for specific support.',
        },
        {
          question: 'Which platforms should we focus on?',
          answer: 'This depends on your audience and business model. During discovery, we identify where your audience actually spends time and where you can realistically build presence. Better to own one platform than be mediocre on five.',
        },
        {
          question: 'How do you measure success?',
          answer: 'We establish clear KPIs during strategy: audience growth, engagement rates, traffic to owned channels, and ultimately conversion. Vanity metrics are meaningless—we focus on metrics that connect to business outcomes.',
        },
      ],
    },
    {
      slug: 'email-messaging',
      title: 'Email & Messaging Campaigns',
      category: 'Owned Growth',
      shortDescription: 'Build audiences you own, not rent.',
      fullDescription: 'Email and messaging infrastructure that captures leads, nurtures relationships, and drives revenue. These are channels you own—no algorithm changes, no platform risk.',
      forWho: [
        'Businesses over-reliant on social platforms for reach',
        'Companies with traffic but no systematic capture',
        'Brands ready to build direct relationships with audience',
        'Organizations that need predictable, owned communication channels',
      ],
      deliverables: [
        'Email infrastructure setup and migration',
        'Lead capture strategy and implementation',
        'Welcome sequence and nurture flows',
        'Email templates aligned with brand system',
        'Segmentation strategy and automation',
        'SMS/messaging integration where applicable',
      ],
      timeline: '4-6 weeks',
      faqs: [
        {
          question: 'What email platforms do you work with?',
          answer: 'We commonly work with Klaviyo, ConvertKit, Mailchimp, and custom solutions. Platform recommendation depends on your business model, technical requirements, and growth plans.',
        },
        {
          question: 'Do you write the email copy?',
          answer: 'We build the systems, sequences, and templates. For ongoing copywriting, we can provide frameworks and guidelines, or recommend copywriting partners for full-service support.',
        },
        {
          question: 'How does this integrate with my website?',
          answer: 'Seamlessly. Lead capture, forms, and conversion points are designed as part of your overall brand system. Everything works together.',
        },
      ],
    },
    {
      slug: 'monetization',
      title: 'Monetization Systems',
      category: 'Revenue',
      shortDescription: 'Revenue systems that compound.',
      fullDescription: 'Digital and physical product infrastructure that turns audience into revenue. Courses, memberships, merchandise, and beyond—built with systems that scale.',
      types: ['Digital Products', 'Physical Products'],
      forWho: [
        'Brands with audience ready to monetize',
        'Businesses expanding into new revenue streams',
        'Creators turning expertise into products',
        'Companies that need scalable product infrastructure',
      ],
      deliverables: [
        'Product strategy and positioning',
        'Platform selection and setup',
        'Sales page design and development',
        'Payment and fulfillment integration',
        'Launch strategy and execution support',
        'Analytics and optimization framework',
      ],
      timeline: '6-12 weeks depending on scope',
      faqs: [
        {
          question: 'What types of digital products do you build?',
          answer: 'Online courses, membership sites, downloadable products, software tools, and custom digital experiences. We focus on products with real value that justify premium pricing.',
        },
        {
          question: 'Do you handle physical product fulfillment?',
          answer: 'We build the infrastructure—store, product pages, payment processing, order management. For fulfillment, we integrate with print-on-demand services or connect you with logistics partners.',
        },
        {
          question: 'What about pricing strategy?',
          answer: 'We help you think through positioning and pricing, but you know your market best. We build systems that support your pricing strategy, whatever that is.',
        },
      ],
    },
    {
      slug: 'nonprofit-student-org',
      title: 'Nonprofit & Student Organization Websites',
      category: 'Specialized',
      shortDescription: 'Premium work for organizations making impact.',
      fullDescription: 'The same quality infrastructure we build for businesses, designed for nonprofits and student organizations. Mission-driven work deserves professional presentation.',
      forWho: [
        'Nonprofits with outdated digital presence',
        'Student organizations ready for professional infrastructure',
        'Mission-driven groups needing to communicate impact',
        'Organizations that want to stand out in their space',
      ],
      deliverables: [
        'Custom website design and development',
        'Donation/membership integration',
        'Event and program management features',
        'Volunteer/member portal where needed',
        'Content management system',
        'Training and documentation',
      ],
      timeline: '6-10 weeks',
      faqs: [
        {
          question: 'Do you offer nonprofit pricing?',
          answer: 'We work with select nonprofits and student organizations. Pricing considers your budget reality while ensuring we can deliver quality work. Apply and we can discuss fit.',
        },
        {
          question: 'What platforms do you use for nonprofit sites?',
          answer: 'Often Next.js or Webflow, integrated with tools like Donorbox, Stripe, or custom solutions. Technology choice is driven by your specific needs and internal capacity.',
        },
        {
          question: 'Can you help with ongoing content and updates?',
          answer: 'We build systems that your team can manage. For organizations needing ongoing support, we offer retainer arrangements tailored to nonprofit budgets.',
        },
      ],
    },
  ],
}

export const portfolio = {
  title: 'Portfolio',
  subtitle: 'Selected work across brand infrastructure.',
  categories: ['All', 'Website', 'Social', 'Email/Messaging', 'Monetization', 'Nonprofit/Student Org'],
  items: [
    {
      id: 1,
      title: 'UTD Financial Leadership Association',
      category: 'Nonprofit/Student Org',
      industry: 'Student Organization',
      description: 'Professional web presence for UTD\'s premier finance organization.',
      outcomes: ['Modern, conversion-focused design', 'Streamlined membership applications', 'Established professional credibility'],
      image: '/portfolio/utdfla.jpg',
    },
  ],
}

export const process = {
  title: 'Our Process',
  subtitle: 'How we work with clients.',
  steps: [
    {
      number: '01',
      title: 'Discover',
      description: 'We learn your business, market, and goals. No generic questionnaires—real conversations that surface what matters.',
    },
    {
      number: '02',
      title: 'Build',
      description: 'Strategic design and development with regular check-ins. You stay informed without micromanaging.',
    },
    {
      number: '03',
      title: 'Launch',
      description: 'Thorough testing and coordinated launch. Everything works. Nothing breaks.',
    },
    {
      number: '04',
      title: 'Optimize',
      description: 'Post-launch refinement based on real data. Infrastructure that improves over time.',
    },
  ],
}

export const about = {
  title: 'About Vantage',
  story: {
    headline: 'We build brand infrastructure.',
    paragraphs: [
      'Vantage exists because most businesses operate with fragmented digital presence—a website here, social accounts there, email somewhere else. None of it works together. None of it compounds.',
      'We build differently. Every website, social system, email sequence, and product we create is designed as infrastructure—foundational systems that integrate, scale, and compound over time.',
      'This isn\'t agency work. We don\'t do one-off projects and disappear. We build brand systems for businesses serious about growth.',
    ],
  },
  values: [
    {
      title: 'Clarity',
      description: 'Clear communication. Clear strategy. Clear outcomes. No jargon, no fluff.',
    },
    {
      title: 'Performance',
      description: 'Everything we build is optimized to perform. Beautiful work that actually converts.',
    },
    {
      title: 'Craftsmanship',
      description: 'Details matter. We sweat the small stuff because that\'s where quality shows.',
    },
    {
      title: 'Long-term Growth',
      description: 'We build for where you\'re going, not just where you are.',
    },
  ],
  positioning: {
    headline: 'This isn\'t for everyone.',
    paragraph: 'Vantage is for businesses ready to invest in serious infrastructure. We don\'t compete on price. We don\'t do quick template work. If you\'re looking for the cheapest option, we\'re not it. If you\'re building something that matters, let\'s talk.',
  },
  faqs: [
    {
      question: 'What makes Vantage different from other agencies?',
      answer: 'We don\'t think of ourselves as an agency. Agencies do projects. We build infrastructure—integrated systems designed to work together and compound over time. Every engagement is strategic, not transactional.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work across industries, but our best clients share characteristics: they\'re serious about growth, value quality over speed, and understand that brand infrastructure is an investment, not an expense.',
    },
    {
      question: 'How do I know if we\'re a good fit?',
      answer: 'Apply. We\'ll have a conversation and figure it out together. We\'re selective about who we work with—not because we\'re exclusive, but because fit matters for outcomes.',
    },
  ],
}

export const contact = {
  title: 'Get in Touch',
  subtitle: 'For serious inquiries about working together, we recommend applying. For general questions, use the form below.',
  email: 'contact@usevantage.net',
}

export const apply = {
  title: 'Apply to Work With Vantage',
  subtitle: 'We work with select businesses that are serious about building brand infrastructure. Fill out the application below and we\'ll be in touch if there\'s a potential fit.',
  note: 'We review applications personally. Not everyone is a fit, and that\'s okay. We\'d rather be honest upfront than waste anyone\'s time.',
  fields: {
    industries: [
      'Technology / SaaS',
      'E-commerce / Retail',
      'Professional Services',
      'Finance / Fintech',
      'Healthcare / Wellness',
      'Education',
      'Nonprofit',
      'Creator / Media',
      'Real Estate',
      'Other',
    ],
    revenueRanges: [
      'Pre-revenue',
      '$0 - $100K annually',
      '$100K - $500K annually',
      '$500K - $1M annually',
      '$1M - $5M annually',
      '$5M+ annually',
      'Nonprofit / Student Org',
    ],
    primaryGoals: [
      'Build or rebuild website',
      'Establish social presence',
      'Build email/messaging infrastructure',
      'Launch products (digital or physical)',
      'Full brand system',
      'Not sure yet',
    ],
    needs: [
      'Website',
      'Social Media Systems',
      'Email & Messaging',
      'Digital Products',
      'Physical Products',
      'Full Brand Infrastructure',
    ],
    budgetRanges: [
      '$5K - $10K',
      '$10K - $25K',
      '$25K - $50K',
      '$50K - $100K',
      '$100K+',
      'Let\'s discuss',
    ],
    timelines: [
      'ASAP',
      '1-2 months',
      '3-6 months',
      '6+ months',
      'Just exploring',
    ],
  },
  success: {
    title: 'Application Received',
    message: 'Thanks for applying. We review every application personally and will be in touch within 3-5 business days if there\'s a potential fit. In the meantime, feel free to explore our portfolio and services.',
  },
}

export const footer = {
  tagline: 'Modern brand infrastructure for businesses ready to grow.',
  links: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Apply', href: 'https://calendly.com/cyrilsudepally7/30min' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
  copyright: '© 2024 Vantage. All rights reserved.',
}
