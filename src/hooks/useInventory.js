import { useEffect, useState } from 'react';

const useInventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const url = `https://young-fjord-06594.herokuapp.com/service`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCars(data))
    }, []);
    return [cars, setCars];
};

export default useInventory;