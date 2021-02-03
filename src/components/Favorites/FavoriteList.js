import FavoriteItem from "./FavoriteItem";

const FavoriteList = ({ listName, listUrl, favorites, remove, clear }) => {
  return (
    <>
      <span>
        <b>{listName}</b>
        {favorites.length > 0 && <button onClick={clear}>Clear</button>}
      </span>
      <ul style={{ listStyleType: "none" }}>
        {favorites.map((h) => (
          <FavoriteItem
            key={h.id}
            listUrl={listUrl}
            id={h.id}
            name={h.name}
            remove={remove}
          />
        ))}
      </ul>
    </>
  );
};

export default FavoriteList;
