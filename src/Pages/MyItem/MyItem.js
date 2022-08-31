import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();


    useEffect( () =>{
        const getItems = async () =>{
        const email = user.email;
         const url = `http://localhost:4000/order/?email=${email}`;
         const {data} = await axios.get(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem}`
            }
         });
         setOrders(data);
        }
        getItems();
    },[user])



    

    const handleDelete = id => {
        fetch(`http://localhost:4000/order/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                const remaining = orders.filter(item => item._id !== id);
                setOrders(remaining);
                toast.success('Delete successfully')
            }
        })
    }

    return (
        <div className='min-h-screen my-8'>
            <h3>My Order: {orders.length}</h3>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>SL</th>
        <th>Service</th>
        <th>email</th>
        <th>phone</th>
        <th>quantity</th>
        <th>Remove</th>
        
      </tr>
    </thead>
    <tbody>
     {
         orders.map((order, index) => <tr key={order.id}>
            <th>{index + 1}</th>
            <th>{order.carname}</th>
            <td>{order.email}</td>
            <td>{order.number}</td>
            <td>{order.quantity}</td>
            <td><button onClick={() => handleDelete(order._id)} className='btn btn-md btn-secondary'>Delete</button></td>
            
          </tr>)
     }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyItem;