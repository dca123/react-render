import { useState } from "react";
import "./App.css";
import { AnimalType } from "./components/Animal";
import { Controls } from "./components/Controls";
import { Counter } from "./components/Counter";
import { Farm } from "./components/Farm";
import { create } from "zustand";

const Header = () => {
  console.log("Header render");
  return <h1 className="text-3xl text-center font-light">Farm Manager</h1>;
};

type FarmState = {
  chicken: number;
  cow: number;
  monkey: number;
  sheep: number;
  toad: number;
  increaseAnimal: (type: AnimalType) => void;
  decreaseAnimal: (type: AnimalType) => void;
};

export const useFarmStore = create<FarmState>((set) => ({
  chicken: 0,
  cow: 0,
  monkey: 0,
  sheep: 0,
  toad: 0,
  increaseAnimal: (type: AnimalType) =>
    set((state) => ({ [type]: state[type] + 1 })),
  decreaseAnimal: (type: AnimalType) =>
    set((state) => ({ [type]: state[type] - 1 })),
}));

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
