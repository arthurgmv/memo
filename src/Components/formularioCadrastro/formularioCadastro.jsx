import React, { Component } from "react";
import "./style.css";

export default class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
            texto: ""
        };
    }

    handleMudancaTitulo(e) {
        this.setState({ titulo: e.target.value });
    }

    handleMudancaTexto(e) {
        this.setState({ texto: e.target.value });
    }

    criarNota(e) {
        e.preventDefault();
        const { titulo, texto } = this.state;

        if (!titulo.trim() || !texto.trim()) {
            alert("A nota não pode ser vazia. Por favor, preencha o título e o texto.");
            return;
        }

        this.props.criarNota(titulo, texto);
        this.setState({ titulo: "", texto: "" });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.criarNota.bind(this)}>
                    <input
                        type="text"
                        placeholder="Título"
                        value={this.state.titulo}
                        onChange={this.handleMudancaTitulo.bind(this)}
                    />
                    <textarea
                        placeholder="Escreva sua nota..."
                        value={this.state.texto}
                        onChange={this.handleMudancaTexto.bind(this)}
                    ></textarea>
                    <button type="submit">Criar Nota</button>
                </form>
            </div>
        );
    }
}
