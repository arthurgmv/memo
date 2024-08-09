import React, {Component} from 'react';
import ListaDeNotas from "./Components/listaDeNotas/listaDeNotas";
import FormularioCadastro from "./Components/formularioCadrastro/formularioCadastro";
import "./style.css"

class App extends Component {
  render(){
    return(
  <section>
    <FormularioCadastro></FormularioCadastro>
    <ListaDeNotas></ListaDeNotas>
  </section>
  );
}
}
export default App;
