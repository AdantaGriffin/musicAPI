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
                <div className={styles.containerInputs}>
                    <input onChange={handleTermChange} className={styles.userInput} type='text' id='userSearch' placeholder='Search: Name | Album | Song'/>
                    <button onClick={passTerm} className={styles.searchButton} id='searchButton'>Search</button>
                </div>
            </div>
        </>
    )
};

export default SearchBar;