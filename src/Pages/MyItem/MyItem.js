import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        
        const getOrders = async() =>{
            const email = user.email;
            const url = `http://localhost:4000/order?email=${email}`;
            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data)
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 403 || error.response.status === 401){
                    signOut(auth);
                    navigate('/login')
                }
            }

        }
        getOrders();


    }, [user])
    return (
        <div>
            <h1>My Orders Item:{orders.length}</h1>

        </div>
    );
};

export default MyItem;