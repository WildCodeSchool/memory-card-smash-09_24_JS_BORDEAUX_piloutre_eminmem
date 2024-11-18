import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <button
          className={`burger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          type="button"
        >
          <button
            className={`line ${isMenuOpen ? "active" : ""}`}
            type="button"
          />
          <button
            className={`line ${isMenuOpen ? "active" : ""}`}
            type="button"
          />
          <button
            className={`line ${isMenuOpen ? "active" : ""}`}
            type="button"
          />
        </button>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <h1>Smash Cards</h1>
        </Link>
        <ul className={`link ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src="/logo-smash.png" alt="Accueil" />
            </Link>
          </li>
          <li>
            <Link to="/scorepage" onClick={() => setIsMenuOpen(false)}>
              Score
            </Link>
          </li>
          <li>
            <Link to="/description" onClick={() => setIsMenuOpen(false)}>
              Description
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
