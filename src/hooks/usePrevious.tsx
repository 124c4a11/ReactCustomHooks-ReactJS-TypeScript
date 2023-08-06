import { useEffect, useRef } from 'react';

//Gets the previous value of the variable when the component is rendered
export function usePrevious<Value>(value: Value) {
  const prevValue = useRef<Value | null>(null);

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return prevValue.current;
}
