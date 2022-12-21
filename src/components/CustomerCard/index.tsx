import { CustomerDgIcon, CustumerFileIcon as CostumerIcon} from '../../assets/Icons';
import React from 'react';

import { Container } from './styles';

import {StyledText} from '../../styles/Texts'
import { Link } from 'react-router-dom';

interface CustCardProps {
  customerName: string
  holderName: string
  param: string
}



const CustomerCard: React.FC<CustCardProps> = ({customerName, holderName, param}) => {

  const customerRoute: string = `/customer/${param}`

  return (
    <Container>
      <div className="CustomerLogo">
        <CustomerDgIcon/>
      </div>
      <div className="Info">
      <Link to={customerRoute}>
        <StyledText text={customerName} isClickable accent size='sm' bold/>
      </Link>
        <StyledText text={holderName} size='xs'/>
      </div>
    </Container>
    );
}

export default CustomerCard;