import React, {Component} from "react";
import CardNota from "../CardNotas/cardNotas";
import "./style.css";

export default class ListaDeNotas extends Component {

    render(){
        return (<ul className="lista-de-notas">
            {this.props.notas.map((nota, index) => {
                return (
                    <li key={index}>
                        <CardNota
                            titulo={nota.titulo}
                            texto={nota.texto}
                            index={index}
                            deletarNota={this.props.deletarNota}
                        />
                    </li>);
            })}
        </ul>)
    }
}

