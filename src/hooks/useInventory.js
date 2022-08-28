import { useEffect, useState } from 'react';

const useInventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const url = `http://localhost:4000/service`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCars(data))
    }, []);
    return [cars, setCars];
};

export default useInventory;