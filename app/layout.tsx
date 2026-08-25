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
  metadataBase: new URL('https://patrickgatiri.github.io'),
  title: 'Patrick Gatiri — Platform & DevSecOps Engineer',
  description:
    'Patrick Gatiri is a Platform and DevSecOps Engineer based in Nairobi, Kenya.',
  openGraph: {
    type: 'website',
    title: 'Patrick Gatiri — Platform & DevSecOps Engineer',
    description:
      'Platform and DevSecOps Engineer building reliable, secure systems in Nairobi, Kenya.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Patrick Gatiri' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patrick Gatiri — Platform & DevSecOps Engineer',
    description:
      'Platform and DevSecOps Engineer building reliable, secure systems in Nairobi, Kenya.',
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
