import React from 'react';
import carsData from '../../data/carsData';
import CarsPage from '../../components/templates/carsPage';
import Categories from '../../components/module/Categories';

const Detasils = () => {
    return (
        <div>
            <Categories/>
           <CarsPage data={carsData}/> 
        </div>
    );
};

export default Detasils;