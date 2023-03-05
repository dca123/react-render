import { useFarm } from "../App";
import { Animal, AnimalType } from "./Animal";

export type FarmState = Record<AnimalType, number>;

export const Farm = () => {
  console.log("Farm render");

  return (
    <div className="border-2 border-dashed p-2 border-slate-300 rounded flex flex-col space-y-4">
      <AnimalPen type="chicken" />
      <AnimalPen type="cow" />
      <AnimalPen type="monkey" />
      <AnimalPen type="sheep" />
      <AnimalPen type="toad" />
    </div>
  );
};

const AnimalPen = ({ type }: { type: AnimalType }) => {
  console.log("AnimalPen render", type);
  const { farm } = useFarm();
  const count = farm[type];
  const animals = Array.from({ length: count }, (_, i) => (
    <Animal key={i} type={type} />
  ));
  const title = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div>
      <h1 className="font-bold text-lg">{title} Pen</h1>
      <div className="border-2  p-2 border-slate-300 rounded flex space-x-2 flex-wrap">
        {count > 0 ? (
          animals
        ) : (
          <p className="text-slate-400 text-sm">No {type}s</p>
        )}
      </div>
    </div>
  );
};
