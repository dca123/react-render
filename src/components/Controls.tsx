import { animalAtomMap, useFarmAnimal } from "../App";
import { AnimalType } from "./Animal";
import { useSetAtom } from "jotai";

type ControlProps = {
  addAnimal: (type: AnimalType) => void;
  removeAnimal: (type: AnimalType) => void;
};
export const Controls = () => {
  console.log("Controls render");
  return (
    <>
      <Control type="chicken" />
      <Control type="cow" />
      <Control type="monkey" />
      <Control type="sheep" />
      <Control type="toad" />
    </>
  );
};

const Control = ({ type }: { type: AnimalType }) => {
  const title = type.charAt(0).toUpperCase() + type.slice(1);
  const setCount = useSetAtom(animalAtomMap[type]);
  const addAnimal = () => {
    setCount((count) => count + 1);
  };
  const removeAnimal = () => {
    setCount((count) => count - 1);
  };
  console.log("Control render", type);
  return (
    <div className="flex space-x-4 items-center border-2 p-2 rounded border-slate-300">
      <p className="text-xl">{title}</p>
      <button
        className="px-6 bg-slate-600 rounded text-slate-50"
        onClick={() => addAnimal()}
      >
        {" "}
        +{" "}
      </button>
      <button
        className="px-6 bg-slate-600 rounded text-slate-50"
        onClick={() => removeAnimal()}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
};
