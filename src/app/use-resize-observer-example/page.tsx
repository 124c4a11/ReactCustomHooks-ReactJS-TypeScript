'use client';

import { useResizeObserver } from '@/hooks/useResizeObserver';
import { useState, useCallback } from 'react';

export default function UseResizeObserverExamplePage() {
  const [bool, setBool] = useState(false);

  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    console.log('resize', entries);
  }, []);

  const resizeRef = useResizeObserver(handleResize);

  const renderTestText = () => {
    if (bool) {
      return <article ref={resizeRef}>Test Article</article>;
    }

    return <div ref={resizeRef}>Test Div</div>;
  };

  return (
    <>
      <h1>useResizeObserver example</h1>
      <p>Look at the console and click the toggle button!</p>

      <div style={{ width: '100%', textAlign: 'center' }}>
        <button onClick={() => setBool((prev) => !prev)}>Toggle</button>
        {renderTestText()}
      </div>
    </>
  );
}
