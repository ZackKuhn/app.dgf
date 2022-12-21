import React, { useContext } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
// import { UserToken } from '../../services/AuthContext'

//Components
import { Container, MenuContainer, NotificationsContainer } from './styles'
// import VariantAvatars from '../../components/Avatar';

//Imagens & Icons
import {MenuLogo} from '../../assets/Icons';
import { HomeIcon, TrophyIcon } from '../../assets/Icons';
// import NotificationBox from '../NotificationBox';

import AppContext from '../../AppContext/Context';
import StyledButton from '../StyledButton';

const NavBar: React.FC = () => {
  
  const {userTokenData} = useContext(AppContext)

  const navMenuItems = [
    {
      id: 1,
      label: 'Home',
      link: `/home/${userTokenData.id}`
    },
    {
      id: 2,
      label: 'Clientes',
      link: `/customers/${userTokenData.id}`
    },
    {
      id: 3,
      label: 'Tarefas',
      link: `/tasks/${userTokenData.id}`
    },
    {
      id: 4,
      label: 'Documentos',
      link: `/documents/${userTokenData.id}`
    },
  ];

  return (
    <Container>
      <div className="NavBar_logo">
      <Link to={`/home/${userTokenData.id}`}>
        <MenuLogo/>
      </Link>
      </div>
      <div className="NavBar_menu">
        {/* NAV MENU */}
        <MenuContainer>
          {
            navMenuItems.map(navItem =>(
              <NavLink key={navItem.id} className={({isActive}) => isActive ? 'ActiveNavBar' : 'UnselectedNavBar'} to={navItem.link}>
              {navItem.label}
              </NavLink>
            ))
          }
        </MenuContainer>
      </div>
      <div className="NavBar_profile">
        <div className="ShortMenu">
          {/* <HomeIcon />
          <TrophyIcon /> */}
          <StyledButton label='logout' link='/' borderStyle/>
        </div>
      </div>
    </Container>
  )
}

export default NavBar

