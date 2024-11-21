import "./FrontCard.css";
import "../Description/description.css";

interface ImageCard {
  image: string;
  name: string;
  order: string;
}

interface FrontCardProps {
  initialCards: ImageCard[];
}

export default function FrontCard({ initialCards }: FrontCardProps) {
  return (
    <main className="gridcard">
      {initialCards.length > 0 ? (
        initialCards.map((char) => (
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
