import React, { useEffect, useState } from 'react';

//Components
import ContactFooter from '../../components/ContactFooter';
import CustomerIndexBar from '../../components/CustomerIndexBar';
import Loader from '../../components/Loader';
import MainBoxes from '../../components/MainBoxes';
import MessageBanner from '../../components/MessageBanner';
import NavBar from '../../components/NavBar';
import PageInfoHeader from '../../components/PageInfoHeader';
import PoweredContainer from '../../components/PoweredContainer';

// import DGStickMessage from '../../components/DGStickMessage';
import { Container, Content } from './styles';

interface ParamTypes {
  id: string;
}

//tela inicial da aplicação
const IndexPage: React.FC = () => {

  const [isLoading, setLoading] = useState(true)
  // const { id } = useParams<ParamTypes>();

  return (
    <Container>
      <NavBar />
      <Content>
        {
        isLoading ? <>
        <PageInfoHeader />
          <MessageBanner />
          <MainBoxes/>
          <CustomerIndexBar />
          <ContactFooter pageReference="index"/>
          </> : <Loader />
        }
      </Content>
      <PoweredContainer/>
    </Container>
  )
}

export default IndexPage