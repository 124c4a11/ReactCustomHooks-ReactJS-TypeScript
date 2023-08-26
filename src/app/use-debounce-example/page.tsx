'use client';

import { useDebounce } from '@/hooks/useDebounce';
import { useState, useRef } from 'react';

export default function UseDebounceExamplePage() {
  const [text, setText] = useState('');
  const isTextEdited = useRef(false);

  const saveText = useDebounce((text: string) => console.log(text), 500);

  const handleUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    isTextEdited.current = true;
    setText(e.target.value);
    saveText(e.target.value);
  };

  return (
    <>
      <h1>useDebounce example</h1>
      <p>Look at the console!</p>
      <textarea value={text} onChange={handleUpdate} rows={30} cols={80} />
    </>
  );
}
