import * as types from "../actionTypes";
import {
  deleteVillain,
  getVillains,
  saveVillain,
} from "../../services/villainService";

export function loadVillainsSuccess(villains) {
  return { type: types.LOAD_VILLAINS_SUCCESS, villains };
}

export function saveVillainSuccess(villain) {
  return { type: types.SAVE_VILLAIN_SUCCESS, villain };
}

export function deleteVillainSuccess(id) {
  return { type: types.DELETE_VILLAIN_SUCCESS, id };
}

export function loadVillains() {
  return (dispatch) => {
    return getVillains().then((villains) => {
      dispatch(loadVillainsSuccess(villains));
    });
  };
}

export function addOrUpdateVillain(villain) {
  return (dispatch) => {
    return saveVillain(villain).then((savedVillain) => {
      dispatch(saveVillainSuccess(savedVillain));
    });
  };
}

export function removeVillain(id) {
  return (dispatch) => {
    return deleteVillain(id).then(() => dispatch(deleteVillainSuccess(id)));
  };
}
