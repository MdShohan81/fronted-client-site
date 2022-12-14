import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import auth from '../../firebase.init';

const Menubar = () => {
  const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth)
    }
    return (
        <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blogs</Link></li>
      {
        user ?
        <>
        <li><Link to='/manageinventory'>Manage Item</Link></li>
        <li><Link to='/myitem'>My Item</Link></li>
        <li><Link to='/addinventory'>Add Item</Link></li>
        <li><Link to="/login" onClick={handleSignOut}>Signout</Link></li>
        </>
        :
        <li><Link to='/login'>Login</Link></li>
      }
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" to='/'><img src={logo} alt="logo" /></Link>
  </div>
  <div className="navbar-end font-semibold text-lg hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blogs</Link></li>
      {
        user ?
        <>
        <li><Link to='/manageinventory'>Manage Item</Link></li>
        <li><Link to='/myitem'>My Item</Link></li>
        <li><Link to='/addinventory'>Add Item</Link></li>
        <li><Link to='/login' onClick={handleSignOut}>Signout </Link></li>
        </>
        :
        <li><Link to='/login'>Login</Link></li>
      }
      
    </ul>
  </div>
  
</div>
    );
};

export default Menubar;