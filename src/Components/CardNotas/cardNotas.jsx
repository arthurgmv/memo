import React from 'react';
import PropTypes from 'prop-types'; // Para validação de props
import "./style.css";

export default class CardNota extends React.Component {
    static propTypes = {
        titulo: PropTypes.string.isRequired,
        texto: PropTypes.string.isRequired,
        categoria: PropTypes.string.isRequired,
        deletarNota: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    };

    render() {
        const { titulo, texto, categoria, deletarNota, index } = this.props;

        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo" style={{ fontWeight: "bold" }}>
                        {titulo}
                    </h3>
                </header>
                <p className="card-nota_texto">
                    {texto}
                </p>
                <p>{categoria}</p>
                <button
                    onClick={() => deletarNota(index)}
                    className="botao-deletar">
                    Deletar
                </button>
            </section>
        );
    }
}
