
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${poppins.className}`}>
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="author" content="Salão Rosa de Saron" />
      <meta name="theme-color" content="#F1F1F1" />
      <meta name="robots" content="index, follow" />
      <meta name="apple-mobile-web-app-title" content="Rosa de Saron" />
      <meta property="og:url" content="https://salaorosadesaronpg.com.br"></meta>
      <meta property='og:site_name' content="salaorosadesaronpg.com.br" />
      <meta property='og:title' content="Salão Rosa de Saron" />
      <meta property='og:description' content="O melhor salão de beleza e estética da região!" />
      <meta property='og:image' content="https://salaorosadesaronpg.com.br/preview-logo.png" />
      <meta property='twitter:card' content="summary_large_image" />
      <meta property='twitter:title' content="Salão Rosa de Saron" />
      <meta property='twitter:description' content="O melhor salão de beleza e estética da região!" />
      <meta property='twitter:image' content="https://salaorosadesaronpg.com.br/preview.png" />
      <body>
        {children}
        <AosInit />
      </body>
    </html>
  );
}
