import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

type StopwatchAddButtonPresentationalProps = {
  onClick: () => void;
};

const StopwatchAddButtonPresentational = ({
  onClick: handleClick,
}: StopwatchAddButtonPresentationalProps) => {
  return (
    <Button
      className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
      onClick={handleClick}
    >
      <Plus className="h-10 w-10 text-gray-50 dark:text-gray-900" />
    </Button>
  );
};

type StopwatchAddButtonProps = {
  onClick: () => void;
};

export const StopwatchAddButton = ({
  onClick: handleClick,
}: StopwatchAddButtonProps) => {
  return <StopwatchAddButtonPresentational onClick={handleClick} />;
};
