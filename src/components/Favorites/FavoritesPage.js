import { FavoritesContext } from "../../context/FavoritesProvider";
import { useContext } from "react";
import FavoriteList from "./FavoriteList";

function FavoritesPage() {
  const {
    favoriteHeroes,
    favoriteVillains,
    removeHero,
    clearHeroes,
    removeVillain,
    clearVillains,
  } = useContext(FavoritesContext);
  return (
    <>
      <FavoriteList
        listName="Heroes"
        listUrl="/hero/"
        favorites={favoriteHeroes}
        clear={clearHeroes}
        remove={removeHero}
      />
      <FavoriteList
        listName="Villains"
        listUrl="/villain/"
        favorites={favoriteVillains}
        clear={clearVillains}
        remove={removeVillain}
      />
    </>
  );
}

export default FavoritesPage;
