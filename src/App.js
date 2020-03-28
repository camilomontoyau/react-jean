import React, { Component } from "react";
import "./App.css";
import { formFields } from "./estados-form";
import querystring from "querystring";

class App extends Component {
  state = {
    fields: [],
    estado: null
  };

  componentDidMount() {
    const query = querystring.parse(window.location.search.replace("?", ""));
    const { estado = null } = query;
    if (estado !== null) {
      this.setState({ fields: formFields[estado], estado });
    }
  }

  render() {
    const { fields = [], estado = null } = this.state;
    const readOnly = estado === "soloVista";
    console.log(fields.map(f => f.type));
    return (
      <div className="App">
        <div>
          <form>
            {fields.map(
              (
                { name = "", type = "text", required, visible, options = [] },
                indice
              ) => {
                switch (type) {
                  case "date":
                  case "text":
                  case "number":
                  case "checkbox":
                    return (
                      <div key={`field-${indice}`}>
                        <label for={`field-${indice}`}>{name}</label>
                        <input
                          type={type}
                          required={required}
                          readOnly={readOnly}
                          style={{
                            display: visible === true ? "" : "none"
                          }}
                          id={`field-${indice}`}
                        />
                      </div>
                    );
                  case "note":
                    return (
                      <div key={`field-${indice}`}>
                        <label for={`field-${indice}`}>{name}</label>
                        <textarea
                          required={required}
                          readOnly={readOnly}
                          style={{
                            display: visible === true ? "" : "none"
                          }}
                          id={`field-${indice}`}
                        />
                      </div>
                    );
                  case "select":
                  case "multi select":
                    return (
                      <div key={`field-${indice}`}>
                        <label for={`field-${indice}`}>{name}</label>
                        <select
                          type={type}
                          required={required}
                          style={{
                            display: visible === true ? "" : "none"
                          }}
                          id={`field-${indice}`}
                          multiple={type === "multi select"}
                          readOnly={readOnly}
                        >
                          {options.map(option => (
                            <option key={`field-${indice}-${option}`}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    );
                }
              }
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default App;
