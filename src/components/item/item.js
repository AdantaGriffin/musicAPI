import React from 'react';
import styles from './item.module.css';

function Item(props){
    return (
        <div className={styles.container}>
            <div className={styles['item-information']}>
                <img className={styles.img}  src={props.item.image} alt="image"/>
                <h3 className={styles.h3}> {props.item.name}</h3>
                <h4 className={styles.h4}> {props.item.album}</h4>
                <p className={styles.p}> {props.item.song}</p>
                <p>
                    <audio controls>
                        <source src={props.item.preview} type="audio/mpeg"></source>
                    </audio>
                </p>
            </div>
        </div>
    )
};

export default Item;