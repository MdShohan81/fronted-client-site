import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {

  const [signInWithGoogle, gUser, gError, gLoading] = useSignInWithGoogle(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    // navigate 
    const navigate = useNavigate();
    //react firebase hooks create new user
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    // user 
      if(user || gUser){
        navigate('/')
    }

    //Error handle
    if (error || gError) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }

  const signUpFormSubmit = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
    navigate('/')
    
}

if(loading || gLoading){
  return <>
      <div className='mx-auto mt-14'>
        <progress class="progress w-56 text-center"></progress>
      </div>
  </>;
}

    return (
        <div className="hero min-h-screen bg-base-100">
  <div className="hero-content grid lg:grid-cols-2 ">
    <div className="text-center hidden lg:block lg:text-start">
      <h1 className="text-5xl font-bold text-secondary">Register Now!</h1>
      <p className="py-6 text-neutral">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
      <div className="card-body">
        <form onSubmit={signUpFormSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" ref={emailRef} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" ref={nameRef} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" ref={passwordRef} className="input input-bordered" />
          <label className="label">
          <p className='my-2'>Already have an Account? <Link className='text-primary font-medium text-decoration-none'  to="/login">Login</Link> </p>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-secondary">Sign Up</button>
        </div>
        </form>
        <div class="divider">OR</div>
        <div className="form-control mt-2">
          <button onClick={() => signInWithGoogle()} className="btn btn-secondary">SignUp With Google</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;