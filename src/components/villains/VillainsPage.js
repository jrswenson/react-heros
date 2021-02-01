import { useEffect, useState } from "react";
import { getVillains } from "../../services/villainService";

function VillainsPage() {
  const [villains, setVillains] = useState([]);

  useEffect(() => {
    if (villains.length === 0) {
      getVillains().then((villains) => setVillains(villains));
    }
  });

  return (
    <>
      <h1>Villains</h1>
      <ul>
        {villains.map((villain) => (
          <li key={villain.id}>{villain.name}</li>
        ))}
      </ul>
    </>
  );
}

export default VillainsPage;
