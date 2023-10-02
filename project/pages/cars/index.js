import React from 'react';
import carsData from '../../data/carsData';
import CarsPage from '../../components/templates/carsPage';
import Categories from '../../components/module/Categories';
import SearchBar from './../../components/module/SearchBar';

const Detasils = () => {
    return (
        <div>
            <SearchBar/>
            <Categories/>
           <CarsPage data={carsData}/> 
        </div>
    );
};

export default Detasils;