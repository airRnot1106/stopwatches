import { Button } from '@/components/ui/button';
import { Timer } from 'lucide-react';

type StopwatchStartButtonPresentationalProps = {
  onClick: () => void;
};

const StopwatchStartButtonPresentational = ({
  onClick: handleClick,
}: StopwatchStartButtonPresentationalProps) => {
  return (
    <Button className="space-x-1" onClick={handleClick}>
      <Timer />
      <p>Start</p>
    </Button>
  );
};

type StopwatchStartButtonProps = {
  onClick: () => void;
};

export const StopwatchStartButton = ({
  onClick: handleClick,
}: StopwatchStartButtonProps) => {
  return <StopwatchStartButtonPresentational onClick={handleClick} />;
};
