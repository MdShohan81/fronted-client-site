import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content grid lg:grid-cols-2 ">
    <div className="text-center hidden lg:block lg:text-start">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
          <p className='my-2'>Already have an Account? <Link className='text-primary font-medium text-decoration-none'  to="/login">Login</Link> </p>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-secondary">Sign Up</button>
        </div>
        <div class="divider">OR</div>
        <div className="form-control mt-2">
          <button className="btn btn-secondary">SignUp With Google</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;