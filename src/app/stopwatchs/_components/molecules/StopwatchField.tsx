import { Button } from "@/components/ui/button";

const StopwatchFieldPresentational = () => {
  return (
    <div>
      <div>0</div>
      <div>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
};

export const StopwatchField = () => {
  return <StopwatchFieldPresentational />;
};
