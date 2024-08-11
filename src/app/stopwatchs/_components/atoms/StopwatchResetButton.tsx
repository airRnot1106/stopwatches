import { Button } from "@/components/ui/button";
import { TimerReset } from "lucide-react";

const StopwatchResetButtonPresentational = () => {
  return (
    <Button className="space-x-1">
      <TimerReset />
      <p>Reset</p>
    </Button>
  );
};

export const StopwatchResetButton = () => {
  return <StopwatchResetButtonPresentational />;
};
