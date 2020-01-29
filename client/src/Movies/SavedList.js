import React from 'react';
import {Route, Link} from 'react-router-dom';
import MovieList from './MovieList';
import {useHistory} from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">
      {/* Home */}
      {/* <a href="google.com">Hello World</a> */}
      <Link to='/'>Home</Link>
       <Route path="/"/>
      </div>
  </div>
);

export default SavedList;
