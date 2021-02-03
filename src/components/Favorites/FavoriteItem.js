import { Link } from "react-router-dom";

function FavoriteItem({ listUrl, id, name, remove }) {
  const linkUrl = listUrl + id;
  return (
    <li key={id}>
      <span>
        <Link to={linkUrl}> {name}</Link>
        <button onClick={() => remove(id)}>X</button>
      </span>
    </li>
  );
}

export default FavoriteItem;
