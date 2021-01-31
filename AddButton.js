import React from 'react'

const AddButton = (props) => {
  return(
      <button 
    	disabled={props.fieldValue1 === '' || props.fieldValue2 === '' || props.fieldValue3 === ''}>
		Add
	  </button>
    )
}

export default AddButton