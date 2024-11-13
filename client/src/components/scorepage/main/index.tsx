import "./index.css";

export function Board() {
  return (
    <main className="mainscoreboard">
      <button className="buttonDifficult" type="button">
        Facile
      </button>
      <button className="buttonDifficult" type="button">
        Moyen
      </button>
      <button className="buttonDifficult" type="button">
        Difficle
      </button>
    </main>
  );
}
