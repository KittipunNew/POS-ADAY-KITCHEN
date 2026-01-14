import type { Metadata } from 'next';
import { Geist, Kanit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const kanit = Kanit({
  variable: '--font-kanit',
  weight: ['400', '600', '700'],
  subsets: ['thai', 'latin'],
});

export const metadata: Metadata = {
  title: 'POS-ADAY-KITCHEN ',
  description: 'Restaurant management system - Aday Kitchen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} font-kanit antialiased bg-[#f1f5f9]`}
      >
        <div className="m-5">{children}</div>
      </body>
    </html>
  );
}
