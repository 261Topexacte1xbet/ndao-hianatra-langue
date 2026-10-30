import type { Metadata } from 'next';
import './style.css';

export const metadata: Metadata = {
  title: 'Ndao Hianatra Langue',
  description: 'Mianara teny vaovao isan’andro, amin’ny fomba tsotra sy mahafinaritra.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="mg"><body>{children}</body></html>;
}
