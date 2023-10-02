import React,{useState} from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {

    const [min, setMin] = useState("");
    const [max, setMax] =useState("");

    const searchHandler

    return (
        <div className={styles.container}>
            <div>
                <input placeholder="Enter min-price" vlaue={min} onChange={e=>setMin(e.target.value)}/>
                <input placeholder="Enter max-price" value={max} onChange={e=>setMax(e.target.value)}/>
            </div>
            <button onClick={searchHandler}>Search</button>
        </div>
    );
};

export default SearchBar;