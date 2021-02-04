import { useContext, useEffect } from "react";
import VillainList from "./VillainList";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesProvider";
import { connect } from "react-redux";
import {
  loadVillains,
  removeVillain,
} from "../../store/actions/villainActions";

function VillainsPage({ villains, loadVillains, removeVillain }) {
  const {
    favoriteVillains,
    addVillain,
    removeVillain: removeVillainFavorite,
  } = useContext(FavoritesContext);

  useEffect(() => {
    if (villains.length === 0) {
      loadVillains();
    }
  }, [villains, loadVillains]);

  function handleDelete(id) {
    removeVillain(id);
  }

  return (
    <>
      <h1>Villains</h1>
      <Link to="/villain">Add Villain</Link>
      <VillainList
        villains={villains}
        onDelete={handleDelete}
        favorites={favoriteVillains}
        addFavorite={addVillain}
        removeFavorite={removeVillainFavorite}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    villains: state.villains,
  };
}

const mapDispatchToProps = {
  loadVillains,
  removeVillain,
};

export default connect(mapStateToProps, mapDispatchToProps)(VillainsPage);
