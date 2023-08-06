'use client';

import { useReducer, useLayoutEffect } from 'react';
import { shallowEqual } from 'shallow-equal';
import { useCustomCompare } from '@/hooks/useCustomCompare';

export default function CustomDepsManagementSolutionPage() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);

  useBodyStyles({
    height: '100%',
    width: '100%',
    background: 'white',
  });

  return (
    <>
      <h1>Custom deps management solution</h1>
      <p>Look at the console!</p>
      <p>I just render for the sake of the example</p>
      <button onClick={forceUpdate}>Rerender component</button>
    </>
  );
}

function useBodyStyles(styles: React.CSSProperties) {
  useLayoutEffect(() => {
    console.log('effect');
    Object.entries(styles).map(([style, value]) => {
      document.body.style.setProperty(
        style,
        // will not work for all cases
        String(value)
      );
    });
  }, [useCustomCompare(styles, shallowEqual)]); // solution
}
