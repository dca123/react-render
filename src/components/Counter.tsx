import { useFarmAnimal } from "../App";
import { AnimalType } from "./Animal";

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
  console.log("CountDisplay render", type);
  const { count } = useFarmAnimal(type);
  return (
    <h1 className="text-xl">
      {count} x {title}
    </h1>
  );
};
