'use client';

import { forwardRef, useRef, useEffect } from 'react';
import { useCombinedRef } from '@/hooks/useCombinedRef';

interface InputProps {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = forwardRef(function Input(
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const combinedInputRef = useCombinedRef(ref, inputRef);

  useEffect(() => {
    if (!inputRef.current) return;

    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  return <input {...props} ref={combinedInputRef} />;
});

export default function UseCombinedRefExamplePage() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <h1>useCombinedRef example</h1>
      <p>Look at the console and click the focus button!</p>

      <Input ref={inputRef} />
      <button onClick={onFocus}>Focus</button>
    </>
  );
}
