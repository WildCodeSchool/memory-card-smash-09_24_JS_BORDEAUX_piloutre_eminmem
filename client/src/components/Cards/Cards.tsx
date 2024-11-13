import { cloneElement, useEffect, useState } from "react";
interface ImageCard {
  image: string;
  name: string;
  order: string;
}
export default function SmashCards() {
  const [imageCard, setImageCard] = useState<ImageCard[]>([]);
  const duplicate = cloneElement(
    <main>
      {imageCard.length > 0 ? (
        imageCard.map((char) => (
          <figure key={char.order}>
            <img
              src={`${import.meta.env.VITE_API_URL}${char.image}`}
              alt={`${char.name}`}
            />
            <section className="text-container">
              <figcaption>{char.name}</figcaption>
            </section>
          </figure>
        ))
      ) : (
        <p>Chargement des membres de l'équipe...</p>
      )}
    </main>,
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/smashArray`)
      .then((response) => response.json())
      .then((data) => setImageCard(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  }, []);

  return <>{[0, 1].map((index) => cloneElement(duplicate, { key: index }))}</>;
}
