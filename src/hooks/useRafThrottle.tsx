import { rafThrottle } from '@/utils/rafThrottle';
import { useMemo, useEffect } from 'react';
import { useEventCallback } from './useEventCallback';

export function useRafThrottle<Fn extends (...args: any[]) => any>(fn: Fn) {
  const memoizedFn = useEventCallback(fn);

  const throttledFn = useMemo(
    () =>
      rafThrottle((...args: Parameters<Fn>) => {
        memoizedFn(...args);
      }),
    []
  );

  useEffect(
    () => () => {
      throttledFn.cancel();
    },
    [throttledFn]
  );

  return throttledFn;
}
