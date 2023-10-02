import React from 'react';
import carsData from '../../data/carsData';
import CarsPage from '../../components/templates/carsPage';

const Detasils = () => {
    return (
        <div>
           <CarsPage data={carsData}/> 
        </div>
    );
};

export default Detasils;