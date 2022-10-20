import {ImagemCarro , Propriedades ,Tudao,Texto} from "../Carro/styled"

export function Carro(props) {
    return (
      <Tudao>
        <Texto>
        <h2>volkswagen</h2>
        </Texto>
  <ImagemCarro
     src="https://purepng.com/public/uploads/large/purepng.com-audiaudicarluxurious-carprofessional-carwhite-audired-audi-17015274093953ufxk.png" alt="Imagem-carro" 
    />
  
        <Propriedades>
        <ul>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex ? "true" : "false"}</li>
         
        </ul>
        </Propriedades>
      </Tudao>
    );
  }
  