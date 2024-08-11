import { Button } from '@/components/ui/button';
import { TimerReset } from 'lucide-react';

type StopwatchResetButtonPresentationalProps = {
  onClick: () => void;
};

const StopwatchResetButtonPresentational = ({
  onClick: handleClick,
}: StopwatchResetButtonPresentationalProps) => {
  return (
    <Button className="space-x-1" onClick={handleClick}>
      <TimerReset />
      <p>Reset</p>
    </Button>
  );
};

type StopwatchResetButtonProps = {
  onClick: () => void;
};

export const StopwatchResetButton = ({
  onClick: handleClick,
}: StopwatchResetButtonProps) => {
  return <StopwatchResetButtonPresentational onClick={handleClick} />;
};
