export default function Dropdown({
  className,
  id,
  label,
  select,
  handleChange,
}) {
  return (
    <div className={`input-wrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      <select
        className="dropdownList"
        id={id}
        onChange={handleChange}
        required
      >
        {select.map((data) => (
          <option
            title="dropdownOption"
            type="text"
            value={data.value}
            key={data.abbrev}
          >
            {data.label}
          </option>
        ))}
      </select>
    </div>
  );
}
