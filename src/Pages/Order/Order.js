import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useInventoryDetails from '../../hooks/useInventoryDetails';

const Order = () => {
  const {serviceId} = useParams()
  const [cars] = useInventoryDetails(serviceId);
  const [user] = useAuthState(auth);

  const handleOrder = event => {
    event.preventDefault();
    const order = {
      email: user.email,
      cars: cars.name,
      serviceId: serviceId,
      number: event.target.number.value,
      address: event.target.address.value
    }
    axios.post('http://localhost:4000/order', order)
    .then(response => {
      const {data} = response;
      if(data.insertedId){
        toast.success('Your order is booked');
        event.target.reset();
      }
    })

  }

  return (
    <div className='my-8'>
      <h1 className='text-center text-3xl mb-8'>Place Order: <span className='font-semibold'>{cars.carname}</span></h1>
      <div className='flex justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <form onSubmit={handleOrder} className='grid grid-rows-6 gap-3 m-8'>
        <input type="text" name='name' placeholder="name" value={user?.displayName} readOnly class="input input-bordered w-full max-w-xs" />
        <input type="email" name='email' placeholder="email" value={user?.email} readOnly disabled class="input input-bordered w-full max-w-xs" />
        <input type="text" name='carname' placeholder="carname" value={cars.carname} class="input input-bordered w-full max-w-xs"  readOnly disabled/>
        <input type="number" name='number' placeholder="number" class="input input-bordered w-full max-w-xs" required/>
        <input type="text" name='address' placeholder="address" class="input input-bordered w-full max-w-xs" required/>
        <button className='btn btn-secondary'>Order Now</button>
        </form>
      </div>
      
    </div>
    </div>
  );
};

export default Order;