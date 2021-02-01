import { useEffect, useState } from "react";
import VillainForm from "./VillainForm";
import * as villainService from "../../services/villainService";

function VillainManager(props) {
  const [villain, setVillain] = useState({
    id: null,
    name: "",
    description: "",
  });
  const [villains, setVillains] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;

    if (id) {
      if (villains.length === 0) {
        villainService.getVillains().then((villains) => setVillains(villains));
      }

      const foundVillain = villains.find((h) => h.id === id);
      if (foundVillain) setVillain(foundVillain);
    }
  }, [villains.length, props.match.params.id]);

  function handleSave(event) {
    event.preventDefault();

    villainService.saveVillain(villain).then(() => {
      props.history.push("/villains");
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

export default VillainManager;
