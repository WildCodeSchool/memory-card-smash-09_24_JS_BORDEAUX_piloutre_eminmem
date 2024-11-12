import { Link } from "react-router-dom";
import "./index.css";

export function Main() {
  return (
    <main>
      <section className="rules">
        <h3> Regles </h3>
        <p>
          Bienvenue dans Smash Card ! 🎉 <br />
          Le but du jeu est simple : trouve toutes les paires de cartes le plus
          rapidement possible. <br />
          Voici les règles pour jouer :
        </p>
        <li className="listrules">
          Retourne les cartes une par une pour découvrir leur image.
        </li>
        <li className="listrules">
          Trouve les paires identiques en mémorisant les emplacements des
          cartes.
        </li>
        <li className="listrules">
          Dès que tu retrouves deux cartes identiques, elles restent visibles.
          Continue jusqu'à ce que toutes les paires soient découvertes.
        </li>
        <p>
          Le chrono tourne !<br /> Fais de ton mieux pour terminer la partie en
          un minimum de temps. À toi de jouer et de montrer ta mémoire et ta
          rapidité ! Bonne chance ! 🃏⏱️
        </p>
      </section>

      <section className="button">
        <h2> Let's play </h2>
        <Link to="/scorepage"><button type="button"> Choisissez une difficulté ! </button></Link>
        <button type="button"> Start the game ! </button>
      </section>
    </main>
  );
}
