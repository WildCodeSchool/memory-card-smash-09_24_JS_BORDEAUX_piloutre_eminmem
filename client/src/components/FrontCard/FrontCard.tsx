import { useState } from "react";
import "./FrontCard.css";

interface ImageCard {
  image: string;
  name: string;
  order: string;
}

interface FrontCardProps {
  initialCards: ImageCard[];
}

export default function FrontCard({ initialCards }: FrontCardProps) {
  const [imageCard] = useState<ImageCard[]>(initialCards);

  return (
    <main className="gridcard">
      {imageCard.length > 0 ? (
        imageCard.map((char) => (
          <figure className="card" key={char.order}>
            <img
              src={`${import.meta.env.VITE_API_URL}${char.image}`}
              alt={char.name}
            />
            <figcaption>{char.name}</figcaption>
          </figure>
        ))
      ) : (
        <p>No cards available</p>
      )}
    </main>
  );
}
