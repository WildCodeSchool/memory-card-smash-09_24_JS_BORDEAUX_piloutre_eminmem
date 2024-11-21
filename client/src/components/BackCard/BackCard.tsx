/* import { useState } from "react";
import "./BackCards.css";

interface ImageCard {
  name: string;
  order: string;
  description: string;
}

interface BackCardsProps {
  initialCards: ImageCard[];
}

export default function BackCards({ initialCards }: BackCardsProps) {
  const [imageCard] = useState<ImageCard[]>(initialCards);

  return (
    <main className="gridCard">
      {imageCard.length > 0 ? (
        imageCard.map((char) => (
          <section className="card" key={char.order}>
            <h3>{char.name}</h3>
            <p>{char.description}</p>
          </section>
        ))
      ) : (
        <p>No cards available</p>
      )}
    </main>
  );
} */
