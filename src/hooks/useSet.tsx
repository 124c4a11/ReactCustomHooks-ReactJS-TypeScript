import { useReducer, useMemo } from 'react';
import { isFunction } from '@/utils/isFunction';

export function useSet<Value>(
  initialItems?: Iterable<Value> | (() => Iterable<Value>)
) {
  const [version, updateVersion] = useReducer((v) => v + 1, 0);

  const set = useMemo(() => {
    const entries = isFunction(initialItems) ? initialItems() : initialItems;

    return new Set(entries);
  }, []);

  const reactSet = useMemo(() => {
    const actualSet = {
      has(value: Value) {
        return set.has(value);
      },

      add(value: Value) {
        set.add(value);
        updateVersion();
        return actualSet;
      },

      delete(value: Value) {
        updateVersion();
        return set.delete(value);
      },

      clear() {
        updateVersion();
        set.clear();
      },

      forEach(cb: (item: Value) => void) {
        set.forEach(cb);
      },

      get size() {
        return set.size;
      },
    };

    return actualSet;
  }, [set, version]);

  return reactSet;
}
