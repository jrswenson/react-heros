import { useContext, useEffect, useState } from "react";
import { getHeroes, deleteHero } from "../../services/heroService";
import HeroList from "./HeroList";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesProvider";

function HeroesPage() {
  const [heroes, setHeroes] = useState([]);
  const { favoriteHeroes, addHero, removeHero } = useContext(FavoritesContext);

  useEffect(() => {
    if (heroes.length === 0) {
      getHeroes().then((heroes) => setHeroes(heroes));
    }
  }, [heroes.length]);

  function handleDelete(id) {
    deleteHero(id).then(() => {
      getHeroes().then((heroes) => setHeroes(heroes));
    });
  }

  return (
    <>
      <h1>Heroes</h1>
      <Link to="/hero">Add Hero</Link>
      <HeroList
        heroes={heroes}
        favorites={favoriteHeroes}
        onDelete={handleDelete}
        addFavorite={addHero}
        removeFavorite={removeHero}
      />
    </>
  );
}

export default HeroesPage;
