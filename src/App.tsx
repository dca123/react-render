import { useState } from "react";
import "./App.css";
import { AnimalType } from "./components/Animal";
import { Controls } from "./components/Controls";
import { Counter } from "./components/Counter";
import { Farm } from "./components/Farm";
import { atom, useAtom } from "jotai";

const Header = () => {
  console.log("Header render");
  return <h1 className="text-3xl text-center font-light">Farm Manager</h1>;
};

const chickenAtom = atom(0);
const cowAtom = atom(0);
const monkeyAtom = atom(0);
const sheepAtom = atom(0);
const toadAtom = atom(0);

const farmAtom = atom(
  (get) => ({
    chicken: get(chickenAtom),
    cow: get(cowAtom),
    monkey: get(monkeyAtom),
    sheep: get(sheepAtom),
    toad: get(toadAtom),
  }),
  (get, set, update: Record<AnimalType, number>) => {
    if (update.chicken !== get(chickenAtom)) {
      set(chickenAtom, update.chicken);
    }
    if (update.cow !== get(cowAtom)) {
      set(cowAtom, update.cow);
    }
    if (update.monkey !== get(monkeyAtom)) {
      set(monkeyAtom, update.monkey);
    }
    if (update.sheep !== get(sheepAtom)) {
      set(sheepAtom, update.sheep);
    }
    if (update.toad !== get(toadAtom)) {
      set(toadAtom, update.toad);
    }
  }
);

export const useFarm = () => {
  const [farm, setFarm] = useAtom(farmAtom);
  const addAnimal = (type: AnimalType) => {
    setFarm({ ...farm, [type]: farm[type] + 1 });
  };

  const removeAnimal = (type: AnimalType) => {
    setFarm({ ...farm, [type]: farm[type] - 1 });
  };

  return { farm, addAnimal, removeAnimal };
};

function App() {
  console.log("App render");

  return (
    <main className="mt-8">
      <Header />
      <div className="flex space-x-4 mt-4">
        <div className="flex flex-col space-y-4">
          <h1 className="text-xl font-light">Controls</h1>
          <Controls />
        </div>
        <div className="flex flex-col w-full h-full space-y-4">
          <h1 className="text-xl font-light">Farm</h1>
          <Farm />
        </div>
        <div className="flex flex-col w-full h-full space-y-4">
          <h1 className="text-xl font-light">Count</h1>
          <Counter />
        </div>
      </div>
    </main>
  );
}

export default App;
