import { useEffect, useState } from "react";
import type { KeyboardEvent } from "react";
import BackCards from "../BackCard/BackCard";
import FrontCard from "../FrontCard/FrontCard";
import "./Card.css";

interface ImageCard {
  image: string;
  name: string;
  order: string;
  description: string;
  isRotated: boolean;
}

export default function FlipCard() {
  const [imageCard, setImageCard] = useState<ImageCard[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api/smashArray`)
      .then((response) => response.json())
      .then((data) =>
        setImageCard(
          data.map((card: Omit<ImageCard, "isRotated">) => ({
            ...card,
            isRotated: false,
          })),
        ),
      )
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  }, []);

  const handleCardClick = (order: string) => {
    setImageCard((prevCards) =>
      prevCards.map((card) =>
        card.order === order ? { ...card, isRotated: !card.isRotated } : card,
      ),
    );
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLElement>, order: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick(order);
    }
  };

  return (
    <div className="gridcard">
      {imageCard.map((card) => (
        <article
          key={card.order}
          className={`${card.isRotated ? "flipped" : ""}`}
          onClick={() => handleCardClick(card.order)}
          onKeyUp={(event) => handleKeyPress(event, card.order)}
        >
          {card.isRotated ? (
            <BackCards initialCards={[card]} />
          ) : (
            <FrontCard initialCards={[card]} />
          )}
        </article>
      ))}
    </div>
  );
}
