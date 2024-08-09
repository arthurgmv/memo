import React, {Component} from 'react';
import ListaDeNotas from "./Components/listaDeNotas/listaDeNotas";
import FormularioCadastro from "./Components/formularioCadrastro/formularioCadastro";
import "./style.css"

class App extends Component {

  constructor() {
    super();
    this.notas =[];
    this.state = {};
  }

  criarNota(titulo, texto) {
      const novaNota = {titulo, texto};
      this.notas.push(novaNota);
      this.setState({
          notas:this.notas
      })
  }

  render(){
    return(
  <section>
    <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
    <ListaDeNotas notas={this.notas}/>
  </section>
  );
}
}
export default App;
