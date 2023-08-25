import { useCallback, useState } from 'react';
import { useIsMounted } from './useIsMounted';

// The hook solves the problem:
//
// Warning: Can't perform a React state update on an unmounted component.
// This is a no-op, but it indicates a memory leak in your application.
// To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
export function useSafeState<S>(initialValue: (() => S) | S) {
  const [value, setValue] = useState(initialValue);

  const isMounted = useIsMounted();

  const setState = useCallback((newValue: React.SetStateAction<S>) => {
    if (!isMounted.current) return;

    setValue(newValue);
  }, []);

  return [value, setState] as const;
}
