import React, { Component } from 'react';
import ListaDeNotas from "./Components/listaDeNotas/listaDeNotas";
import FormularioCadastro from "./Components/formularioCadrastro/formularioCadastro";
import "./style.css";
import Footer from "./Components/footer/footer";

class App extends Component {
    constructor() {
        super();
        this.notas = [];
        this.state = {};
    }

    criarNota(titulo, texto) {
        const novaNota = { titulo, texto };
        this.notas.push(novaNota);
        this.setState({ notas: this.notas });
    }

    deletarNota(index) {
        this.notas.splice(index, 1);
        this.setState({ notas: this.notas });
    }

    render() {
        return (
            <div className="app-container">
                <div className="content">
                    <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                    <ListaDeNotas notas={this.notas} deletarNota={this.deletarNota.bind(this)} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
