import React, { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addLocalHero,
  addLocalVillain,
  clearLocalHeroes,
  clearLocalVillains,
  getLocalHeroes,
  getLocalVillains,
  removeLocalHero,
  removeLocalVillain,
} from "../services/favoriteService";
import { loadVillains } from "../store/actions/villainActions";
import { loadHeroes } from "../store/actions/heroActions";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { heroes, villains } = useSelector((state) => state);
  const [favoriteHeroIds, setFavoriteHeroIds] = useState();
  const [favoriteVillainIds, setFavoriteVillainIds] = useState();
  const [favoriteHeroes, setFavoriteHeroes] = useState([]);
  const [favoriteVillains, setFavoriteVillains] = useState([]);

  useEffect(() => {
    if (!favoriteHeroIds) {
      getLocalHeroes().then((ids) => setFavoriteHeroIds(ids));
    }
  }, [favoriteHeroIds]);

  useEffect(() => {
    if (!favoriteVillainIds) {
      getLocalVillains().then((ids) => setFavoriteVillainIds(ids));
    }
  }, [favoriteVillainIds]);

  useEffect(() => {
    if (heroes.length === 0) {
      dispatch(loadHeroes());
    } else if (heroes.length > 0) {
      setFavoriteHeroes(heroes.filter((f) => favoriteHeroIds.includes(f.id)));
    }
  }, [heroes, favoriteHeroIds, dispatch]);

  useEffect(() => {
    if (villains.length === 0) {
      dispatch(loadVillains());
    } else if (villains.length > 0) {
      setFavoriteVillains(
        villains.filter((f) => favoriteVillainIds.includes(f.id))
      );
    }
  }, [villains, favoriteVillainIds, dispatch]);

  const addHero = (hero) => {
    if (!hero) return;

    addLocalHero(hero.id).then(() => {
      setFavoriteHeroIds([...favoriteHeroIds, hero.id]);
    });
  };

  const removeHero = (id) => {
    removeLocalHero(id).then(() => {
      setFavoriteHeroIds(favoriteHeroIds.filter((f) => f !== id));
    });
  };

  const clearHeroes = () => {
    clearLocalHeroes().then(() => {
      setFavoriteHeroIds([]);
    });
  };

  const addVillain = (villain) => {
    if (!villain) return;

    addLocalVillain(villain.id).then(() => {
      setFavoriteVillainIds([...favoriteVillainIds, villain.id]);
    });
  };

  const removeVillain = (id) => {
    removeLocalVillain(id).then(() => {
      setFavoriteVillainIds(favoriteVillainIds.filter((f) => f !== id));
    });
  };

  const clearVillains = () => {
    clearLocalVillains().then(() => {
      setFavoriteVillainIds([]);
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
