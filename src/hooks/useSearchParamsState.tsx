import { useState } from 'react';
import { useEventCallback } from './useEventCallback';
import { isFunction } from '@/utils/isFunction';

function setSearchParam(search: string, param: string, value: string) {
  const searchParams = new URLSearchParams(search);
  searchParams.set(param, value);
  return searchParams.toString();
}

function getSearchParam(search: string, param: string) {
  const searchParams = new URLSearchParams(search);
  return searchParams.get(param);
}

const defaultSerialize = String;
const defaultDeserialize = <Value,>(v: string | null) => v as Value;

interface UseSearchParamsStateOptions<Value> {
  name: string;
  serialize?: (value: Value) => string;
  deserialize?: (value: string | null) => Value;
}

export function useSearchParamsState<Value>({
  name,
  serialize = defaultSerialize,
  deserialize = defaultDeserialize,
}: UseSearchParamsStateOptions<Value>) {
  const [value, setValue] = useState(() => {
    const initialValue = deserialize(getSearchParam(location.search, name));

    return initialValue;
  });

  const updateValue = useEventCallback(
    (newValue: React.SetStateAction<Value>) => {
      const search = window.location.search;
      const actualNewValue = isFunction(newValue) ? newValue(value) : newValue;

      setValue(actualNewValue);

      const newSearch = setSearchParam(search, name, serialize(actualNewValue));

      history.pushState(null, '', `?${newSearch}`);
    }
  );

  return [value, updateValue] as const;
}
