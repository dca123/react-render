import { AnimalType } from "./Animal";
import { FarmState } from "./Farm";

type CounterProps = {
  state: FarmState;
};
export const Counter = ({ state }: CounterProps) => {
  const { chicken, cow, monkey, sheep, toad } = state;
  console.log("Counter render");
  return (
    <div className="flex flex-col space-y-2 border-2 rounded border-slate-300 p-2">
      <CountDisplay type="chicken" count={chicken} />
      <CountDisplay type="cow" count={cow} />
      <CountDisplay type="monkey" count={monkey} />
      <CountDisplay type="sheep" count={sheep} />
      <CountDisplay type="toad" count={toad} />
    </div>
  );
};

const CountDisplay = ({ type, count }: { type: AnimalType; count: number }) => {
  const title = type.charAt(0).toUpperCase() + type.slice(1);
  console.log("CountDisplay render", type);
  return (
    <h1 className="text-xl">
      {title} - {count}
    </h1>
  );
};
