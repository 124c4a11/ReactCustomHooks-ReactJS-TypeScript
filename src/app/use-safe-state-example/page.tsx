'use client';

import { useSafeState } from '@/hooks/useSafeState';
import { useEffect } from 'react';

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function UseSafeStateExamplePage() {
  const [items, setItems] = useSafeState<TodoItem[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
