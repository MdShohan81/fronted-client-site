import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryCard = ({car}) => {
    const {_id,carname, img,price,suppliername,rating,quantity,description} = car;

    const navigate = useNavigate()

    const navigateToDetails = id =>{
        navigate(`/service/${id}`)
    }

    return (
        <div class="card lg:max-w-lg md:max-w-md sm:max-w-sm bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="text-xl font-semibold">{carname}</h2>
            <p className='text-md text-neutral'>{description}</p>
            <p className='flex justify-between'>
            <span className='text-secondary font-bold text-xl'> ${price}</span> 
            <span className='text-secondary font-bold text-xl'>Quantity: {quantity}</span>
            </p>
            <div class="flex justify-between items-center my-4">
            <h3 className='text-neutral font-semibold text-xl'>Supplier: {suppliername}</h3>
            <button onClick={() => navigateToDetails(_id)} class="btn btn-md btn-secondary px-8 animate-bounce transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-700 border-none">Update</button>
            </div>
        </div>
        </div>
    );
};

export default InventoryCard;