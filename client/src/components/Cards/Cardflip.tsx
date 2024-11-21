import { useEffect, useState } from "react";
import type { KeyboardEvent } from "react";
import Modal from "react-accessible-modals";
import "../Description/description.css";
import "../FrontCard/FrontCard.css";

interface ImageCard {
  image: string;
  name: string;
  order: string;
  description: string;
  isRotated: boolean;
}

export default function FlipCard() {
  const [imageCard, setImageCard] = useState<ImageCard[]>([]);
  const [selectedCard, setSelectCard] = useState<ImageCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/smashArray`)
      .then((response) => response.json())
      .then((data) => setImageCard(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const openModal = (card: ImageCard) => {
    setSelectCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectCard(null);
    setIsModalOpen(false);
  };

  const handleKeyPress = (
    event: KeyboardEvent<HTMLElement>,
    card: ImageCard,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(card);
    }
  };

  return (
    <div className="gridcard">
      {imageCard.map((card) => (
        <article
          key={card.order}
          className="card"
          onClick={() => openModal(card)}
          onKeyUp={(event) => handleKeyPress(event, card)}
        >
          <img src={`${import.meta.env.VITE_API_URL}${card.image}`} alt="" />
          <figcaption>{card.name}</figcaption>
        </article>
      ))}
      {isModalOpen && selectedCard && (
        <section className="container-modal">
          <Modal
            className="modal"
            isOpen={isModalOpen}
            onClose={closeModal}
            modalTitle={selectedCard.name}
          >
            <h2 tabIndex={-1}>{selectedCard.name}</h2>
            <img
              src={`${import.meta.env.VITE_API_URL}${selectedCard.image}`}
              alt=""
            />
            <p>{selectedCard.description}</p>
          </Modal>
        </section>
      )}
    </div>
  );
}
