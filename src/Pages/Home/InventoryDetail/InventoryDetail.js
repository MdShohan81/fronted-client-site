import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const InventoryDetail = () => {
    const {serviceId} = useParams();
    const [cars, setCars] = useState({});
    const [update, setUpdate] = useState({})
    useEffect( () => {
        const url = `https://young-fjord-06594.herokuapp.com/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCars(data))

    }, [update]);

    // handle product quantity reduce 
    const handleReduceQuantity = () => {
        if(cars.quantity > 0){
            const newQuantity = parseInt(cars.quantity) - 1;
            const updateQuantity = {quantity:newQuantity}
            const url = `https://young-fjord-06594.herokuapp.com/service/${serviceId}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQuantity)
            })
            .then(res => res.json())
            .then(data => {
                setUpdate(data)
                toast.success('Quantity Delivered Success')
            })

        }
        else{
            toast.error('data is not update')
        }
    }





// re stoke product
const handleUpdateQuantity = event => {
    event.preventDefault();
    const newQuantity = parseInt(cars.quantity) + parseInt(event.target.quantity.value);
    const updateQuantity = {quantity: newQuantity};
    const url = `https://young-fjord-06594.herokuapp.com/service/${serviceId}`;
    fetch(url, {
     method: 'PUT',
     headers: {
         'content-type': 'application/json'
     },
     body: JSON.stringify(updateQuantity)
 })
 .then(res => res.json())
 .then(data => {
     setUpdate(data)
     toast.success('Quantity Restock successfully');
     event.target.reset();
     
 });

}
    
    return (
        <div className='max-h-max px-8'>
            <h1 className='text-2xl font-semibold my-4 first-letter:'>you choose this: <span className='text-secondary text-bold'>{cars.carname}</span></h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 my-8'>
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
                <button onClick={handleReduceQuantity}  class="btn btn-md btn-secondary">Delivered</button>
                </div>
                <Link to={`/order/${serviceId}`}><button className='btn btn-secondary my-3'>proceed checkout</button></Link>
            
                <div>
                <form onSubmit={handleUpdateQuantity}>
                    <input type="number" name="quantity" placeholder="quantity" required className="input input-bordered w-full lg:m-0 mb-3 max-w-xs" />
                    <button className='btn btn-md btn-secondary lg:ml-3 '>Add Stock</button>
                </form>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default InventoryDetail;