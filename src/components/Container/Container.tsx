'use client';

import { PropsWithChildren } from 'react';
import { StyledContainer } from './Container.styled';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <StyledContainer className={className}>{children}</StyledContainer>;
}
