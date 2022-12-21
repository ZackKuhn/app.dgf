import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import AppContext from '../../AppContext/Context';
import { colors } from '../../styles/Colors';

import { HiOutlinePencil as EditIcon } from 'react-icons/hi';

import { MdOpenInNew as OpenIcon, MdPhotoCamera } from 'react-icons/md';

import { GoogleCertification, MetaCertification } from '../../assets/Stamps';

import dgthus_loader from '../../assets/lottieAnimations/dgthus_loader.json';

//Components
import NavBar from '../../components/NavBar';
// import Shortcuts from '../../components/Shortcuts'
import EditProfile from '../../components/EditProfile';

//API
// import api from '../../services/api';

// Shorcuts Data
// import { ShortCuts } from '../../data/ShortCuts' 
import { AxiosError } from 'axios';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import AppContext from '../../AppContext/Context';
import { DgxCoin } from '../../assets/Icons';
import EditUserInProfileForm from '../../components/Forms/EditUserInProfileForm';
import DGModal from '../../components/Modals/DGModal';
import UserCustomerTags from '../../components/Nivo/UserCustomerTags';
import ProfileLevel from '../../components/ProfileLevel';
import SkillBox from '../../components/SkillBox';
import StyledButton from '../../components/StyledButton';
import { StyledText } from '../../styles/Texts';
import api from '../../utils/api';
import { CustomerDataTypes } from '../../utils/dataTypes';
import { ChangeImgIcon, Container, Content, EditIconContainer } from './styles';
import { skills } from './UserData';
// import NavBottom from '../../components/NavBottom';

const UserImg = "https://i.imgur.com/OTPBLZH.png";

//Props
type User = {
  id: number;
  corporatename: string;
  stakeholdername: string;
}

interface ParamTypes {
  id: string;
}

//tipagem condicionada aos itens
type ShortCutsProps = {
  Short_id: number;
  label: String;
  link: String;
  paginatedItems: [];
};

// const ShortCollection = (collection: any, page: number = 1, numItems: number = 10) => {
//   if (!Array.isArray(collection)) {
//     throw `Expect array and got ${typeof collection}`;
//   }
//   const currentPage = parseInt(page.toString());
//   const perPage = parseInt(numItems.toString());
//   const offset = (page - 1) * perPage;
//   const paginatedItems: object[] = collection.slice(offset, offset + perPage);

//   return {
//     currentPage,
//     perPage,
//     total: collection.length,
//     totalPages: Math.ceil(collection.length / perPage),
//     data: paginatedItems
//   };
// }

