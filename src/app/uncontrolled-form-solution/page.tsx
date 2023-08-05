'use client';

import { useLatest } from '@/hooks/useLatest';
import { memo, useCallback, useState } from 'react';

export default function UncontrolledFormSolutionPage() {
  const [state1, setState1] = useState('');
  const [state2, setState2] = useState('');

  // Solution
  const stateRef = useLatest({ state1, state2 });

  const handleSubmit = useCallback(() => {
    console.log('handleSubmit');
    sendSomeRequest({
      state1: stateRef.current.state1,
      state2: stateRef.current.state2,
    });
  }, [stateRef]);

  return (
    <>
      <h1>Uncontrolled Form Solution</h1>
      <p>Look at the console</p>

      <UncontrolledForm
        onState1Change={setState1}
        onState2Change={setState2}
        onSubmit={handleSubmit}
      />
    </>
  );
}

interface UncontrolledFormProps {
  onSubmit: (event: React.FormEvent) => void;
  onState1Change: (value: string) => void;
  onState2Change: (value: string) => void;
}

const UncontrolledForm = memo(function UncontrolledForm({
  onSubmit,
  onState1Change,
  onState2Change,
}: UncontrolledFormProps) {
  console.log('render');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => onState1Change(e.target.value)} />
      <input type="text" onChange={(e) => onState2Change(e.target.value)} />
      <button>Submit</button>
    </form>
  );
});

function sendSomeRequest({
  state1,
  state2,
}: {
  state1: string;
  state2: string;
}) {
  console.log({ state1, state2 });
}
