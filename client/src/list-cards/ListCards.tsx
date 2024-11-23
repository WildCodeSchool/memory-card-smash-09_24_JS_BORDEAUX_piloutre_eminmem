import CardDetails from "./Card";
import type { Card } from "./card.type";

export default function ListCards({ cards }: { cards: Card[] }) {
  return (
    cards.map((card, index) => (
      <CardDetails key={index} card={card} />
    ))
  );
}
