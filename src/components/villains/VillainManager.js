import { useEffect, useState } from "react";
import VillainForm from "./VillainForm";
import { connect } from "react-redux";
import {
  addOrUpdateVillain,
  loadVillains,
} from "../../store/actions/villainActions";

function VillainManager({
  villains,
  loadVillains,
  addOrUpdateVillain,
  history,
  ...props
}) {
  const [villain, setVillain] = useState({ ...props.villain });

  useEffect(() => {
    if (villains.length === 0) {
      loadVillains();
    } else {
      setVillain({ ...props.villain });
    }
  }, [props.villain, loadVillains, villains.length]);

  function handleSave(event) {
    event.preventDefault();

    addOrUpdateVillain(villain).then(() => {
      history.goBack();
    });
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setVillain({ ...villain, [name]: value });
  }

  return (
    <VillainForm
      villain={villain}
      onChange={handleChange}
      onSubmit={handleSave}
    />
  );
}

function getVillainById(villains, id) {
  return villains.find((h) => h.id === id) || null;
}

function mapStateToProps(state, ownProps) {
  const { villains } = state;
  const id = ownProps.match.params.id;
  const villain =
    id && villains.length > 0
      ? getVillainById(villains, id)
      : { id: null, name: "", description: "" };
  return {
    villain,
    villains,
  };
}

const mapDispatchToProps = {
  loadVillains,
  addOrUpdateVillain,
};

export default connect(mapStateToProps, mapDispatchToProps)(VillainManager);
