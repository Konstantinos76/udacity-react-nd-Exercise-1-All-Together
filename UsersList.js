import React, { Component } from 'react';

class UsersList extends Component {
  state = {
    showNoOfGamesPlayed: true
  }

  toggleNoOfGamesPlayed = () => {
    this.setState((currentState) => ({
      showNoOfGamesPlayed: !currentState.showNoOfGamesPlayed
    }))
  }

  render() {
    const btnText=this.state.showNoOfGamesPlayed
    ? 'Hide the Number of Games Played'
    : 'Show the Number of Games Played' 
    
    return(
      <div>
    	<h3>Users List</h3>
        <ul type='none'>
          {this.props.users.map((user, index) => (
           <li key={index}>
			{this.state.showNoOfGamesPlayed
             ? <p>{`${user.username} has played ${user.noOfGamesPlayed} games`}</p>
             : <p>{`${user.username} has played * games`}</p>
                }
           </li>
             ))}       
         </ul>
		 {this.props.users.length > 0 && (
			<button
			 id='btn'
			 style={{fontSize: '12px'}}
			 onClick={() => (this.toggleNoOfGamesPlayed())}>
			 {btnText}
		    </button>
		  )}  
      </div>
    )
  }
}

export default UsersList