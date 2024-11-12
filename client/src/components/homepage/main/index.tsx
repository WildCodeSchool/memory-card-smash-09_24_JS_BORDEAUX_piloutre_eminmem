import "./index.css";
import { Link } from "react-router-dom";
export function Main() {
  return (
    <main>
      <section>
        <h3> Regles </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          doloremque praesentium similique quam necessitatibus at eum
          repudiandae odio aspernatur, hic est cum soluta, maxime delectus natus
          eligendi nostrum eius odit!
        </p>
      </section>

      <section>
        <h2> Title </h2>
        <Link to="/GamePage">
          <button type="button">Start</button>
        </Link>
        <Link to="/">
          <button type="button">Difficulty</button>
        </Link>
      </section>
    </main>
  );
}
