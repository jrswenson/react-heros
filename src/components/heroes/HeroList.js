import { Link } from "react-router-dom";

function HeroList({ heroes = [], onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>{"  "}</th>
        </tr>
      </thead>
      <tbody>{heroes.map((hero) => row({ ...hero, onDelete }))}</tbody>
    </table>
  );
}

function row({ id, name, description, onDelete }) {
  return (
    <tr key={id}>
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
