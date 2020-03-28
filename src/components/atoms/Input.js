import React from "react";

const Input = ({
  indice,
  name,
  type,
  required,
  readOnly,
  visible,
  handleValues = () => console.log("empty function")
}) => {
  if (!visible) {
    return false;
  }
  return (
    <div>
      <label htmlFor={`field-${indice}`}>{name}</label>
      <input
        type={type}
        required={required}
        readOnly={readOnly}
        id={`field-${indice}`}
        onChange={handleValues}
        name={name}
      />
    </div>
  );
};

export default Input;
