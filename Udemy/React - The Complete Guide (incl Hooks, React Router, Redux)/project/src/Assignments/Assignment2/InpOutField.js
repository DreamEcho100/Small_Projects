import React, { useState } from 'react';
import ValidationComponent from './ValidationComponent';

const InpOutField = (props) => {
	let cur = props.current;
	const mystyle = {
      border: "1px solid black",
      margin: "5px",
      padding: "2px",
      display: "inline-block",
      textAlign: "center",
      height: "fit-content",
      backgroundColor: "orangered"
    };
/*
*/

	return (
		<div style={mystyle}>
			<input type="text" onChange={props.change} value={cur}/>
			
			<ValidationComponent length={cur.length} />
			<span onClick={props.click}>X</span>
		</div>
	)
}

export default InpOutField;