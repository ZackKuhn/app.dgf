import React, {useState, useEffect} from 'react';
import CustomerIndexBar from '../../components/CustomerIndexBar';
import ContactFooter from '../../components/ContactFooter';
import {FiHelpCircle} from 'react-icons/fi'

import {colors} from '../../styles/Colors'

// import Lottie from 'react-lottie';
// import animationData from '../../animations/v4loader.json';

//Components
import MainBoxes from '../../components/MainBoxes';
import MessageBanner from '../../components/MessageBanner';
import NavBar from '../../components/NavBar';
import PoweredContainer from '../../components/PoweredContainer';
import PageInfoHeader from '../../components/PageInfoHeader';



//API
// import api from '../../services/api';
import { Container, Content, RoiHeader, FirstBox, HelpIcon, InputContainer } from './styles';

//Props
type Client = {
  id: number;
  corporatename: string;
  stakeholdername: string;
}

interface ParamTypes {
  id: string;
}

//tela inicial da aplicação
const RoiPage: React.FC = () => {

  const [isLoading, setLoading] = useState(false)

  // const { id } = useParams<ParamTypes>();


  useEffect(() => {
  const timeout = setTimeout(() => {
      setLoading(true);
    }, 200);
  },[]);

  //   const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // };

  return (
    <Container>
      <NavBar />
      <Content>
        {
        isLoading ? <>
        <PageInfoHeader />
        <RoiHeader>
          <div className="LeftBox">
            <h1>Calcular ROI & ROAS</h1>
            <h2>Confira qual é o ROI real de seu projeto.</h2>
          </div>
          <div className="RightBox">
            <HelpIcon>
            <span>O que é ROI ou ROAS</span>
            <FiHelpCircle size={18} color={colors.actionColor}/>
            </HelpIcon>
          </div>
        </RoiHeader>
        <FirstBox>
        <InputContainer>
          <span>R$</span>
          <input type="number" />
        </InputContainer>
        </FirstBox>
        <CustomerIndexBar />
        <ContactFooter />
        </> :
        <div className="loadingContainer"></div>
        }
      </Content>
      <PoweredContainer/>
    </Container>
  )
}

export default RoiPage