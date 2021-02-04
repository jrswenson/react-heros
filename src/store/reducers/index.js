import { combineReducers } from "redux";
import heroReducer from "./heroReducer";
import villainReducer from "./villianReducer";

const rootReducer = combineReducers({
  heroes: heroReducer,
  villains: villainReducer,
});

export default rootReducer;
