import{ useEffect, useState } from 'react';

const useInventoryDetails = (inventoryId) => {
    const [cars, setCars] = useState({});
    useEffect( () => {
        const url = `http://localhost:4000/service/${inventoryId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCars(data));

    }, [inventoryId])
    return [cars, setCars];
};

export default useInventoryDetails;