import { Garagem } from "./componentes/Garagem/Garagem";
import { GlobalStyle } from "./GlobalStyle";
import { Button } from "./componentes/Garagem/styled";
export default function App() {
  const nome = "Labenu";

  // function apresentaGaragem() {
  //   alert(`Boas vindas à garagem de ${nome}`);
  // }

  return (
    <div className="App">
      <GlobalStyle/>
      <Garagem nome={nome} 
      
      
      />
      
    </div>
  );
}