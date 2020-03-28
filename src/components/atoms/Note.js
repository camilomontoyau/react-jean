import React from "react";

const Note = ({
  indice,
  name,
  required,
  readOnly,
  visible,
  handleValues = () => console.log("empty function")
}) => {
  if (!visible) return false;
  return (
    <div>
      <label htmlFor={`field-${indice}`}>{name}</label>
      <textarea
        required={required}
        readOnly={readOnly}
        id={`field-${indice}`}
        onChange={handleValues}
        name={name}
      />
    </div>
  );
};

export default Note;
