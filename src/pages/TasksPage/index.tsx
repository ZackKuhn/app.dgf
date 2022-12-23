import React, { useContext, useEffect, useState } from 'react';
import ContactFooter from '../../components/ContactFooter';

//Styled Components & styles assets
import NavBar from '../../components/NavBar';
import PoweredContainer from '../../components/PoweredContainer';
import { colors } from '../../styles/Colors';
import { StyledText } from '../../styles/Texts';
import { Container, Content, RowIcon, TaskCell, TaskDataBox, TaskHeader, TaskName, TaskPageDivider, TaskRow, TaskTable } from './styles';

import api from '../../utils/api';
import { CustomerDataTypes } from '../../utils/dataTypes';

//Loader imports
import Lottie from 'react-lottie-player';
import dgthus_loader from '../../assets/lottieAnimations/dgthus_loader.json';
import { tableLabel } from './TaskPageData';

//Icons
import { BiTask as TasksIcon } from 'react-icons/bi';
import { MdOutlineOpenInNew as OpenIcon } from 'react-icons/md';
// import { ConeServerErrorAnimation, ServerErrorAnimation } from '../../components/AnimatedComponents';
import { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext/Context';
import { AddClientIcon, TaskDgIcon } from '../../assets/Icons';
import NewTaskForm from '../../components/Forms/NewTaskForm';
import DGModal from '../../components/Modals/DGModal';

//tela inicial da aplicação
const TasksPge: React.FC = () => {

  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [data, setData] = useState<CustomerDataTypes[]>([])

  const { state, setState: setModalState } = useContext(AppContext)

  const handleAction = ()=>{
    setModalState({openModal: true})
  }

  useEffect(() => {
    api.get('/customers').then(response => {
      setData(response.data);
      setLoading(true);
    }).catch(function(){
       setErrorMessage(true)
      console.log(AxiosError.ERR_BAD_REQUEST)
    })
  }, [])

  return (
    <Container>
      <NavBar />
      <Content>
      {
        state.openModal &&
        <DGModal title='Nova Tarefa' barTimmer>
          <NewTaskForm/>
        </DGModal>
        }
        {
        isLoading ? <>
          <TaskPageDivider>
          <div className="UserLabel"/>
          </TaskPageDivider>
          <TaskHeader>
            <div className="CustomerInfo">
              <TaskName>
              <TaskDgIcon/>
                <StyledText text='Tarefas' accent bold size='xl'/>
              </TaskName>
            </div>
            <div className="RightBox">
              <div className="infoLabel" id="contrato">
                <StyledText text='registrados' size='xs' bold/>
                <StyledText text={data.length} size='base' bold accent/>
              </div>
              <div className="AddNew">
              <AddClientIcon onClick={() => handleAction()}/>
              </div>
            </div>
          </TaskHeader>
        <TaskDataBox>
          <div className="TableLabel">
            {
              tableLabel.map(item => (
                <div className="labelBox" key={item.id}>
                  <span>{item.label}</span>
                </div>
              ))
            }
          </div>
            <TaskTable>
              {
              data.map(item => (
                <TaskRow key={item.id}>
                  <TaskCell id='name'>
                    <Link to="/customer">
                  <StyledText text={item.name} size='sm' accent isClickable/>
                    </Link>
                  </TaskCell >
                  <TaskCell id='holder_name'>
                  <StyledText text={item.holder.name} size='sm' accent isClickable/>
                  </TaskCell>
                  <TaskCell id='order'>
                  <StyledText text={item.bns_model} size='sm' accent isClickable/>
                  </TaskCell>
                  <TaskCell id='deal'>
                  <StyledText text={item.bns_tag} size='sm' accent isClickable/>
                  </TaskCell>
                  <RowIcon>
                  <OpenIcon  size={18} color={colors.actionColor}/>
                  </RowIcon>
                </TaskRow>
              ))
              }
            </TaskTable>
        </TaskDataBox>
        </> :
        <div className="loadingContainer">
          <Lottie
          loop
          animationData={dgthus_loader}
          play
          style={{ width: 100, height: 100 }}
          />   
        </div>
          // <div className="ServerErrorContainer">
          //   <ConeServerErrorAnimation/>
          //   <div className="ServerErrorMessage">
          //     <StyledText text='Sem comunicação com o servidor.'/>
          //     <StyledText text='Tente mais tarde.' bold/>
          //   </div>
          //         <StyledButton label='REPORTAR' size='188px'/>
          // </div>
        }
      </Content>
      <PoweredContainer/>
    </Container>
  )
}

export default TasksPge