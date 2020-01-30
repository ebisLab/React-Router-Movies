import React from 'react';
import {Route, Link} from 'react-router-dom';
import MovieList from './MovieList';
import {useHistory} from 'react-router-dom'



const SavedList = props => {

  const history = useHistory();
  console.log('our history', history)
  const routeBackHome = () =>{

    setTimeout(()=>{
history.push('/')
    }, 1000)

  }

  return (
  
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button" onClick={routeBackHome}>
      Home
      {/* <a href="google.com">Hello World</a> */}
      {/* <Link to='/'>Home</Link> */}
       <Route path="/"/>
      </div>
  </div>
);}

export default SavedList;
