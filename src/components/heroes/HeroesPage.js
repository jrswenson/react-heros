import { useContext, useEffect } from "react";
import HeroList from "./HeroList";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesProvider";
import { connect } from "react-redux";
import { loadHeroes, removeHero } from "../../store/actions/heroActions";

function HeroesPage(props) {
  const { heroes, loadHeroes, removeHero } = props;
  const {
    favoriteHeroes,
    addHero,
    removeHero: removeHeroFavorite,
  } = useContext(FavoritesContext);

  useEffect(() => {
    if (heroes.length === 0) {
      loadHeroes();
    }
  }, [heroes, loadHeroes]);

  function handleDelete(id) {
    removeHero(id);
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
        removeFavorite={removeHeroFavorite}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}

const mapDispatchToProps = {
  loadHeroes,
  removeHero,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesPage);
