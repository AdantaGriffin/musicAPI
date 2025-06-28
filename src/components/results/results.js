import {React} from 'react';
import styles from './results.module.css';
import ItemList from '../itemList/itemList';

function Results(props){
    return (
        <>
            <div className={styles.container}>
                <ItemList 
                    userSearchResults={props.userSearchResults}
                />
            </div>
        </>
    )
};

export default Results;