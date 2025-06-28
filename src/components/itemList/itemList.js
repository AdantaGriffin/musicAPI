import React from 'react';
import styles from './itemList.module.css';
import Item from '../item/item';

function ItemList(props){
    return (
        <div className={styles.container}>
            {props.userSearchResults?.map((item) => (
                <Item 
                    item={item} 
                    key={item.id}
                />
            ))}
        </div>
    )
};

export default ItemList;