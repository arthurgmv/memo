import React from "react";

export default class FormularioCadastro extends React.Component{
    render() {
        return (
            <form>
                <input type="text" placeholder="Título"/>
                <textarea placeholder="Escreva sua nota..."></textarea>
                <button type="submit">Criar Nota</button>
            </form>

        )

    }

}