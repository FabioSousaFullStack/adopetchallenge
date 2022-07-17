import { FormularioPerfil, WrapperPerfil,  
        InputPerfil,  LabelPerfil, TextoPerfil} from "../componentes/elementos/FormularioPerfil";
import {WrapperBotao, BotaoFormulario } from '../componentes/elementos/BotaoFormulario'

import styled from 'styled-components'

const FormularioMensagem = styled(FormularioPerfil)`

    width: 70%;`

const InputTextArea = styled.input`
    padding: 10px;
    padding-top: 2em;
    line-height: 2em;
    border-radius: 5px;
    border: 1px solid #ccc;
    
`

export const Mensagem = () => (
    <WrapperPerfil>
      
       
       <TextoPerfil primary>
        Envie uma mensagem para a pessoa ou instituição que está cuidando do 
        animal:
        </TextoPerfil>
       
       
        <FormularioMensagem>
        

             
        
        <LabelPerfil for="nome">Nome </LabelPerfil>
        <InputPerfil type="text" id="nomemensagem" name="nomemensagem" placeholder="Insira seu nome completo" />
        
        <LabelPerfil for="telefone">Telefone </LabelPerfil>
        <InputPerfil type="tel" id="telefonemensagem" name="telefonemensagem" placeholder="Insira seu telefone e/ou whatsapp" />
        
        <LabelPerfil for="nomedoanimal">Nome do animal </LabelPerfil>
        <InputPerfil type="text" id="nomedoanimal" name="nomedoanimal" placeholder="Por qual animal você se interessou?" />

        <LabelPerfil for="nomedoanimal">Mensagem </LabelPerfil>
        <InputTextArea type="textarea" id="nomedoanimal" name="nomedoanimal" 
         rows="5" cols="33" placeholder="Escreva sua mensagem." />
       
        <WrapperBotao>
         <BotaoFormulario type="submit" value="Click Me" >Salvar</BotaoFormulario>
         </WrapperBotao>
        
        
        </FormularioMensagem>   

       
       
     
   
    </WrapperPerfil>    
       
       
       
)