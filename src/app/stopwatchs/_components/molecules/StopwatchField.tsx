'use client';

import { useStopwatch } from 'react-timer-hook';
import { StopwatchPauseButton } from '../atoms/StopwatchPauseButton';
import { StopwatchResetButton } from '../atoms/StopwatchResetButton';
import { StopwatchStartButton } from '../atoms/StopwatchStartButton';

type StopwatchFieldPresentationalProps = {
  hours: number;
  minutes: number;
  seconds: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
};

const StopwatchFieldPresentational = ({
  hours,
  minutes,
  seconds,
  start,
  pause,
  reset,
}: StopwatchFieldPresentationalProps) => {
  return (
    <div>
      <div>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div>
        <StopwatchStartButton onClick={start} />
        <StopwatchPauseButton onClick={pause} />
        <StopwatchResetButton onClick={reset} />
      </div>
    </div>
  );
};

export const StopwatchField = () => {
  const { hours, minutes, seconds, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  const handleReset = () => {
    reset();
    pause();
  };

  return (
    <StopwatchFieldPresentational
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      start={start}
      pause={pause}
      reset={handleReset}
    />
  );
};
