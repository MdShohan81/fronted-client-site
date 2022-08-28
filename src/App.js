import './App.css';
import Menubar from './Shared/Menubar/Menubar';
import Home from './Pages/Home/Home/Home';
import {Routes, Route } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import InventoryDetail from './Pages/Home/InventoryDetail/InventoryDetail';

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>      
    </div>
  );
}

export default App;
