import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client B - Finches',
  description: 'Next.js 15 app powered by Turborepo and Bun',
  openGraph: {
    title: 'Client B - Finches',
    description: 'Next.js 15 app powered by Turborepo and Bun',
    type: 'website',
    locale: 'en_US',
    siteName: 'Client B',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client B - Finches',
    description: 'Next.js 15 app powered by Turborepo and Bun',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
