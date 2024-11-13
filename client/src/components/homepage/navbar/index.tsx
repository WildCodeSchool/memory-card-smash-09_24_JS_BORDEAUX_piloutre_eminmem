import { Link } from "react-router-dom";
import "./index.css";

export function NavBar() {
  return (
    <header>
      <nav>
        <ul className="link">
          <li>
            <Link to="/">
              <img src="./public/logo-smash.png" alt="accueil" />
            </Link>
          </li>
          <li>
            <Link to="/scorepage">Score</Link>
          </li>
          <li>
            <Link to="/description">Description</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
      <h1>Smash Cards</h1>
    </header>
  );
}
