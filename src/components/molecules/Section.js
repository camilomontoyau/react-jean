import React from "react";
import Input from "../atoms/Input";
import Note from "../atoms/Note";
import Select from "../atoms/Select";

const FieldTypes = {
  date: Input,
  text: Input,
  number: Input,
  checkbox: Input,
  note: Note,
  select: Select,
  "multi select": Select
};

const Section = ({ fields, handleValues, readOnly, index }) => {
  return (
    <div>
      <h1>Sección {index + 1}</h1>
      {fields.map((field, indice) => {
        const Comp = FieldTypes[field.type];
        return (
          <Comp
            {...field}
            key={`field-${indice}`}
            handleValues={handleValues}
            readOnly={readOnly}
          />
        );
      })}
    </div>
  );
};

export default Section;
