import { createGlobalStyle } from 'styled-components'

import {colors} from './Colors'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;    
    scroll-behavior: smooth;
  } 

  html, body{
    #appearance-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    }
  }
   //config gerais do html
  html, body, #root{
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    background: ${colors.bgDarkColor};    
    font-family: 'Roboto', sans-serif;
  }
  //Estilização do scroll
  body, div, textarea{
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      background: ${colors.bgInputColor};
    }
    ::-webkit-scrollbar-thumb {
    background-color: ${colors.actionColor};    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    }
  }

  //limpa o padrão para os botões e inputs
  *, button, input{
     border: 0;
     outline: none;
     text-decoration: none;
     background: none;
  }
  /* Cor do Caret - inputs*/
  input{
    caret-color: ${colors.actionColor};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus
 {
    -webkit-text-fill-color: ${colors.infoTextColor};
    box-shadow: 0 0 0 100px #121214 inset !important;
  }

  //cor do preenchimento de seleção geral
  ::selection{  
    color: #121214;  
    background: ${colors.actionColor};
  }

   :root{
    //shadows
    --light-shadow: 0 0 15px rgba(10 , 10, 15, .25);
    --normal-shadow: 0px 4px 10px rgba(31, 42, 56, 0.25);
}  
`
