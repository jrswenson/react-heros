import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteHeroes, setFavoriteHeroes] = useState([]);
  const [favoriteVillains, setFavoriteVillains] = useState([]);

  const addHero = (hero) => {
    if (!hero) return;

    if (!favoriteHeroes.find((h) => h.id === hero.id)) {
      setFavoriteHeroes([...favoriteHeroes, hero]);
    }
  };

  const removeHero = (id) => {
    setFavoriteHeroes(favoriteHeroes.filter((h) => h.id !== id));
  };

  const clearHeroes = () => setFavoriteHeroes([]);

  const addVillain = (villain) => {
    if (!villain) return;

    if (!favoriteVillains.find((v) => v.id === villain.id)) {
      setFavoriteVillains([...favoriteVillains, villain]);
    }
  };

  const removeVillain = (id) => {
    setFavoriteVillains(favoriteVillains.filter((v) => v.id !== id));
  };

  const clearVillains = () => setFavoriteVillains([]);

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
