import React, { useState } from 'react';
import {Route, Link} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes

        <Route exact path="/" render={props=><MovieList {...props} savedList={savedList} />} />
        <Route path="/movies/:movieID" render={props=><Movie {...props} savedList={savedList} />} />

      </div>
    </div>
  );
};

export default App;
