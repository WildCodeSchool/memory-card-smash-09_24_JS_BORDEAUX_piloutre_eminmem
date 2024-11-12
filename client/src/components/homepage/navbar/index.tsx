import { Link } from "react-router-dom";
import "./index.css";

export function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/homepage">
              <img src="./public/logo-smash.png" alt="" />
            </Link>
          </li>
          <h1>Smash Cards</h1>
          <li>
            <Link to="/scorepage">Score</Link>
          </li>
          <li>
            <a href="description">Description</a>
          </li>
          <li>
            <a href="about">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
