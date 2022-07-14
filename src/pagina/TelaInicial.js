import styled from "styled-components"
import { WrapperTelaInicial, Logo, Titulo, Texto} from "../estilos/Conteudo"
import { Botao } from "../componentes/elementos/botao"
import ilustracao from '../imagens/ilustracao.png'
import logobranco from '../imagens/logobranco.png'


 
export const ImgCao = styled.img`
    height: 30%;
    position: absolute;
    bottom: 5em;


    `

export const TelaInicial = () => (
   
   <WrapperTelaInicial>
        <Logo src={logobranco} alt="Logo da Adopet" />
       <Titulo primary>Boas-Vindas!</Titulo>
       <Texto primary>
            Que tal mudar sua vida adotando seu novo melhor amigo ?
            Vem com a gente.
        </Texto>
        <Botao href="/login">
            Já tenho conta
        </Botao>
        <Botao href="/cadastro">
            Quero me cadastrar
        </Botao>
       
      
        <ImgCao src={ilustracao} alt="Cãozinho" />
      
   
    </WrapperTelaInicial>

)