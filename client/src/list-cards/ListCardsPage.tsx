import { useLoaderData } from "react-router-dom";
import type { Card } from "./card.type";
import ListCards from "./ListCards";

export default function ListCardsPage() {
  const cards: Card[] = useLoaderData() as Card[];
  return <ListCards cards={cards} />;
}
