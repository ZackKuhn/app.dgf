import React, { useState, ChangeEvent, FormEvent,SelectHTMLAttributes } from 'react';

import { useParams } from 'react-router-dom'
// import { StyledDialog } from './MuiStyles'

//Mui components
// import TextField from '@mui/material/TextField';
// import DialogContent from '@mui/material/DialogContent';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { SelectChangeEvent } from '@mui/material/Select'
import StyledButton from '../StyledButton'
// import SnackAlert from '../SnackAlert'

import { ProfileIcon, EditIcon } from '../../assets/Icons'

import { Container, Content } from './styles';

interface EditProps {
  additem?: boolean;
}

interface TaskProps {
  touser: string;
  category: string;
  description: string;
  taskclient: string;
  status: boolean;
}

interface ParamTypes {
  userId: string;
}


const EditProfile = () => {

  const [open, setOpen] = useState(false);

  // const { userId } = useParams<ParamTypes>()

  const [formData, setFormData] = useState<TaskProps[]>([]);

  const [who, setWho] = useState('');
  const [what, setWhat] = useState('');
  const [Cliente, setCliente] = useState('');
  const [description, setDescription] = useState('');
  const [taskList, setTaskList] = useState('');

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
    setWho('')
    setWhat('')
    setCliente('')
    setDescription('')
    setTaskList('')
  }

  // const whathandleChange = (event: SelectChangeEvent) => {
  //   const { name, value } = event.target
  //   setWhat(value);

  //   setFormData({ ...formData, [name]: value })
  // };

  // const whohandleChange = (event: SelectChangeEvent) => {
  //   const { name, value } = event.target
  //   setWho(value);
  //   setFormData({ ...formData, [name]: value })
  // };

  // const ClientehandleChange = (event: SelectChangeEvent) => {
  //   const { name, value } = event.target
  //   setCliente(value);
  //   setFormData({ ...formData, [name]: value })
  // };

  const deschandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setDescription(value);
    setFormData({ ...formData, [name]: value })
  };

  const linkHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setTaskList(value);
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

  }

  return (
    <Container>
      
    </Container >
  );
}

export default EditProfile