import { handleError, handleResponse } from "./serviceHelper";

const baseUrl = process.env.REACT_APP_API_URL + "/heroes/";

export function getHeroes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveHero(hero) {
  return fetch(baseUrl + (hero.id || ""), {
    method: hero.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(hero),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteHero(heroId) {
  return fetch(baseUrl + heroId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
