'use client';

import { useSearchParamsState } from '@/hooks/useSearchParamsState';

const PARAM_NAME = 'name';

export default function UseSearchParamsStateExample() {
  const [value, setValue] = useSearchParamsState({
    name: PARAM_NAME,
    deserialize: (v) => v || '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setValue(value);
  };

  return (
    <div>
      <input value={value} onChange={onChange} placeholder="Name" />
    </div>
  );
}
