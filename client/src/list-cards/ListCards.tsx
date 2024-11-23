import CardDetails from "./Card";
import type { Card } from "./card.type";
import { getRandomCards } from "./randomize-cards";

export default function ListCards({ cards }: { cards: Card[] }) {

  const randomizedCards = getRandomCards(cards, 6);
  return (
    cards.map((card, index) => (
      <CardDetails key={index} card={card} />
    ))
  );
}
