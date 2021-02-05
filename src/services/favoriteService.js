let localHeroes;
let localVillains;

function addToLocalStorage(name, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(name, json);
}

export function getLocalHeroes() {
  return new Promise((resolve, reject) => {
    try {
      localHeroes = JSON.parse(localStorage.getItem("favoriteHeroes") ?? "[]");
      resolve(localHeroes);
    } catch (e) {
      reject("Favorite Heroes could not be parsed: " + e.message);
    }
  });
}

export function clearLocalHeroes() {
  return new Promise((resolve, reject) => {
    if (!localHeroes) {
      reject("Favorite heroes could not be parsed");
    } else {
      try {
        localHeroes = [];
        addToLocalStorage("favoriteHeroes", localHeroes);
        resolve();
      } catch (e) {
        reject("Can not clear local heroes: " + e.message());
      }
    }
  });
}

export function addLocalHero(id) {
  return new Promise((resolve, reject) => {
    if (!localHeroes) {
      reject("Favorite heroes could not be parsed");
    } else {
      try {
        localHeroes = [...localHeroes, id];
        addToLocalStorage("favoriteHeroes", localHeroes);
        resolve(id);
      } catch (e) {
        reject("Can not add hero id: " + e.message());
      }
    }
  });
}

export function removeLocalHero(id) {
  return new Promise((resolve, reject) => {
    if (!localHeroes) {
      reject("Favorite heroes could not be parsed");
    } else {
      try {
        localHeroes = localHeroes.filter((f) => f !== id);
        addToLocalStorage("favoriteHeroes", localHeroes);
        resolve(id);
      } catch (e) {
        reject("Can not remove hero id: " + e.message());
      }
    }
  });
}

export function getLocalVillains() {
  return new Promise((resolve, reject) => {
    try {
      localVillains = JSON.parse(
        localStorage.getItem("favoriteVillains") ?? "[]"
      );
      resolve(localVillains);
    } catch {
      reject("Favorite Villains could not be parsed");
    }
  });
}

export function clearLocalVillains() {
  return new Promise((resolve, reject) => {
    if (!localVillains) {
      reject("Favorite villains could not be parsed");
    } else {
      try {
        localVillains = [];
        addToLocalStorage("favoriteVillains", localVillains);
        resolve();
      } catch (e) {
        reject("Can not clear local villains: " + e.message());
      }
    }
  });
}

export function addLocalVillain(id) {
  return new Promise((resolve, reject) => {
    if (!localVillains) {
      reject("Favorite villains could not be parsed");
    } else {
      try {
        localVillains = [...localVillains, id];
        addToLocalStorage("favoriteVillains", localVillains);
        resolve(id);
      } catch (e) {
        reject("Can not add villain id: " + e.message());
      }
    }
  });
}

export function removeLocalVillain(id) {
  return new Promise((resolve, reject) => {
    if (!localVillains) {
      reject("Favorite villains could not be parsed");
    } else {
      try {
        localVillains = localVillains.filter((f) => f !== id);
        addToLocalStorage("favoriteVillains", localVillains);
        resolve(id);
      } catch (e) {
        reject("Can not remove villain id: " + e.message());
      }
    }
  });
}
