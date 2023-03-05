import { useFarmStore } from "../App";
import { AnimalType } from "./Animal";
import { FarmState } from "./Farm";

type CounterProps = {
  state: FarmState;
};
export const Counter = () => {
  console.log("Counter render");
  return (
    <div className="flex flex-col space-y-2 border-2 rounded border-slate-300 p-2">
      <CountDisplay type="chicken" />
      <CountDisplay type="cow" />
      <CountDisplay type="monkey" />
      <CountDisplay type="sheep" />
      <CountDisplay type="toad" />
    </div>
  );
};

const CountDisplay = ({ type }: { type: AnimalType }) => {
  const title = type.charAt(0).toUpperCase() + type.slice(1);
  const count = useFarmStore((state) => state[type]);
  console.log("CountDisplay render", type);
  return (
    <h1 className="text-xl">
      {title} - {count}
    </h1>
  );
};
