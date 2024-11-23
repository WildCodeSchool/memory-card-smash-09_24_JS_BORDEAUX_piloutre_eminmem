export const ListCardsLoader = () => {
    return fetch(`${import.meta.env.VITE_API_URL}api/smashArray`).then(
        (response) => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.json();
        },
    );
};