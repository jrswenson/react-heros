import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

function HeroForm(props) {
  const { hero, onChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="name"
        name="name"
        title="Name"
        value={hero.name}
        onChange={onChange}
      />
      <TextInput
        id="description"
        name="description"
        title="Description"
        value={hero.description}
        onChange={onChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

HeroForm.propTypes = {
  hero: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default HeroForm;