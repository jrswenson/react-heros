import React, { createContext, useEffect, useState } from "react";
import * as favService from "../services/favoriteService";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteHeroes, setFavoriteHeroes] = useState();
  const [favoriteVillains, setFavoriteVillains] = useState();

  useEffect(() => {
    if (!favoriteHeroes) {
      favService.getLocalHeroes().then((heroes) => setFavoriteHeroes(heroes));
    }
  }, [favoriteHeroes]);

  useEffect(() => {
    if (!favoriteVillains) {
      favService
        .getLocalVillains()
        .then((villains) => setFavoriteVillains(villains));
    }
  }, [favoriteVillains]);

  const addHero = (hero) => {
    if (!hero) return;

    favService.addLocalHero(hero).then(() => {
      setFavoriteHeroes([...favoriteHeroes, hero]);
    });
  };

  const removeHero = (id) => {
    favService.removeLocalHero(id).then(() => {
      setFavoriteHeroes(favoriteHeroes.filter((f) => f.id !== id));
    });
  };

  const clearHeroes = () => {
    favService.clearLocalHeroes().then(() => {
      setFavoriteHeroes([]);
    });
  };

  const addVillain = (villain) => {
    if (!villain) return;

    favService.addLocalVillain(villain).then(() => {
      setFavoriteVillains([...favoriteVillains, villain]);
    });
  };

  const removeVillain = (id) => {
    favService.removeLocalVillain(id).then(() => {
      setFavoriteVillains(favoriteVillains.filter((f) => f.id !== id));
    });
  };

  const clearVillains = () => {
    favService.clearLocalVillains().then(() => {
      setFavoriteVillains([]);
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteHeroes,
        favoriteVillains,
        addHero,
        removeHero,
        clearHeroes,
        addVillain,
        removeVillain,
        clearVillains,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
