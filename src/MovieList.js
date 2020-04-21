import React, {Component} from 'react'
import UsersList from './UsersList'

class MovieList extends Component {
  getFavoriteUsers(movieID) {
    movieID = String(movieID);
  	return this.props.profiles.reduce((usersLists, currentUser) => {
    	if(currentUser.favoriteMovieID === movieID){
          usersLists.push(this.props.users[currentUser.userID]);
        }
      return usersLists;
    }, []);
  }
  render() {
  	return <ol>
      {Object.values(this.props.movies).map((movie) => (
      	<li key={movie.id}>
			<h2>{movie.name}</h2>
			<UsersList movieID={movie.id} users={this.getFavoriteUsers(movie.id)}/>
		</li>
      ))}
    </ol>
  }
}

export default MovieList