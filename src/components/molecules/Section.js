import React, { Component } from "react";
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

class Section extends Component {
  state = {
    collapse: true
  };

  toggleCollapse = e => {
    e.preventDefault();
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  };

  render() {
    const { fields, handleValues, readOnly, index, valid } = this.props;
    const { collapse } = this.state;
    const { toggleCollapse } = this;
    return (
      <div>
        <h1>
          <a onClick={toggleCollapse} href="#">
            Sección {index + 1}
          </a>
          {!valid && " no es valido"}
        </h1>

        <div style={{ display: collapse === true ? "none" : "" }}>
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
      </div>
    );
  }
}

export default Section;
