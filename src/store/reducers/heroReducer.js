import * as types from "../actionTypes";

const heroReducer = (heroes = [], action) => {
  switch (action.type) {
    case types.SAVE_HERO_SUCCESS: {
      const { hero } = action;

      if (heroes.find((f) => f.id === hero.id)) {
        return heroes.map((m) => (m.id === hero.id ? hero : m));
      }

      return [...heroes, hero];
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
