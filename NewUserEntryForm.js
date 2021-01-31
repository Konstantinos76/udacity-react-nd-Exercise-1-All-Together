import React, { Component } from 'react'
import AddButton from './AddButton'

class NewUserEntryForm extends Component {
  state = {
    field1_val: "",
    field2_val: "",
    field3_val: ""
  }
  
  handleChange = (str, field) => {
    switch(field){
      case 1:
        this.setState({field1_val: str})
        break;
      case 2:
        this.setState({field2_val: str})
        break;
      default:
        this.setState({field3_val: str})
    }
  }

 addUser = (event) => {
  event.preventDefault()
  this.props.onAddUser(this.state.field1_val, this.state.field2_val, this.state.field3_val, 0)
  }

  
render() {
  const {field1_val, field2_val, field3_val} = this.state
  return(
      <div>
       <h3>Add New User</h3>
       <form onSubmit={this.addUser}>
       	<input
       	 type="text"
       	 placeholder='Enter Your First Name'
         value={this.state.input_field1_val}
         onChange={(event) => this.handleChange(event.target.value, 1)}/>
		<br/>
		<input
       	 type="text"
       	 placeholder='Enter Your Last Name'
         value={this.state.input_field2_val}
         onChange={(event) => this.handleChange(event.target.value, 2)}/>
		<br/>
		<input
       	 type="text"
       	 placeholder='Enter Your Username'
         value={this.state.input_field3_val}
         onChange={(event) => this.handleChange(event.target.value, 3)}/>
		<br/>
		<AddButton fieldValue1={field1_val} fieldValue2={field2_val} fieldValue3={field3_val} />
       </form>
      </div>
    )
  }
}

export default NewUserEntryForm