import type { Stopwatch } from '../../type';
import { StopwatchField } from './StopwatchField';

type StopwatchListPresentationalProps = {
  stopwatches: Stopwatch[];
  onRemove: (id: Stopwatch['id']) => void;
};

const StopwatchListPresentational = ({
  stopwatches,
  onRemove: handleRemove,
}: StopwatchListPresentationalProps) => {
  return (
    <div className="space-y-6">
      {stopwatches.map((stopwatch) => (
        <div key={stopwatch.id} className="p-8 rounded-xl shadow">
          <StopwatchField id={stopwatch.id} onRemove={handleRemove} />
        </div>
      ))}
    </div>
  );
};

type StopwatchListProps = {
  stopwatches: Stopwatch[];
  onRemove: (id: Stopwatch['id']) => void;
};

export const StopwatchList = ({
  stopwatches,
  onRemove: handleRemove,
}: StopwatchListProps) => {
  return (
    <StopwatchListPresentational
      stopwatches={stopwatches}
      onRemove={handleRemove}
    />
  );
};
