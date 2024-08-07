import React, {Component} from "react";
import CardNota from "./CardNotas/cardNotas";

export default class ListaDeNotas extends Component {

    render(){
        return (<ul>
            {Array.of("Trabalho", "Trabalho", "Estudos").map((categorias, index) => {
                return (
                    <li key={index}>
                        <div>{categorias}</div>
                        <CardNota/>
                    </li>);
            })}
        </ul>)
    }
}

