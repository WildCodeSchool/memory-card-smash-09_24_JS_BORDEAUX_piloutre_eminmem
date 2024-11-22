import { useEffect, useState } from "react";
import "./Game.css";
import GameCard from "./GameCard";

export type Card = {
  image: string;
  name: string;
  order: string;
};

const DIFFICULTY = 18;

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);

  function getRandomCharacterIndex(array: Card[]): number {
    return Math.floor(Math.random() * array.length);
  }

  function getRandomIndex(array: Card[], pairCount: number): number[] {
    const indexes = new Set<number>();

    while (indexes.size < pairCount) {
      indexes.add(getRandomCharacterIndex(array));
    }

    return Array.from(indexes);
  }

  function getRandomItems(array: Card[], indexes: number[]): Card[] {
    const result = indexes.map((index) => array[index]);
    return [...result, ...result];
  }

  function shuffle(array: Card[]) {
    return array
      .map((item) => ({ index: Math.random(), value: item }))
      .sort((a, b) => a.index - b.index)
      .map((item) => item.value);
  }

  function getCards(array: Card[], totalCards: number): Card[] {
    const pairCount = totalCards / 2;
    const randomIndexes = getRandomIndex(array, pairCount);
    const randomItems = getRandomItems(array, randomIndexes);
    return shuffle(randomItems);
  }

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
