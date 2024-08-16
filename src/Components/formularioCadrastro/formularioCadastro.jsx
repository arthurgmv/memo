import React, { Component } from "react";
import "./style.css";

export default class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
            texto: "",
            categoria: "",
        };
    }

    handleMudancaTitulo(e) {
        this.setState({ titulo: e.target.value });
    }

    handleMudancaTexto(e) {
        this.setState({ texto: e.target.value });
    }

    handleMudancaCategoria(e) {
        this.setState({ categoria: e.target.value });
    }

    criarNota(e) {
        e.preventDefault();
        const { titulo, texto, categoria } = this.state;

        if (!titulo.trim() || !texto.trim()) {
            alert("A nota não pode ser vazia. Por favor, preencha o título e o texto.");
            return;
        }

        this.props.criarNota(titulo, texto, categoria);
        this.setState({ titulo: "", texto: "", categoria: "" });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.criarNota.bind(this)}>
                    <select
                        className="form-cadastro_input"
                        value={this.state.categoria}
                        onChange={this.handleMudancaCategoria.bind(this)}
                    >
                        {this.props.categorias.map((categoria, index) => {
                            return <option key={index} value={categoria}>{categoria}</option>;
                        })}
                    </select>
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
