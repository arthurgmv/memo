import React, {Component} from 'react';
import ListaDeNotas from "./Components/listaDeNotas";
import FormularioCadastro from "./Components/formularioCadastro";

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
