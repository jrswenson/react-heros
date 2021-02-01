import { useEffect, useState } from "react";
import { deleteVillain, getVillains } from "../../services/villainService";
import { Link } from "react-router-dom";
import HeroList from "../heroes/HeroList";

function VillainsPage() {
  const [villains, setVillains] = useState([]);

  useEffect(() => {
    if (villains.length === 0) {
      getVillains().then((villains) => setVillains(villains));
    }
  });

  function handleDelete(id) {
    deleteVillain(id).then(() => {
      getVillains().then((villains) => setVillains(villains));
    });
  }

  return (
    <>
      <h1>Villains</h1>
      <Link to="/villain">Add Villain</Link>
      <HeroList heroes={villains} onDelete={handleDelete} />
    </>
  );
}

export default VillainsPage;
