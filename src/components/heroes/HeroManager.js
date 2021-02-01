import { useEffect, useState } from "react";
import HeroForm from "./HeroForm";
import * as heroService from "../../services/heroService";

function HeroManager(props) {
  const [hero, setHero] = useState({ id: null, name: "", description: "" });
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;

    if (id) {
      if (heroes.length === 0) {
        heroService.getHeroes().then((heroes) => setHeroes(heroes));
      }

      const foundHero = heroes.find((h) => h.id === id);
      if (foundHero) setHero(foundHero);
    }
  }, [heroes.length, props.match.params.id]);

  function handleSave(event) {
    event.preventDefault();

    heroService.saveHero(hero).then(() => {
      props.history.push("/heroes");
    });
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setHero({ ...hero, [name]: value });
  }

  return <HeroForm hero={hero} onChange={handleChange} onSubmit={handleSave} />;
}

export default HeroManager;
