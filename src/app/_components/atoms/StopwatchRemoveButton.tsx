import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

type StopwatchRemoveButtonPresentationalProps = {
  onClick: () => void;
};

const StopwatchRemoveButtonPresentational = ({
  onClick: handleClick,
}: StopwatchRemoveButtonPresentationalProps) => {
  return (
    <Button className="space-x-1" onClick={handleClick}>
      <Trash2 />
      <p>Remove</p>
    </Button>
  );
};

type StopwatchRemoveButtonProps = {
  onClick: () => void;
};

export const StopwatchRemoveButton = ({
  onClick: handleClick,
}: StopwatchRemoveButtonProps) => {
  return <StopwatchRemoveButtonPresentational onClick={handleClick} />;
};
