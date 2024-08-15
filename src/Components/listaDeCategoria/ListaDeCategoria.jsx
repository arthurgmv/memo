import React, { Component } from "react";
import './style.css';

class ListaDeCategoria extends Component {
    _handleEventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
            e.target.value = "";
        }
    }

    render() {
        return (
            <section>
                <ul>
                    {this.props.categorias.map((categoria, index) => (
                        <li key={index}>
                            {categoria}
                            <button
                                onClick={() => this.props.deletarCategoria(index)}
                                style={{backgroundColor: 'red', color: 'white', borderStyle: 'none', borderRadius: '2px', padding: '0.2rem', marginLeft:'2px'}}>
                                x
                            </button>
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategoria;
