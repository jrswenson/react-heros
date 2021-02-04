import { useEffect, useState } from "react";
import HeroForm from "./HeroForm";
import { addOrUpdateHero, loadHeroes } from "../../store/actions/heroActions";
import { connect } from "react-redux";

function HeroManager({
  heroes,
  loadHeroes,
  addOrUpdateHero,
  history,
  ...props
}) {
  const [hero, setHero] = useState({ ...props.hero });

  useEffect(() => {
    if (heroes.length === 0) {
      loadHeroes();
    } else {
      setHero({ ...props.hero });
    }
  }, [props.hero]);

  function handleSave(event) {
    event.preventDefault();
    addOrUpdateHero(hero).then(() => {
      history.push("/heroes");
    });
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setHero({ ...hero, [name]: value });
  }

  return <HeroForm hero={hero} onChange={handleChange} onSubmit={handleSave} />;
}

function getHeroById(heroes, id) {
  return heroes.find((h) => h.id === id) || null;
}

function mapStateToProps(state, ownProps) {
  const { heroes } = state;
  const id = ownProps.match.params.id;
  const hero =
    id && heroes.length > 0
      ? getHeroById(heroes, id)
      : { id: null, name: "", description: "" };
  return {
    hero,
    heroes,
  };
}

const mapDispatchToProps = {
  loadHeroes,
  addOrUpdateHero,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroManager);
