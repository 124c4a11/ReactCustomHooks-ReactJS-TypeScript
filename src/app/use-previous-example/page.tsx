'use client';

import { useEffect, useState } from 'react';
import { usePrevious } from '@/hooks/usePrevious';

export default function UsePreviousExamplePage() {
  const [changingVal, setChangingVal] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setChangingVal(changingVal + 1);
    }, 1000);
  }, [changingVal]);

  const prevVal = usePrevious(changingVal);

  return (
    <div className="App">
      <h1>usePrevious example</h1>
      <p>Changing Val: {changingVal}</p>
      <p>Previous Val: {prevVal}</p>
    </div>
  );
}
