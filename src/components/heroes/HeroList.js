import { Link } from "react-router-dom";

function HeroList({
  heroes = [],
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
        {heroes.map((hero) =>
          row({ ...hero, onDelete, favorites, addFavorite, removeFavorite })
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
  const checked = favorites.find((f) => f.id === id);
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
        <Link to={"/hero/" + id}> {name}</Link>
      </td>
      <td>{description}</td>
      <td>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default HeroList;
