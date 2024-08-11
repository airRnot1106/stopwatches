import { StopwatchResetButton } from "./_components/atoms/StopwatchResetButton";
import { StopwatchStartButton } from "./_components/atoms/StopwatchStartButton";
import { StopwatchStopButton } from "./_components/atoms/StopwatchStopButton";

export default function Stopwatchs() {
  return (
    <div>
      <StopwatchStartButton />
      <StopwatchStopButton />
      <StopwatchResetButton />
    </div>
  );
}
