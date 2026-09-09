import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Patrick Gatiri | Platform & DevSecOps Engineer',
    short_name: 'Patrick Gatiri',
    description:
      'Personal website of Patrick Gatiri, a Platform and DevSecOps Engineer based in Nairobi, Kenya.',
    start_url: '/',
    display: 'standalone',
    background_color: '#101410',
    theme_color: '#101410',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
