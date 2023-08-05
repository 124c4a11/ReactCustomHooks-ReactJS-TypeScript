import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '../../libs/StyledComponentsRegistry';
import { Providers } from './providers';
import { Navbar } from '@/components/Navbar/Navbar';
import { PageContainer } from '@/components/PageContainer/PageContainer';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Custom Hooks',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Navbar />
            <PageContainer>{children}</PageContainer>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
