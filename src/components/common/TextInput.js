const TextInput = ({ id, name, title, value, onChange }) => {
  return (
    <div>
      <label>{title}</label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
