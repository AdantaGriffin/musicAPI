import {React} from 'react';
import styles from './header.module.css';

function Header(){
    return (
        <>
            <header className={styles.header}>
                <h1>Catalogue</h1>
                <h2>preview top songs today..</h2>
            </header>
        </>
    )
}

export default Header;