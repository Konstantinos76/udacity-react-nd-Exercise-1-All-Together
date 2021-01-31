import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './UsersList'
import NewUserEntryForm from './NewUserEntryForm'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
   state = {
    users: [],
    userExistsMessage: '' 
  };

  handleAddUser = (firstName, lastName, username, noOfGamesPlayed) => {
    const newUser = {
      firstName,
      lastName,
      username,
      noOfGamesPlayed
    }
    
    const userExists = this.state.users.filter((user) => (
      user.username === newUser.username
    ))
    
    userExists.length === 0 
    ? this.setState((currentState) => ({
       users: [...currentState.users, newUser],
       userExistsMessage: '' 
      })) 
    : this.setState({userExistsMessage: 'This Username Already Exists!'})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<p style={{color: "red"}}>{this.state.userExistsMessage}</p>
        <NewUserEntryForm onAddUser={this.handleAddUser} />
    	<UsersList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
