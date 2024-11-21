import { useEffect, useState } from "react";
import FrontCard from "../FrontCard/FrontCard";

type Card = {
  image: string;
  name: string;
  order: string;
};
const DIFFICULTY = 10;
export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);

  function getRandomCharacterIndex(array: Card[]): number {
    return Math.floor(Math.random() * array.length);
  }
  function getCards(array: Card[], difficulty: number): Card[] {
    const randomIndex = getRandomIndex(array, difficulty);
    const randomItems = getRandomItems(array, randomIndex);
    return shuffle(randomItems);
  }

  function shuffle(array: Card[]) {
    return array
      .map((item) => ({ index: Math.random(), value: item }))
      .sort((a, b) => a.index - b.index)
      .map((item) => item.value);
  }

  function getRandomIndex(array: Card[], size: number): number[] {
    const indexes = new Set<number>();

    while (indexes.size !== size) {
      indexes.add(getRandomCharacterIndex(array));
    }

    return Array.from(indexes);
  }
  function getRandomItems(array: Card[], index: number[]): Card[] {
    const result = array.filter((item) =>
      index.includes(Number.parseInt(item.order, 10)),
    );
    return [...result, ...result];
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

  return <FrontCard initialCards={cards} />;
}
