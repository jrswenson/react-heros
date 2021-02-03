import { combineReducers } from "redux";
import heroReducer from "./heroReducer";

const rootReducer = combineReducers({
  heroes: heroReducer,
});

export default rootReducer;
