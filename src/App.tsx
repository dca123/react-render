import { useState } from "react";
import "./App.css";
import { AnimalType } from "./components/Animal";
import { Controls } from "./components/Controls";
import { Counter } from "./components/Counter";
import { Farm } from "./components/Farm";

const Header = () => {
  console.log("Header render");
  return <h1 className="text-3xl text-center font-light">Farm Manager</h1>;
};

const useFarm = () => {
  const [farm, setFarm] = useState<Record<AnimalType, number>>({
    chicken: 0,
    cow: 0,
    monkey: 0,
    sheep: 0,
    toad: 0,
  });

  const addAnimal = (type: AnimalType) => {
    setFarm((farm) => ({ ...farm, [type]: farm[type] + 1 }));
  };

  const removeAnimal = (type: AnimalType) => {
    setFarm((farm) => ({ ...farm, [type]: farm[type] - 1 }));
  };

  return { farm, addAnimal, removeAnimal };
};

function App() {
  console.log("App render");

  const { farm, addAnimal, removeAnimal } = useFarm();
  return (
    <main className="mt-8">
      <Header />
      <div className="flex space-x-4 mt-4">
        <div className="flex flex-col space-y-4">
          <h1 className="text-xl font-light">Controls</h1>
          <Controls addAnimal={addAnimal} removeAnimal={removeAnimal} />
        </div>
        <div className="flex flex-col w-full h-full space-y-4">
          <h1 className="text-xl font-light">Farm</h1>
          <Farm farmState={farm} />
        </div>
        <div className="flex flex-col w-full h-full space-y-4">
          <h1 className="text-xl font-light">Count</h1>
          <Counter state={farm} />
        </div>
      </div>
    </main>
  );
}

export default App;
