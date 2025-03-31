
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AosInit from './_components/AosInit';

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Salão Rosa de Saron",
  description: "O melhor Salão de beleza e estética da Praia Grande",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${poppins.className}`}>
      <meta name="apple-mobile-web-app-title" content="Rosa de Saron" />
      <body>
        {children}
        <AosInit />
      </body>
    </html>
  );
}
