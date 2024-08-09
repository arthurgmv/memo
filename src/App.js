import React, { Component } from 'react';
import ListaDeNotas from "./Components/listaDeNotas/listaDeNotas";
import FormularioCadastro from "./Components/formularioCadrastro/formularioCadastro";
import "./style.css";
import Footer from "./Components/footer/footer";
import Header from "./Components/header/Header";

class App extends Component {
    constructor() {
        super();
        this.state = {
            notas: []
        };
    }

    criarNota(titulo, texto) {
        const novaNota = { titulo, texto };
        this.setState((prevState) => ({
            notas: [...prevState.notas, novaNota]
        }));
    }

    deletarNota(index) {
        this.setState((prevState) => {
            const novasNotas = [...prevState.notas];
            novasNotas.splice(index, 1);
            return { notas: novasNotas };
        });
    }

    render() {
        return (
            <div className="app-container">
                <div className="header">
                    <Header/>
                </div>
                <div className="content">
                    <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                    <ListaDeNotas
                        notas={this.state.notas}
                        deletarNota={this.deletarNota.bind(this)}
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
