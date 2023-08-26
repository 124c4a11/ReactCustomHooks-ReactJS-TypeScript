import { debounce } from '@/utils/debounce';
import { useMemo, useEffect } from 'react';
import { useEventCallback } from './useEventCallback';

export function useDebounce<Fn extends (...args: any[]) => any>(
  fn: Fn,
  ms: number
) {
  const memoizedFn = useEventCallback(fn);

  const debouncedFn = useMemo(
    () =>
      debounce((...args: Parameters<Fn>) => {
        memoizedFn(...args);
      }, ms),
    [ms]
  );

  useEffect(
    () => () => {
      debouncedFn.cancel();
    },
    [debouncedFn]
  );

  return debouncedFn;
}
