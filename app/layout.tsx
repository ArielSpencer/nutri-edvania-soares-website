import type { Metadata } from "next";
import { Lato } from 'next/font/google';
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'Nutricionista Edvânia Soares',
  description: 'Nutricionista especializada com 20 anos de experiência. Atendimento nutricional personalizado, programas para empresas e mentoria profissional. Agendar uma Conversa!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${lato.className} font-primary antialiased`}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
