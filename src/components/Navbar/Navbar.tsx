'use client';

import Link from 'next/link';
import { Container } from '../Container/Container';
import { StyledNavbar } from './Navbar.styled';

export function Navbar() {
  return (
    <StyledNavbar>
      <Container>
        <Link href="/">Home</Link>
      </Container>
    </StyledNavbar>
  );
}
