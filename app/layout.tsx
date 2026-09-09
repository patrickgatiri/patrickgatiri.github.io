import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://patrickgatiri.me'),
  title: 'Patrick Gatiri | Platform & DevSecOps Engineer',
  description:
    'Patrick Gatiri is a Nairobi-based Platform and DevSecOps Engineer focused on reliable infrastructure, secure delivery systems, and developer platforms.',
  applicationName: 'Patrick Gatiri',
  authors: [{ name: 'Patrick Gatiri', url: '/' }],
  creator: 'Patrick Gatiri',
  publisher: 'Patrick Gatiri',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Patrick Gatiri',
    'Platform Engineer',
    'DevSecOps Engineer',
    'Nairobi',
    'Kenya',
    'cloud infrastructure',
    'secure software delivery',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Patrick Gatiri',
    locale: 'en_KE',
    title: 'Patrick Gatiri | Platform & DevSecOps Engineer',
    description:
      'Nairobi-based Platform and DevSecOps Engineer building reliable infrastructure, secure delivery systems, and developer platforms.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Patrick Gatiri — Platform and DevSecOps Engineer in Nairobi, Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrick Gatiri | Platform & DevSecOps Engineer',
    description:
      'Nairobi-based Platform and DevSecOps Engineer building reliable infrastructure and secure delivery systems.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
