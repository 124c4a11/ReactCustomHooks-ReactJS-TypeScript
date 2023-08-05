'use client';

import { useWindowEvent } from '@/hooks/useWindowEvent';
import { useState } from 'react';

export default function UseWindwonEventExamplePage() {
  const [{ x, y, diffX, diffY }, setMousePosition] = useState({
    x: 0,
    y: 0,
    diffX: 0,
    diffY: 0,
  });

  useWindowEvent('mousemove', (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
      diffX: e.clientX - x,
      diffY: e.clientY - y,
    });
  });

  return (
    <>
      <h1>useWindwonEvent example</h1>
      <h4>mouse position</h4>
      X: {x}
      Y: {y}
      <h4>Diff from prev position</h4>
      X: {diffX}
      Y: {diffY}
    </>
  );
}
