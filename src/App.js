import React, { Component } from "react";
import "./App.css";
import { formFields } from "./estados-form";
import querystring from "querystring";
import Section from "./components/molecules/Section";
const URL_API = "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/";

const sections = [
  { start: 0, end: 9 },
  { start: 9, end: 19 },
  { start: 19, end: 29 },
  { start: 29, end: 32 }
];

class App extends Component {
  state = {
    fields: [],
    estado: null,
    data: {}
  };

  componentDidMount() {
    const query = querystring.parse(window.location.search.replace("?", ""));
    const { estado = null } = query;
    if (estado !== null) {
      this.setState({ fields: formFields[estado], estado });
    }
  }

  handleValues = event => {
    const { name = null, value = null } = event.target;
    let { data } = this.state;
    data = { ...data, [name]: value };
    this.setState({ data });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { data } = this.state;
    console.log({ data });
    this.sendData(data);
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
    const { fields = [], estado = null } = this.state;
    const { handleValues, handleSubmit } = this;
    const readOnly = estado === "soloVista";
    return (
      <div className="App">
        <div>
          <form onSubmit={handleSubmit}>
            {sections.map(({ start, end }, index) => {
              const sectionFields = fields.slice(start, end);
              return (
                <Section
                  fields={sectionFields}
                  handleValues={handleValues}
                  readOnly={readOnly}
                  index={index}
                  key={`section-${index}`}
                />
              );
            })}
            <button type="submit">enviar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
