'use client';

import { PropsWithChildren } from 'react';
import { StyledPageContainer } from './PageContainer.styeld';

export function PageContainer({ children }: PropsWithChildren) {
  return <StyledPageContainer>{children}</StyledPageContainer>;
}
