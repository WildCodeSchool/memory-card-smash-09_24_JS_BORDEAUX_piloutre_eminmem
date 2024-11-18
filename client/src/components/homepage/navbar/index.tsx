import { Link } from "react-router-dom";
import "./index.css";

export function NavBar() {
  return (
    <header>
      <nav>
        <ul className="links">
          <li className="link">
            <Link to="/">
              <img src="./public/logo-smash.png" alt="accueil" />
            </Link>
          </li>
          <li className="link">
            <Link to="/scorepage">Score</Link>
          </li>
          <li className="link">
            <Link to="/description">Description</Link>
          </li>
          <li className="link">
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
      <h1>Smash Cards</h1>
    </header>
  );
}
