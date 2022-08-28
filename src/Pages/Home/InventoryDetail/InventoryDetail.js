import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const InventoryDetail = () => {
    const {serviceId} = useParams();
    const [cars, setCars] = useState({});
    useEffect( () => {
        const url = `http://localhost:4000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCars(data))

    }, [serviceId]);
    //handle item reduce quantity
   const handleReduceQuantity = () =>{
    const quantity = parseInt(cars.quantity) - 1;
    const updateQuantity = { quantity };
    const url = `http://localhost:4000/service/${serviceId}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateQuantity)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert('Delivery success');
        
    });
}

// re stoke product
const handleUpdateQuantity = event => {
    event.preventDefault();
    const quantity = parseInt(cars.quantity) + parseInt(event.target.quantity.value);
    const newQuantity = {quantity};
    const url = `http://localhost:4000/service/${serviceId}`;
    fetch(url, {
     method: 'PUT',
     headers: {
         'content-type': 'application/json'
     },
     body: JSON.stringify(newQuantity)
 })
 .then(res => res.json())
 .then(data => {
     console.log('success', data);
     alert('quantity added successfully');
     
 });

}
    
    return (
        <div className='max-h-max px-8'>
            <h1 className='text-2xl font-semibold my-4 first-letter:'>you choose this: <span className='text-secondary text-bold'>{cars.carname}</span></h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
                {/* //details page img */}
                <div className='card'>
                <img src={cars.img} alt="img" class="rounded-xl" />
                </div>
                {/* details page information */}
                <div className='card p-3 rounded-lg shadow-2xl border-secondary border'>
                <h2 class="text-xl ">Name: <span className='text-secondary font-semibold'>{cars.carname}</span></h2>
                <p className='text-md text-neutral'>Description: {cars.description}</p>
                
                <span className='text-xl py-2'>Price: <span className='text-secondary font-semibold'>${cars.price}</span></span> 
                <span className='text-xl'>Quantity: <span className='text-secondary font-semibold'>{cars.quantity}</span></span>
                <h3 className='text-neutral font-semibold text-xl py-2'>Supplier Name: {cars.suppliername}</h3>
                
                <div class="flex justify-between items-center my-4">
                <button onClick={handleReduceQuantity}  class="btn btn-md btn-secondary">Stock Out</button>
                </div>
                
            
                <div>
                <form onSubmit={handleUpdateQuantity}>
                    <input type="number" name="quantity" placeholder="quantity" required class="input input-bordered w-full max-w-xs" />
                    <button className='btn btn-md btn-secondary lg:ml-3 sm:my-4'>Add Stock</button>
                </form>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default InventoryDetail;