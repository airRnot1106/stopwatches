import { Button } from "@/components/ui/button";
import { CirclePause } from "lucide-react";

type StopwatchStopButtonPresentationalProps = {
  onClick: () => void;
};

const StopwatchStopButtonPresentational = ({
  onClick: handleClick,
}: StopwatchStopButtonPresentationalProps) => {
  return (
    <Button className="space-x-1" onClick={handleClick}>
      <CirclePause />
      <p>Stop</p>
    </Button>
  );
};

type StopwatchStopButtonProps = {
  onClick: () => void;
};

export const StopwatchStopButton = ({
  onClick: handleClick,
}: StopwatchStopButtonProps) => {
  return <StopwatchStopButtonPresentational onClick={handleClick} />;
};
