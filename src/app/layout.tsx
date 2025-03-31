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
  openGraph: {
    title: "Salão Rosa de Saron",
    description: "O melhor Salão de beleza e estética da Praia Grande",
    url: "https://www.salaorosadesaronpg.com.br/", // Substitua pela URL real do seu site
    siteName: "Salão Rosa de Saron",
    images: [
      {
        url: "./public/icon.ico", // Substitua pela URL real da imagem
        width: 1200,
        height: 630,
        alt: "Salão Rosa de Saron",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salão Rosa de Saron",
    description: "O melhor Salão de beleza e estética da Praia Grande",
    images: ["./public/icon.ico"], // URL da imagem para Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${poppins.className}`}>
      <body>
        {children}
        <AosInit />
      </body>
    </html>
  );
}
