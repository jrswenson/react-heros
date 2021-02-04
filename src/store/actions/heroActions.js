import * as types from "../actionTypes";
import { deleteHero, getHeroes, saveHero } from "../../services/heroService";

export function loadHeroesSuccess(heroes) {
  return { type: types.LOAD_HEROES_SUCCESS, heroes };
}

export function saveHeroSuccess(hero) {
  return { type: types.SAVE_HERO_SUCCESS, hero };
}

export function deleteHeroSuccess(id) {
  return { type: types.DELETE_HERO_SUCCESS, id };
}

export function loadHeroes() {
  return (dispatch) => {
    return getHeroes().then((heroes) => {
      dispatch(loadHeroesSuccess(heroes));
    });
  };
}

export function addOrUpdateHero(hero) {
  return (dispatch) => {
    return saveHero(hero).then((savedHero) => {
      dispatch(saveHeroSuccess(savedHero));
    });
  };
}

export function removeHero(id) {
  return (dispatch) => {
    return deleteHero(id).then(() => dispatch(deleteHeroSuccess(id)));
  };
}
