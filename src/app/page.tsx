'use client';

import { useState } from 'react';
import { StopwatchAddButton } from './_components/atoms/StopwatchAddButton';
import { StopwatchList } from './_components/molecules/StopwatchList';
import type { Stopwatch } from './type';

export default function Stopwatchs() {
  const [stopwatches, setStopwatches] = useState<Stopwatch[]>([
    { id: crypto.randomUUID() },
  ]);

  const handleAddStopwatch = () => {
    const id = crypto.randomUUID();
    setStopwatches([...stopwatches, { id }]);
  };

  const handleRemoveStopwatch = (id: Stopwatch['id']) => {
    setStopwatches(stopwatches.filter((stopwatch) => stopwatch.id !== id));
  };

  return (
    <div>
      <div>
        <StopwatchList
          stopwatches={stopwatches}
          onRemove={handleRemoveStopwatch}
        />
      </div>
      <div className="fixed bottom-10 right-10">
        <StopwatchAddButton onClick={handleAddStopwatch} />
      </div>
    </div>
  );
}
