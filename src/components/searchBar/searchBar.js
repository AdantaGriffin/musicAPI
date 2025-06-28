import {React, useState} from 'react';
import styles from './searchBar.module.css';

function SearchBar(props){

    const [term, setTerm] = useState('');

    function passTerm(){
        props.onSearch(term);
    };
      
    function handleTermChange({ target }){
        setTerm(target.value);
    }
    return (
        <>
            <div className={styles.container}>
                <input onChange={handleTermChange} className={styles.userInput} type='text' id='userSearch' placeholder='search name | album | song'/>
                <button onClick={passTerm} className={styles.searchButton} id='searchButton'>Search</button>
            </div>
        </>
    )
};

export default SearchBar;