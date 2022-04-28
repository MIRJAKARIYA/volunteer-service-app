import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEvent from './components/AddEvent/AddEvent';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/addevent' element={<AddEvent></AddEvent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
