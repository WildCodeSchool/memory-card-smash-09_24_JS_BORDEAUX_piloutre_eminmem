import { useState } from "react";
import { Card } from "./Game";

interface GameCardProps {
  index: number;
  char: Card;
}

export default function GameCard({ index, char }: GameCardProps) {
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  function flipCard(index: number) {
    console.log(index);
    setIsCardFlipped(!isCardFlipped);
  }
  return (
    <figure className="gameCards" key={`${char.order}-${index}`}>
      <img
        src={`${import.meta.env.VITE_API_URL}${char.image}`}
        alt={char.name}
        onClick={() => flipCard(index)}
      />
      {isCardFlipped ? (
        <img
          onClick={() => flipCard(index)}
          className="background-card-flipped"
          src="/logo-smash.png"
          alt="Dos de l'image omg"
        />
      ) : null}
    </figure>
  );
}
