import * as types from "../actionTypes";

const heroReducer = (heroes = [], action) => {
  switch (action.type) {
    case types.SAVE_HERO_SUCCESS: {
      const { hero } = action;
      return heroes.map((m) => (m.id === hero.id ? hero : m));
    }
    case types.DELETE_HERO_SUCCESS: {
      return heroes.filter((f) => f.id !== action.id);
    }
    case types.LOAD_HEROES_SUCCESS: {
      return action.heroes;
    }
    default:
      return heroes;
  }
};

export default heroReducer;
