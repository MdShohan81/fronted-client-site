import{ useEffect, useState } from 'react';

const useInventoryDetails = (serviceId) => {
    const [cars, setCars] = useState({});
    useEffect( () => {
        const url = `https://young-fjord-06594.herokuapp.com/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCars(data));

    }, [serviceId])
    return [cars, setCars];
};

export default useInventoryDetails;