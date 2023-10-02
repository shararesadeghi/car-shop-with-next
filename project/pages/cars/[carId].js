import React from 'react';
import {useRouter} from 'next/router';
import carsData from '../../data/carsData';


const CarDetail = () => {

    const router = useRouter();
    const {carId} = router.query;
    const carDetails = carsData[carId - 1];
    return (
        <div>
        </div>
    );
};

export default CarDetail;