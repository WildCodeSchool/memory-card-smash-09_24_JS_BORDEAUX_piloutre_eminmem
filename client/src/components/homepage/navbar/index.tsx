import "./index.css";

export function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="i">
              <img src="./src/assets/images/logo-smash.png" alt="" />
            </a>
          </li>
          <h1>Smash Cards</h1>
          <li>
            <a href="i">Score</a>
          </li>
          <li>
            <a href="i">Description</a>
          </li>
          <li>
            <a href="i">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
