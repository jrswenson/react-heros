import { useEffect, useState } from "react";
import { getHeroes, deleteHero } from "../../services/heroService";
import HeroList from "./HeroList";
import { Link } from "react-router-dom";

function HeroesPage() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    if (heroes.length === 0) {
      getHeroes().then((heroes) => setHeroes(heroes));
    }
  }, []);

  function handleDelete(id) {
    deleteHero(id).then((res) => {
      getHeroes().then((heroes) => setHeroes(heroes));
    });
  }

  return (
    <>
      <h1>Heroes</h1>
      <Link to="/hero">Add Hero</Link>
      <HeroList heroes={heroes} onDelete={handleDelete} />
    </>
  );
}

export default HeroesPage;
