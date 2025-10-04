import {React, useState} from 'react';
import styles from './App.module.css';

import Header from '../header/header';
import SearchBar from '../searchBar/searchBar';
import Results from '../results/results';
import { APIsearch } from '../api/api';

function App() {

  const [searchResults, setSearchResults] = useState([
    {
      image: 'image',
      name: 'Drake',
      album: 'Been HIM',
      song: 'Godfather',
      id: 1
    },
    {
      image: 'image',
      name: 'Future',
      album: 'NFL',
      song: 'CICI',
      id: 2
    },
    {
      image: 'image',
      name: 'Kanye West',
      album: 'On Sum',
      song: 'Defiante',
      id: 3
    },
    {
      image: 'image',
      name: 'Lil BAby',
      album: 'Pampher',
      song: 'Played Out',
      id: 4
    },
  ]);

  function search(term){
    APIsearch(term).then(result => setSearchResults(result));
    //console.log(APIsearch(term));
  }

  return (
    <div className={styles.app}>
      <div className={styles.site}>
        <Header
        className={styles.headerCom}/>
        <SearchBar
        onSearch={search}
      />
        <Results userSearchResults={searchResults}/>
      </div>
    </div>
  );
}

export default App;
