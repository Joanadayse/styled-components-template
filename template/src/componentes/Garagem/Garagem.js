import { Carro } from "../Carro/Carro";
import { Estacionamento , GaragemContainer , Cabecalho} from "./styled";

export function Garagem(props) {
  return (
    <GaragemContainer>
      <Cabecalho>
      <h1>Garagem da {props.nome}</h1>
      </Cabecalho>
      
    <Estacionamento>
       
       <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
       <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
       <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
       <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex />
    </Estacionamento>
    
    <Estacionamento>
    
       <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
       <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
       <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex />
       <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex />
    </Estacionamento>

    </GaragemContainer>
  );
}
