import chicken from "../assets/chicken.gif";
import sheep from "../assets/sheep.gif";
import cow from "../assets/cow.gif";
import monkey from "../assets/monkey.gif";
import toad from "../assets/toad.gif";

export type AnimalType = "chicken" | "cow" | "sheep" | "monkey" | "toad";
type AnimalProps = {
  type: AnimalType;
};

const animalMap = {
  chicken,
  cow,
  sheep,
  monkey,
  toad,
};

export const Animal = ({ type }: AnimalProps) => {
  const animal = animalMap[type];

  return (
    <div>
      <img src={animal} width={32} />
    </div>
  );
};
