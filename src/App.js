import React, {Component} from 'react';
import ListaDeNotas from "./Components/listaDeNotas/listaDeNotas";
import FormularioCadastro from "./Components/formularioCadrastro/formularioCadastro";
import "./style.css"

class App extends Component {
  criarNota(titulo, texto) {

  }

  render(){
    return(
  <section>
    <FormularioCadastro criarNota={this.criarNota}/>
    <ListaDeNotas/>
  </section>
  );
}
}
export default App;
