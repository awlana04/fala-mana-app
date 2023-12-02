import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fala Mana',
  description:
    'É um Website que procura alertar as mulheres sobre o feminicídio através da apresentação de casos já ocorridos. O projeto foi desenvolvido por estudantes de Biblioteconomia da Universidade Federal do Pará (UFPA) como avaliação no módulo de Tecnologias da Informação e Comunicação.',
  keywords: [
    'feminismo',
    'brasil',
    'universidade',
    'ufpa',
    'universidade federal do pará',
    'relatos',
    'feminicídio',
    'biblioteconomia',
  ],
  publisher: 'Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
