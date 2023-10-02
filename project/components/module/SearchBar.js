import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <div>
                <input placeholder="Enter min-price"/>
                <input placeholder="Enter max-price"/>
            </div>
            <button>Search</button>
        </div>
    );
};

export default SearchBar;