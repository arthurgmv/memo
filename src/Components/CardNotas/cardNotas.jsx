import React from 'react';
import "./style.css";
export default class CardNota extends React.Component {
    render() {
        return (
            <section className="card-nota">
                <header>
                    <h3>Título</h3>
                </header>
                <p>Escreva sua nota</p>
            </section>
        )
    }
}