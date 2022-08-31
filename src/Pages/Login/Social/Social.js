import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorMessages;
    if(error){
        errorMessages = <div>
            <p className='text-secondary'>{'something gone wrong'}</p>
        </div>
    }
    if(user){
        navigate(from, { replace: true });
    }
    if(loading){
        return <>
            <div className='h-screen text-center my-14'>
            <button class="btn loading">loading</button>
      </div>
      </>;
    }
    return (
        <div>
            <div className="form-control mt-2">
            {errorMessages}
          <button onClick={() => signInWithGoogle()} className="btn btn-secondary">Login With Google</button>
        </div>
        </div>
    );
};

export default Social;