import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ASWINIX | Predict Smarter. Race Smarter.',
  description: 'AI-powered racing intelligence that analyzes millions of data points to give you the winning edge.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-bg text-textPrimary font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
