import { useContext, useEffect, useState } from "react";
import { deleteVillain, getVillains } from "../../services/villainService";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesProvider";
import VillainList from "./VillainList";

function VillainsPage() {
  const [villains, setVillains] = useState([]);
  const { favoriteVillains, addVillain, removeVillain } = useContext(
    FavoritesContext
  );

  useEffect(() => {
    if (villains.length === 0) {
      getVillains().then((villains) => setVillains(villains));
    }
  });

  function handleDelete(id) {
    deleteVillain(id).then(() => {
      getVillains().then((villains) => setVillains(villains));
    });
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
        removeFavorite={removeVillain}
      />
    </>
  );
}

export default VillainsPage;
