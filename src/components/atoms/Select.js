import React from "react";

const Select = ({
  indice,
  name,
  required,
  readOnly,
  visible,
  options = [],
  type,
  handleValues = () => console.log("empty function")
}) => {
  if (!visible) return false;
  return (
    <div>
      <label htmlFor={`field-${indice}`}>{name}</label>
      <select
        required={required}
        id={`field-${indice}`}
        multiple={type === "multi select"}
        readOnly={readOnly}
        onChange={handleValues}
        name={name}
      >
        {options.map(option => (
          <option key={`field-${indice}-${option}`}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
