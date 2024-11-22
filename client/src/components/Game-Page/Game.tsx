import { useEffect, useState } from "react";
import "./Game.css";
import GameCard from "./GameCard";
import { getCards } from "./logic";

export type Card = {
  image: string;
  name: string;
  order: string;
};

const DIFFICULTY = 18;

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);

  function loadImages() {
    fetch(`${import.meta.env.VITE_API_URL}api/smashArray`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json();
      })
      .then((data: Card[]) => {
        const randomCards = getCards(data, DIFFICULTY);
        setCards(randomCards);
      });
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <main className="gridcardGame">
      {cards.length > 0 ? (
        cards.map((char, index) => (
          <GameCard key={`${char.order}-${index}`} index={index} char={char} />
        ))
      ) : (
        <p>No cards available</p>
      )}
    </main>
  );
}
