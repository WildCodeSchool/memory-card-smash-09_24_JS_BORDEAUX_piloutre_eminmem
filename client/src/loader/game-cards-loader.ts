export const gameCardsLoader = () => {
  return fetch(`${import.meta.env.VITE_API_URL}api/smashArray`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
      return response.json();
    },
  );
};

// note : ce qui est écrit ci-dessus peut également être écrit ainsi :
export const gameCardsLoaderWithAwait = async () => {
  // le await remplace le .then() ; ça rend l'écriture + lisible mais il faut ajouter le mot clé "async" dans la signature de la fonction
  const response = await fetch(`${import.meta.env.VITE_API_URL}api/smashArray`);
  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }
  return response.json();
};
