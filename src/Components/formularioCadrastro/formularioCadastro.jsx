import React from "react";
import "./style.css"
export default class FormularioCadastro extends React.Component{

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    handleMudancaTitulo(e){
        e.stopPropagation();
        this.titulo = e.target.value;
    }

    handleMudancaTexto(e){
        e.stopPropagation();
        this.text = e.target.value;
    }

    criarNota(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
        //console.log(`uma nova nota foi criada ` + this.titulo + this.nota)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.criarNota.bind(this)}>
                    <input type="text" placeholder="Título" onChange={this.handleMudancaTitulo.bind(this)}/>
                    <textarea placeholder="Escreva sua nota..." onChange={this.handleMudancaTexto.bind(this)}></textarea>
                    <button type="submit">Criar Nota</button>
                </form>
            </div>
        )

    }

}