const UserPage: React.FC= () => {
  //get context user info
  // const { user } = useContext(AppContext)
  // const { id } = useParams<ParamTypes>();
  const [User, setUserData] = useState<User[]>([]);
  const [data, setCustomerData] = useState<CustomerDataTypes[]>([])
  const [isLoading, setLoadingData] = useState(false)

  const { state, setState: setModalState } = useContext(AppContext)

  const handleOpenModal = ()=>{
    setModalState({openModal: true})
  }

  useEffect(()=>{
    api.get('/customers').then(response => {
      setCustomerData(response.data);
      setLoadingData(true);
    }).catch(function(error: any){
      console.log(AxiosError.ERR_BAD_REQUEST)
    })
  },[])

  return (
    <Container>
      <NavBar />
      {/* <NavBottom /> */}
      <div className="UserCover">
      </div>
      <Content>
        <div className="LeftColumn">
          <div className="MainProfileBox" id="LeftBoxes">
            <div className="EditBtnContainer">
              <EditProfile />
            </div>
            <div className="ImgContainer">
              <img src={UserImg} alt="" />
              <ChangeImgIcon>
                <MdPhotoCamera size={16} color={colors.firstContainerColor}/>
              </ChangeImgIcon>
            </div>
            <h1 id="UserName">Ezequias Kuhn</h1>
            <h2 id="UserStat">CEO & Founder</h2>
            <div className="StampBox">
              <StyledButton label='EDITAR PERFIL' borderStyle link='' onClick={handleOpenModal}/>
              {
                state.openModal &&
                <DGModal title='Editar perfil'>
                  <EditUserInProfileForm/>
                </DGModal>
              }
            </div>
            <span id="divider"></span>
            <div className="UserActiveInfo">
              <ProfileLevel level={50}/>
            </div>
          </div>
          <div className="DgxBox" id="LeftBoxes">
            <div className="TitleSection">
            <StyledText text='DGx' bold accent size='xs'/>
            <StyledText text='"digicxis"' size='xs'/>
            </div>
            <div className="BoxContent">
              <motion.div
                whileHover={{
                  translateY: -3,
                  transition: { type:"spring", duration: .2 },
                }}
              >
                <DgxCoin/>
              </motion.div>
            <div className="CoinInfo">
              <StyledText text='1000' bold accent size='base'/>
              <StyledText text='dgxs' size='xs'/>
            </div>
            </div>
          </div>
          <div className="ProfileStamps" id="LeftBoxes">
            <h1></h1>
          </div>
        </div>
        <div className="RightColumn">
        <div className="ProfileActionsBox">
            <div className="EditBtnContainer">
            </div>
            <div className="TitleSection">
              <StyledText text='Informações' bold accent size='xs'/>
              <EditIconContainer onClick={handleOpenModal}>
                <EditIcon color={colors.actionColor}/>
              </EditIconContainer>
              {
                state.openModal &&
                <DGModal title='Editar perfil'>
                  <EditUserInProfileForm/>
                </DGModal>
              }
            </div>
            <div className="UserInfoBox">
              <div className="UserInfoLine">
                <StyledText text='Nome' size='xs' bold/>
                <StyledText text='Ezequias Kuhn' size='sm' bold accent/>
              </div>
              <div className="UserInfoLine">
                <StyledText text='Email' size='xs' bold/>
                <StyledText text='ezequias.kuhn@gmail.com' size='sm' bold accent/>
              </div>
              <div className="UserInfoLine" id="EndLineInfo">
                <StyledText text='Nickname' size='xs' bold/>
                <StyledText text='Zack' size='sm' bold accent/>
              </div>
              <div className="UserInfoLine">
                <StyledText text='Contato' size='xs' bold/>
                <StyledText text='34998987743' size='sm' bold accent/>
              </div>
            </div>
          </div>
          <div className="ProfileClientsBox">
            <div className="EditBtnContainer">
            </div>
            <div className="TitleSection">
            <StyledText text='Clientes' bold accent size='xs'/>           
            <StyledText text={`${data.length} clientes ativos`} bold size='xs'/>           
            </div>
            {
              isLoading ?
              <UserCustomerTags customeritens={data}/> :
              <Lottie
              loop
              animationData={dgthus_loader}
              play
              style={{ width: 100, height: 100 }}
              />   
            }
          </div>
          <div className="ProfileCertificationsBox">
            <div className="EditBtnContainer">
              <EditProfile />
            </div>
            <div className="TitleSection">
            <StyledText text='Certificados' bold accent size='xs'/>    
            </div>
            <div className="Content">
              {/* <DgCertification /> */}
              <GoogleCertification isCertified/>
              <MetaCertification isCertified/>
            </div>
          </div>
          
          <div className="ProfileAccessBox">
            <div className="EditBtnContainer">
            </div>
            <div className="TitleSection">
            <StyledText text='Skills' bold accent size='sm'/>
            <EditIconContainer onClick={handleOpenModal}>
                <OpenIcon color={colors.actionColor}/>
              </EditIconContainer>
            </div>  
            <div className="SkillBox">
              {
                skills.map(item => (
                  <SkillBox
                  key={item.label}
                  label={item.label}
                  currentvalue={item.currentvalue}
                  maxvalue={item.maxvalue}
                  active={item.active}
              />      
              ))}
            </div>
          </div>
          
        </div>

      </Content>
    </Container >
  )
}

export default UserPage