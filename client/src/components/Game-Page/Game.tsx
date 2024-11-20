// import { useEffect, useState } from "react";

// type Card = {
//   image: string;
//   name: string;
//   order: string;
// };

// export default function MemoryGame() {
//   const [card, setCards] = useState<Card[]>([]);

//   function getRandomCharacterIndex(array: Card[]): number {
//     return Math.floor(Math.random() * array.length);
//   }

//   function getRandomItems(array: Card[], size: number): Card[] {
//     const indexes = new Set<number>();

//     while (indexes.size !== size) {
//       indexes.add(getRandomCharacterIndex(array));
//     }

//     return Array.from(indexes).map((i) => array[i]);
//   }
//   function loadImages() {
//     fetch(`${import.meta.env.VITE_API_URL}api/smashArray`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Erreur HTTP : ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data: Card[]) => {
//         const randomCards = getRandomItems(data, 10);
//         setCards(randomCards);
//       });
//   }

//   useEffect(() => {
//     loadImages();
//   });
// }
