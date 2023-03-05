import "./App.css";
import { Animal, AnimalType } from "./components/Animal";

const Header = () => {
  console.log("Header render");
  return <h1 className="text-3xl text-center font-light">Farm Manager</h1>;
};

const Control = ({ type }: { type: AnimalType }) => {
  const title = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="flex space-x-4 items-center border-2 p-2 rounded border-slate-300">
      <p className="text-xl">{title}</p>
      <button className="px-6 bg-slate-600 rounded text-slate-50"> + </button>
      <button className="px-6 bg-slate-600 rounded text-slate-50"> - </button>
    </div>
  );
};

function App() {
  console.log("App render");
  return (
    <main className="mt-8">
      <Header />
      <div className="flex justify-between">
        <div className="flex flex-col space-y-4">
          <h1 className="text-xl font-light">Controls</h1>
          <Control type="chicken" />
          <Control type="cow" />
          <Control type="monkey" />
          <Control type="sheep" />
          <Control type="toad" />
        </div>
        <div>
          <Animal type="chicken" />
          <Animal type="cow" />
        </div>
      </div>
    </main>
  );
}

export default App;
