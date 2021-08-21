import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
  }

  handleMudancaDeTitulo(event) {
    this.titulo = event.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaDeTitulo.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          rows={15}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
