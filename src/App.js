import React, { Component } from "react";
import "./App.css";
import { formFields } from "./estados-form";
import querystring from "querystring";
import Section from "./components/molecules/Section";
const URL_API = "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/";

function validFields(data) {
  return field => {
    if (field.required) {
      return {
        ...field,
        valido: field.required && !!data[field.name]
      };
    }
    return { ...field, valido: true };
  };
}

class App extends Component {
  state = {
    fields: [],
    estado: null,
    data: {},
    valid: false,
    sections: [
      { start: 0, end: 9, valid: true },
      { start: 9, end: 19, valid: true },
      { start: 19, end: 29, valid: true },
      { start: 29, end: 32, valid: true }
    ]
  };

  componentDidMount() {
    const query = querystring.parse(window.location.search.replace("?", ""));
    const { estado = null } = query;
    const { data } = this.state;
    if (estado !== null) {
      const camposValidosFn = validFields({ ...data });
      const fields = [...formFields[estado]].map(camposValidosFn);
      this.setState({
        fields,
        estado
      });
    }
  }

  handleValues = event => {
    const { name = null, value = null } = event.target;
    let { data } = this.state;
    data = { ...data, [name]: value };
    this.setState({ data }, () => {
      this.handleValidation();
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { data, valido, sections, fields } = this.state;

    if (valido) {
      this.sendData(data);
      return;
    }
    const newSections = sections.map(({ start, end }) => {
      const sectionInvalidFields = fields
        .slice(start, end)
        .filter(sectionField => !sectionField.valido);
      return { start, end, valid: !sectionInvalidFields.length };
    });
    this.setState({ sections: newSections });
  };

  handleValidation = () => {
    const { data, fields } = this.state;
    const camposValidosFn = validFields({ ...data });
    const newFields = fields.map(camposValidosFn);
    const noValidFields = newFields.filter(nf => !nf.valido);
    this.setState({ fields: newFields, valid: !noValidFields.length });
  };

  sendData = data => {
    fetch(URL_API, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  render() {
    const { fields = [], estado = null, sections } = this.state;
    const { handleValues, handleSubmit } = this;
    const readOnly = estado === "soloVista";
    return (
      <div className="App">
        <div>
          <form onSubmit={e => e.preventDefault()}>
            {sections.map(({ start, end, valid }, index) => {
              const sectionFields = fields.slice(start, end);
              return (
                <Section
                  fields={sectionFields}
                  handleValues={handleValues}
                  readOnly={readOnly}
                  index={index}
                  key={`section-${index}`}
                  valid={valid}
                />
              );
            })}
            <button onClick={handleSubmit} type="submit">
              enviar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
