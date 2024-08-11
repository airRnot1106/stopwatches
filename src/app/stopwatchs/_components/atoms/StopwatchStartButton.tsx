import { Button } from "@/components/ui/button";
import { Timer } from "lucide-react";

const StopwatchStartButtonPresentational = () => {
  return (
    <Button className="space-x-1">
      <Timer />
      <p>Start</p>
    </Button>
  );
};

export const StopwatchStartButton = () => {
  return <StopwatchStartButtonPresentational />;
};
