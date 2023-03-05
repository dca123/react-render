import { useFarmStore } from "../App";
import { AnimalType } from "./Animal";

export const Controls = () => {
  console.log("Controls render");
  const addAnimal = useFarmStore((state) => state.increaseAnimal);
  const removeAnimal = useFarmStore((state) => state.decreaseAnimal);
  return (
    <>
      <Control
        type="chicken"
        add={() => addAnimal("chicken")}
        remove={() => removeAnimal("chicken")}
      />
      <Control
        type="cow"
        add={() => addAnimal("cow")}
        remove={() => removeAnimal("cow")}
      />
      <Control
        type="monkey"
        add={() => addAnimal("monkey")}
        remove={() => removeAnimal("monkey")}
      />
      <Control
        type="sheep"
        add={() => addAnimal("sheep")}
        remove={() => removeAnimal("sheep")}
      />
      <Control
        type="toad"
        add={() => addAnimal("toad")}
        remove={() => removeAnimal("toad")}
      />
    </>
  );
};

const Control = ({
  type,
  add,
  remove,
}: {
  type: AnimalType;
  add: () => void;
  remove: () => void;
}) => {
  const title = type.charAt(0).toUpperCase() + type.slice(1);
  console.log("Control render", type);
  return (
    <div className="flex space-x-4 items-center border-2 p-2 rounded border-slate-300">
      <p className="text-xl">{title}</p>
      <button className="px-6 bg-slate-600 rounded text-slate-50" onClick={add}>
        {" "}
        +{" "}
      </button>
      <button
        className="px-6 bg-slate-600 rounded text-slate-50"
        onClick={remove}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
};
