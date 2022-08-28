import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menubar from './Shared/Menubar/Menubar';
import Home from './Pages/Home/Home/Home';
import {Routes, Route } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import InventoryDetail from './Pages/Home/InventoryDetail/InventoryDetail';
import ManageInventory from './Pages/ManageInventory/ManageInventory';

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={
        <RequireAuth>
          <InventoryDetail></InventoryDetail>
        </RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={
        <RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer> 
      <ToastContainer></ToastContainer>     
    </div>
  );
}

export default App;
