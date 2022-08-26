import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryCard from '../InventoryCard/InventoryCard';

const Inventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])
    return (
        <div className="my-16 mx-auto bg-base-100">
            <h1 className='text-center md:text-3xl text-2xl font-bold'>Latest <span className='text-secondary'>Trending</span> Ads</h1>
            <h2 className='text-center md:text-2xl text-xl font-normal text-neutral my-4'>Search your car in our Inventory and request a quote on the vehicle of your choosing.</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 lg:mx-8 mt-16'>
                {
                    cars.slice(0,6).map(car => <InventoryCard
                    key={car._id}
                    car={car}
                    ></InventoryCard>)
                }
                
            </div>
            <Link to="/manageinventory"><button className='btn btn-secondary mx-8 mt-10 px-8'>See More Cars</button></Link>
        </div>
    );
};

export default Inventory;