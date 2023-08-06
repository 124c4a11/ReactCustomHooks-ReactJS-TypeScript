'use client';

import { useIsMounted } from '@/hooks/useIsMounted';
import { useEffect, useState } from 'react';

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function UseIsMountedExamplePage() {
  const [items, setItems] = useState<TodoItem[]>([]);

  const isMounted = useIsMounted();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((items) => {
        if (!isMounted.current) return;

        setItems(items);
      });
  }, []);

  return (
    <>
      <h1>useIsMounted example</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
