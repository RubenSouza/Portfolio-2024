import PrelineScript from './components/PrelineScript';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '---font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Rúben Oliveira',
  description: 'The portfolio of Rúben Oliveira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={jetbrainsMono.variable}>
        <Navbar />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
      <PrelineScript />
    </html>
  );
}
