const TextInput = ({ name, value, onChange }) => {
  return (
    <div>
      <label>{name}</label>
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;
