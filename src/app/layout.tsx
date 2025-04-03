
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
  description: "Agende um horário no salão de beleza e estética perto de você. Praia Grande, Vila Sônia.",
  openGraph: {
    type: "website",
    url: "https://salaorosadesaronpg.com.br",
    title: "Salão Rosa de Saron",
    description: "O melhor salão de beleza e estética da região!",
    images: [
      {
        url: "https://salaorosadesaronpg.com.br/preview.png",
        width: 1200,
        height: 630,
        alt: "Salão Rosa de Saron",
      },
    ],
    siteName: "Salão Rosa de Saron",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salão Rosa de Saron",
    description: "O melhor salão de beleza e estética da região!",
    images: ["https://salaorosadesaronpg.com.br/preview.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${poppins.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="author" content="Salão Rosa de Saron" />
        <meta name="theme-color" content="#F1F1F1" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        {children}
        <AosInit />
      </body>
    </html>
  );
}
