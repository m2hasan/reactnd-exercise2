import React, {Component} from 'react'

class UsersList extends Component {
  render(){
    return (this.props.users.length > 0) ?
    <ol>
      {this.props.users.map((user) => (
      	<li key={`${this.props.movieID}_${user.id}`}>
			{user.name}
        </li>
      ))}
      </ol>:
	<p>None of the current users liked this movie</p>
  }
}

export default UsersList