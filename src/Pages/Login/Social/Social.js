import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    

    if(user){
        navigate(from, { replace: true });
    }
    
    
    return (
        <div>
            <div className="form-control mt-2">
            
          <button onClick={() => signInWithGoogle()} className="btn btn-secondary">Login With Google</button>
        </div>
        </div>
    );
};

export default Social;