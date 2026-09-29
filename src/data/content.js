// All website text lives here. Edit this file to update the site content.

export const company = {
  name: 'Bit Byte Technologies',
  logoFirst: 'Bit',
  logoSecond: 'Byte',
  tagline: 'Transforming Ideas into Digital Reality',
  description:
    'Bit Byte Technologies crafts future-ready digital experiences by transforming businesses through cutting-edge web applications with impactful design, strategic SEO, and performance-driven digital marketing.',
  email: 'reachus@bitbytetech.org',
  phone: '+91 00000 00000', // TODO: replace with the real phone number
  location: 'Salem, Tamil Nadu, India',
  website: 'https://www.bitbytetech.org',
}

export const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
]

// Words cycled by the typing effect in the hero
export const typingWords = ['Web Apps', 'Mobile Apps', 'Brands', 'Growth Campaigns', 'Sales Dashboards']

// Tech and service names for the running marquee strip
export const marqueeItems = ['React', 'Django', 'Flutter', 'PostgreSQL', 'Node.js', 'SEO', 'Google Ads', 'Meta Ads', 'UI/UX Design']

// Service cards. "icon" must match a key in ICONS inside components/Services.jsx
export const services = [
  {
    icon: 'code',
    tag: 'SOFTWARE',
    title: 'Web App Development',
    description:
      'Fast, secure and scalable web applications built around your workflow. From idea to deployment, we handle design, development and hosting end to end.',
    cta: 'Get a free quote',
  },
  {
    icon: 'mobile',
    tag: 'MOBILE',
    title: 'Mobile App Development',
    description:
      'Android and iOS apps built with Flutter from a single codebase, with smooth UI, secure APIs and full Play Store and App Store launch support.',
    cta: 'Learn more',
  },
  {
    icon: 'identity',
    tag: 'IDENTITY',
    title: 'Personal Branding',
    description:
      'Logos, brand identity and portfolio websites that help founders and creators stand out, build trust and look sharply professional online.',
    cta: 'Learn more',
  },
  {
    icon: 'growth',
    tag: 'GROWTH',
    title: 'Digital Marketing',
    description:
      'Strategic SEO, paid ads, content and social media campaigns focused on real leads and sales, not just likes and impressions.',
    cta: 'Learn more',
  },
  {
    icon: 'prototype',
    tag: 'PROTOTYPE',
    title: 'Imagination to Reality',
    description:
      'Have an idea? We shape it into a working MVP with the right product strategy, UI design and tech architecture, ready to launch.',
    cta: 'Start your project',
  },
  {
    icon: 'live',
    tag: 'LIVE OPS',
    title: 'Real-Time Sales Solutions',
    description:
      'Live sales dashboards, pipeline tracking and CRM integrations that help your team act on revenue signals the moment they happen.',
    cta: 'Learn more',
  },
]

// TODO: replace these sample numbers with real company figures before going live
export const stats = [
  { value: 50, suffix: '+', label: 'Projects delivered' },
  { value: 30, suffix: '+', label: 'Happy clients' },
  { value: 5, suffix: 'yrs', label: 'Building software' },
  { value: 24, suffix: '/7', label: 'Support available' },
]

export const aboutText =
  'We are a technology studio from Salem building web apps, mobile apps and growth campaigns that help businesses sell more, work smarter and grow faster online.'

// Words inside aboutText that get the accent colour
export const aboutHighlight = ['web', 'apps,', 'mobile', 'apps', 'growth', 'campaigns']

export const process = [
  { step: 'Step 1', title: 'Discover', text: 'We understand your business, your customers and your goals before writing a single line of code.' },
  { step: 'Step 2', title: 'Design', text: 'Wireframes and UI designs you can see and approve, so there are no surprises later.' },
  { step: 'Step 3', title: 'Develop', text: 'Clean, tested code with regular demos, so you watch your product take shape every week.' },
  { step: 'Step 4', title: 'Launch & Grow', text: 'We deploy, monitor and market your product, and keep improving it with real user data.' },
]
