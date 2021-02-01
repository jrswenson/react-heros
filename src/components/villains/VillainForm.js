import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

function VillainForm(props) {
  const { villain, onChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="name"
        name="name"
        title="Name"
        value={villain.name}
        onChange={onChange}
      />
      <TextInput
        id="description"
        name="description"
        title="Description"
        value={villain.description}
        onChange={onChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

VillainForm.propTypes = {
  villain: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default VillainForm;
