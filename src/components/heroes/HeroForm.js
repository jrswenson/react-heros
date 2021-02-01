import { useState } from "react";
import TextInput from "../common/TextInput";

function HeroForm({ hero, onSave }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function handleSaveName(event) {
    const { value } = event.target;
    setName(value);
  }
  function handleSaveDesc(event) {
    const { value } = event.target;
    setDesc(value);
  }

  return (
    <form onSubmit={() => onSave({ ...hero, name, description: desc })}>
      <TextInput name="Name" value={name} onChange={handleSaveName} />
      <TextInput name="Description" value={desc} onChange={handleSaveDesc} />
      <button type="submit">Save</button>
    </form>
  );
}

export default HeroForm;
