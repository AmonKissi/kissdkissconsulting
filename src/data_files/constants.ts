import ogImageSrc from '@images/banner.png';

export const SITE = {
  title: "Kiss D'Kiss",
  tagline: 'Study Abroad',
  description:
    'Empowering students from around the world to pursue their dreams of studying in the U.S.',
  description_short:
    'Empowering students from around the world to pursue their dreams of studying in the U.S.',
  url: 'https://kissdkiss.com',
  author: 'Amon Kissi',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'en-US',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'en_US',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: Empowering students from around the world to pursue their dreams of studying in the U.S.`,
  description:
    "Permettre aux étudiants du monde entier de poursuivre leurs rêves d'étudier aux États-Unis.",
  image: ogImageSrc,
};
