// import { useState, useEffect } from "react";
// import SmashCards from "../Cards/Cards";
// const [imageCard, setImageCard] = useState<CardType[]>([]);
// type CardType = {
//     image: string;
//     order: string;
//     id: string;
//     isFlipped: boolean;
//     isMatched: boolean;
// }
// export default function MemoryGame () {
//     const [cards, setCards] = useState<CardType[]>([]);
//     const [selectedCards, setSelectedCards] = useState<CardType[]>([]);
//     const [gameOver, setGameOver] = useState (false);
//     useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}api/smashArray`)
//           .then((response) => response.json())
//           .then((data) => {
//             const image = data.map ((char: {image: string})=> char.image);
//             const doubleImage = [...image, ...image];
//             const shuffledImage = doubleImage.sort(()=> Math.random ()-0.5);
//             setImageCard(shuffledImage)
//         })
//           .catch((error) =>
//             console.error("Erreur lors de la récupération des données :", error),
//           );
//       }, []);

// return (
//     <div className="memory-Game">
// {imageCard.map((image, index)=> (
//     <img key={index} src={image} alt={`Card ${index}`}/>
// ))}
//     </div>
// )
// }
// type CardType = {
//         image: string;
//         order: string;
//         id: string;
//     }
// import { useState, useEffect } from 'react';

// export default function MemoryGame() {
//     const [cards, setCards] = useState([]);

//     function shuffleArray(array) {
//         for (let i = array.length - 1; i >= 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//         return array;
//     }

//     useEffect(() => {
//         function fetchCards() {
//             fetch(`${import.meta.env.VITE_API_URL}api/smashArray`)
//                 .then(response => response.json())
//                 .then(data => {
//                     const shuffledCards = shuffleArray(data)
//                         .slice(0, 10)
//                         .map(card => ({
//                             order: card.order,
//                             image: card.image,
//                         }));
//                     setCards(shuffledCards);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching cards:', error);
//                 });
//         }

//         fetchCards();
//     }, [card]);

//     return (
//         <div>
//             {cards.map((card, cards) => (
//                 <div key={cards}>
//                     <p>Order: {card.order}</p>
//                     <img src={card.image}
//                 </div>
//             ))}
//         </div>
//     );
// }
