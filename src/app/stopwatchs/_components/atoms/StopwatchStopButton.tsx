import { Button } from "@/components/ui/button";
import { CirclePause } from "lucide-react";

const StopwatchStopButtonPresentational = () => {
  return (
    <Button className="space-x-1">
      <CirclePause />
      <p>Stop</p>
    </Button>
  );
};

export const StopwatchStopButton = () => {
  return <StopwatchStopButtonPresentational />;
};
