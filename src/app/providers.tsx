'use client';

import { PropsWithChildren } from 'react';
import { GlobalStyle } from '@/styles/GlobalSyle';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
