import { useEffect, useState } from "react";
import { getHeroes } from "../../services/heroService";

function HeroesPage() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    if (heroes.length === 0) {
      getHeroes().then((heroes) => setHeroes(heroes));
    }
  });

  return (
    <>
      <h1>Heroes</h1>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </>
  );
}

export default HeroesPage;
