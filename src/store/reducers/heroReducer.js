import * as types from "../actionTypes";

const heroReducer = (heroes = [], action) => {
  switch (action.type) {
    case types.ADD_HERO: {
      return [...heroes, action.hero];
    }
    case types.UPDATE_HERO: {
      const { hero } = action;
      return heroes.map((m) => (m.id === hero.id ? hero : m));
    }
    case types.REMOVE_HERO: {
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
