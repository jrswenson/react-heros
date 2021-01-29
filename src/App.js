import { useState, useEffect } from "react";
import { getHeroes } from "./services/heroService";
import { getVillains } from "./services/villainService";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [villains, setVillains] = useState([]);

  useEffect(() => {
    if (heroes.length === 0) {
      getHeroes().then((heroes) => setHeroes(heroes));
    }

    if (heroes.length === 0) {
      getVillains().then((villains) => setVillains(villains));
    }
  });

  return (
    <div className="App">
      <h1>Heroes</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>

      <h1>Villains</h1>
      <ul>
        {villains.map((villain) => (
          <li key={villain.id}>{villain.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
