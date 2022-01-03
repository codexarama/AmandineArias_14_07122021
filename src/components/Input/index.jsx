import PropTypes from 'prop-types';

/**
 * Input
 *
 * @param   {object}      props
 * @param   {string}      props.className        [input wrapper className]
 * @param   {string}      props.id               [label "html for" identifiant]
 * @param   {string}      props.label            [label name]
 * @param   {string}      props.type             [type of content]
 * @param   {string}      props.value            [value of content]
 * @param   {function}    props.handleChange     [handling input change]
 *
 * @returns {Reactnode}   jsx injected in DOM
 */
export default function Input({
  className,
  id,
  label,
  type,
  value,
  handleChange,
}) {
  return (
    <div className={`form-newEmployee--inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        aria-required="true"
        required
      />
    </div>
  );
}

/**
 * Input PROPTYPES
 */
Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
