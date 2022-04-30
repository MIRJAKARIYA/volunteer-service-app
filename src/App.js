import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEvent from './components/AddEvent/AddEvent';
import EmailVerification from './components/EmailVerification/EmailVerification';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Events from './components/Events/Events';
import RegisteredVolunteers from './components/RegisteredVolunteers/RegisteredVolunteers';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/service/:serviceId' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>
        }></Route>
        <Route path='/events' element={
          <RequireAuth>
            <Events></Events>
          </RequireAuth>
        }></Route>
        <Route path='/addevent' element={
          <RequireAuth>
            <AddEvent></AddEvent>
          </RequireAuth>
        }></Route>
        <Route path='registeredvolunteers' element={
          <RequireAuth>
            <RegisteredVolunteers></RegisteredVolunteers>
          </RequireAuth>
        }></Route>
        <Route path='/emailverification' element={<EmailVerification></EmailVerification>}></Route>
      </Routes>
    </div>
  );
}

export default App;
