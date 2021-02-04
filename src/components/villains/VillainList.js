import { Link } from "react-router-dom";

function VillainList({
  villains = [],
  onDelete,
  favorites,
  addFavorite,
  removeFavorite,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Favorite</th>
          <th>Name</th>
          <th>Description</th>
          <th>{"  "}</th>
        </tr>
      </thead>
      <tbody>
        {villains.map((villain) =>
          row({ ...villain, onDelete, favorites, addFavorite, removeFavorite })
        )}
      </tbody>
    </table>
  );
}

function row({
  id,
  name,
  description,
  onDelete,
  favorites,
  addFavorite,
  removeFavorite,
}) {
  const checked = !!favorites.find((f) => f.id === id);

  return (
    <tr key={id}>
      <td>
        <input
          type="checkbox"
          onChange={
            checked
              ? () => removeFavorite(id)
              : () => addFavorite({ id, name, description })
          }
          checked={checked}
        />
      </td>
      <td>
        <Link to={"/villain/" + id}> {name}</Link>
      </td>
      <td>{description}</td>
      <td>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default VillainList;
