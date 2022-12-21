import {Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import IndexPage from './pages/IndexPage'
import UserPage from './pages/UserPage'
import RoiPage from './pages/RoiPage'
import CustomerPage from './pages/CustomerPage'
import CustomersPage from './pages/CustomersPage'
import RegisterUserPage from './pages/RegisterUserPage'
import ForgotPage from './pages/ForgotPage'
import TasksPage from './pages/TasksPage'
import { useParams } from 'react-router-dom';

export function PageRoutes(){
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home/:userId" element={<IndexPage/>}/>
      <Route path="/profile/:userId" element={<UserPage/>}/>
      <Route path="/roi" element={<RoiPage/>}/>
      <Route path="/customer/:customerId" element={<CustomerPage/>}/>
      <Route path="/customers/:userId" element={<CustomersPage/>}/>
      <Route path="/register" element={<RegisterUserPage/>}/>
      <Route path="/forgot" element={<ForgotPage/>}/>
      <Route path="/tasks/:userId" element={<TasksPage/>}/>
      {/* <Route path="/customer/:id" element={<CustomerPage/>}/> */}
    </Routes>
  )
}