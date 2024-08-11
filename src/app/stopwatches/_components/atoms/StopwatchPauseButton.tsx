import { Button } from '@/components/ui/button';
import { CirclePause } from 'lucide-react';

type StopwatchPauseButtonPresentationalProps = {
  onClick: () => void;
};

const StopwatchPauseButtonPresentational = ({
  onClick: handleClick,
}: StopwatchPauseButtonPresentationalProps) => {
  return (
    <Button className="space-x-1" onClick={handleClick}>
      <CirclePause />
      <p>Pause</p>
    </Button>
  );
};

type StopwatchPauseButtonProps = {
  onClick: () => void;
};

export const StopwatchPauseButton = ({
  onClick: handleClick,
}: StopwatchPauseButtonProps) => {
  return <StopwatchPauseButtonPresentational onClick={handleClick} />;
};
