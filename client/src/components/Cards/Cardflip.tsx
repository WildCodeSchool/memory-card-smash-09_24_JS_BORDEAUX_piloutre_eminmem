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
  const [visibleImages, setVisibleImages] = useState<ImageCard[]>([]);
  const [selectedCard, setSelectCard] = useState<ImageCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const batchSize = 12;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api/smashArray`)
      .then((response) => response.json())
      .then((data) => {
        setImageCard(data);
        setVisibleImages(data.slice(0, batchSize));
      })
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

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 12
    ) {
      loadMoreImages();
    }
  };

  const loadMoreImages = () => {
    const currentCount = visibleImages.length;
    const nextBatch = imageCard.slice(currentCount, currentCount + batchSize);
    if (nextBatch.length > 0) {
      setVisibleImages((batch) => [...batch, ...nextBatch]);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleImages, imageCard]);

  return (
    <div className="gridcard">
      {visibleImages.map((card) => (
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
      {visibleImages.length < imageCard.length && (
        <button
          type="button"
          className="load-more-button"
          onClick={loadMoreImages}
        >
          Charger plus
        </button>
      )}
    </div>
  );
}
