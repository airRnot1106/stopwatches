'use client';

import { useStopwatch } from 'react-timer-hook';
import type { Stopwatch } from '../../type';
import { StopwatchPauseButton } from '../atoms/StopwatchPauseButton';
import { StopwatchRemoveButton } from '../atoms/StopwatchRemoveButton';
import { StopwatchResetButton } from '../atoms/StopwatchResetButton';
import { StopwatchStartButton } from '../atoms/StopwatchStartButton';

type StopwatchFieldPresentationalProps = {
  hours: number;
  minutes: number;
  seconds: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
  onRemove: () => void;
};

const StopwatchFieldPresentational = ({
  hours,
  minutes,
  seconds,
  start,
  pause,
  reset,
  onRemove: handleRemove,
}: StopwatchFieldPresentationalProps) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-4">
      <div className="place-self-center text-6xl font-bold">
        <span>{`${hours}`.padStart(2, '0')}</span>:
        <span>{`${minutes}`.padStart(2, '0')}</span>:
        <span>{`${seconds}`.padStart(2, '0')}</span>
      </div>
      <div className="place-self-center space-x-2">
        <StopwatchStartButton onClick={start} />
        <StopwatchPauseButton onClick={pause} />
        <StopwatchResetButton onClick={reset} />
        <StopwatchRemoveButton onClick={handleRemove} />
      </div>
    </div>
  );
};

type StopwatchFieldProps = {
  id: Stopwatch['id'];
  onRemove: (id: Stopwatch['id']) => void;
};

export const StopwatchField = ({ id, onRemove }: StopwatchFieldProps) => {
  const { hours, minutes, seconds, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <StopwatchFieldPresentational
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      start={start}
      pause={pause}
      reset={() => reset(new Date(), false)}
      onRemove={handleRemove}
    />
  );
};
