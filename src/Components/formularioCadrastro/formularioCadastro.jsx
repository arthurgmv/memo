import React from "react";
import "./style.css"
export default class FormularioCadastro extends React.Component{
    render() {
        return (
            <div className="container">
                <form>
                    <input type="text" placeholder="Título"/>
                    <textarea placeholder="Escreva sua nota..."></textarea>
                    <button type="submit">Criar Nota</button>
                </form>
            </div>
        )

    }

}