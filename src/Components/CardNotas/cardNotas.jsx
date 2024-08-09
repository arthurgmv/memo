import React from 'react';
import "./style.css";
export default class CardNota extends React.Component {
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo" style={{fontWeight: "bold"}}>Título</h3>
                </header>
                <p className="card-nota_texto">Escreva sua nota</p>
            </section>
        )
    }
}