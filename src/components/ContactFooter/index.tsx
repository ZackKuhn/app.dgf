/*------------------------------------------------
Container no bottom das páginas que fornece 
a interação de entrar em contato pelo whatsapp.
------------------------------------------------*/

import React from 'react';

//Icons
import {WhatsIcon} from '../../assets/Icons'

import { Container, Wbutton } from './styles';

interface CFooterDTO {
  pageReference: string
}

const ContactFooter: React.FC<CFooterDTO> = ({pageReference}) => {
  return (
    <Container to={"https://api.whatsapp.com/send?phone=5534998987743&text=Preciso%20da%20sua%20ajuda."} target="_blank" >
      <div className="LeftSide">
        <h1>Dúvidas?</h1> 
        <h2>Manda no grupo</h2>
      </div>
      <div className="RightSide">
        <Wbutton >
          {
            pageReference === "dgplayer" && <span>Falar com o cliente</span> ||
            pageReference === "index" && <span>Entrar em contato</span>
          }
          <WhatsIcon/>
        </Wbutton>
      </div>
    </Container>
  );
}

export default ContactFooter;