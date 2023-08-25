'use client';

import {
  useLocalStorage,
  useSessionStorage,
} from '@/hooks/useLocalAndSessionStorage';

export default function UseLocalSessionStorageExamplePage() {
  const [localValue, setLocalValue] = useLocalStorage('local-state', '');
  const [sessionValue, setSessionValue] = useSessionStorage(
    'session-state',
    ''
  );

  return (
    <div>
      <h2>Local value</h2>
      <input
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        type="text"
      />
      <h2>Session value</h2>
      <input
        value={sessionValue}
        onChange={(e) => setSessionValue(e.target.value)}
        type="text"
      />
    </div>
  );
}
