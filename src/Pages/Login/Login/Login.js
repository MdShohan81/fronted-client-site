import React from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";


const Login = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';


     //email password login
     const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
      ] = useSignInWithEmailAndPassword(auth);

    if(eUser || user ) {
      navigate(from, { replace: true });
    }

    
      if(eLoading || loading){
        return <>
            <div className='text-center mt-14'>
        <progress class="progress w-56 text-center"></progress>
      </div>
        </>;
      }


   

    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
        
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
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
        <input type="text" placeholder="email" className="input input-bordered" 
          {...register("mail", { required: "Email Address is required" })}
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" 
          {...register("password", { required: "password is required" })}
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
        <div className="form-control mt-2">
          <button onClick={() => signInWithGoogle()} className="btn btn-secondary">Login With Google</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;