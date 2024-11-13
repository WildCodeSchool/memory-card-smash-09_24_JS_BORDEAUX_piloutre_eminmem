import { useEffect, useState } from "react";
interface ImageCard {
  image: string;
  name: string;
  order: string;
}
export default function SmashCards() {
  const [imageCard, setImageCard] = useState<ImageCard[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/smashArray`)
      .then((response) => response.json())
      .then((data) => setImageCard(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  }, []);

  return (
    <>
      <main>
        {imageCard.length > 0 ? (
          imageCard.map((char) => (
            <article key={char.order}>
              <img
                src={`${import.meta.env.VITE_API_URL}${char.image}`}
                alt={`${char.name}`}
              />
              <section className="text-container">
                <h2>{char.name}</h2>
              </section>
            </article>
          ))
        ) : (
          <p>Chargement des membres de l'équipe...</p>
        )}
      </main>
    </>
  );
}
