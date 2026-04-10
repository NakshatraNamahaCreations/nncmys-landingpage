import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nakshatranamahacreations.com'),
  title: {
    default: 'Nakshatra Namaha Creations | Website, App & CRM Development',
    template: '%s | NNC Digital',
  },
  description:
    "Full-stack digital agency in Bangalore. Website development, mobile apps, CRM software, digital marketing. 565+ projects, 35+ in-house team, zero outsourcing.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
