import {React, useState} from 'react';
import styles from './App.module.css';

import Header from '../header/header';
import SearchBar from '../searchBar/searchBar';
import Results from '../results/results';
import { APIsearch } from '../api/api';

function App() {

  const [searchResults, setSearchResults] = useState([]);

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
