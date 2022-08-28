import React from 'react';
import useInventory from '../../hooks/useInventory';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageInventory = () => {
    const [cars, setCars] = useInventory();

    //delete single inventory product or service
    const deleteInventory = id => {
        const proceed = window.confirm('are you sure');
        if(proceed){
            const url =`http://localhost:4000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = cars.filter(item => item._id !== id);
                setCars(remaining);
                toast.success('Inventory Delete Successfully')
            })
        }

    }

    return (
        <div className='my-8 mx-auto'>
            <h1 className='text-center text-3xl font-bold my-8 text-secondary'>All Inventory</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 lg:mx-8 mt-16'>
                {
                    cars.map(car => <div key={car._id} class="card lg:max-w-lg md:max-w-md sm:max-w-sm bg-base-100 shadow-xl">
                    <figure><img src={car.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-xl font-semibold">{car.carname}</h2>
                        <p className='text-md text-neutral'>{car.description}</p>
                        <p className='flex justify-between'>
                        <span className='text-secondary font-bold text-xl'> ${car.price}</span> 
                        <span className='text-secondary font-bold text-xl'>Quantity: {car.quantity}</span>
                        </p>
                        <div class="flex justify-between items-center my-4">
                        <h3 className='text-neutral font-semibold text-xl'>Supplier: {car.suppliername}</h3>
                        <button onClick={() => deleteInventory(car._id)} class="btn btn-md btn-secondary px-8">Delete</button>
                        </div>
                    </div>
                    </div>)
                }
            </div>
            <Link to="/addinventory"><button className='btn btn-secondary mx-8 mt-10 px-8 text-white'>Add Product</button></Link>
 
        </div>
    );
};

export default ManageInventory;