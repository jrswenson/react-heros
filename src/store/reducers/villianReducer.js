import * as types from "../actionTypes";

const villainReducer = (villains = [], action) => {
  switch (action.type) {
    case types.SAVE_VILLAIN_SUCCESS: {
      const { villain } = action;
      return villains.map((m) => (m.id === villain.id ? villain : m));
    }
    case types.DELETE_VILLAIN_SUCCESS: {
      return villains.filter((f) => f.id !== action.id);
    }
    case types.LOAD_VILLAINS_SUCCESS: {
      return action.villains;
    }
    default:
      return villains;
  }
};

export default villainReducer;
