import React, { useRef } from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import axios from 'axios';
import Social from '../Social/Social';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';


     //email password login
     const [
        signInWithEmailAndPassword,
        user,
        loading,
      ] = useSignInWithEmailAndPassword(auth);

    if(user) {
      // navigate(from, { replace: true });
    }

    
      if(loading){
        return <>
            <div className='h-screen text-center my-14'>
            <button class="btn loading">loading</button>
      </div>
        </>;
      }


   

    const loginHandleSubmit = async event => {
      event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
       await  signInWithEmailAndPassword(email, password);
       const {data}  = await axios.post('https://young-fjord-06594.herokuapp.com/login', {email});
       console.log(data)
       localStorage.setItem('accessToken', data.accessToken);
       navigate(from, { replace: true });

        
    };

    return (
        <div className="hero min-h-screen bg-base-100">
  <div className="hero-content grid lg:grid-cols-2 ">
    <div className="text-center hidden lg:block lg:text-start">
      <h1 className="text-5xl font-bold text-secondary">Login now!</h1>
      <p className="py-6 text-neutral">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-3xl bg-base-200">
      <div className="card-body">
        <form onSubmit={loginHandleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
        <input type="text" ref={emailRef} placeholder="email" className="input input-bordered" 
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" ref={passwordRef} placeholder="password" className="input input-bordered" 
          
          />
          <label className="label">
          <p className='my-2'>New To Carspot <Link className='text-primary font-medium text-decoration-none'  to="/signup">Create Account</Link> </p>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-secondary">Login</button>
        </div>
        </form>
       
        <div class="divider">OR</div>
        {/* //Social login */}
        <Social></Social>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;