import React, { Component } from 'react';
import ListaDeNotas from "./Components/listaDeNotas/listaDeNotas";
import ListaDeCategoria from "./Components/listaDeCategoria/ListaDeCategoria";
import FormularioCadastro from "./Components/formularioCadrastro/formularioCadastro";
import "./style.css";
import Footer from "./Components/footer/footer";
import Header from "./Components/header/Header";

class App extends Component {
    constructor() {
        super();
        this.state = {
            notas: [],
            categorias: [],
        };
    }

    adicionarCategoria(nomeCategoria){
        const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
        const novoEstado = {...this.state, categorias:novoArrayCategorias};
        this.setState(novoEstado);
    }

    deletarCategoria(index) {
        this.setState((prevState) => {
            const novasCategorias = [...prevState.categorias];
            novasCategorias.splice(index, 1);
            return { categorias: novasCategorias };
        });
    }

    criarNota(titulo, texto, categoria) {
        const novaNota = { titulo, texto, categoria };
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
                    <ListaDeCategoria
                        adicionarCategoria={this.adicionarCategoria.bind(this)}
                        deletarCategoria={this.deletarCategoria.bind(this)}
                        categorias={this.state.categorias} />
                    <FormularioCadastro categorias={this.state.categorias}
                                        criarNota={this.criarNota.bind(this)} />
                    <main className="mainContent">
                        <ListaDeNotas
                            notas={this.state.notas}
                            deletarNota={this.deletarNota.bind(this)}
                        />
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
