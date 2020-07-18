import React, { useState } from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

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
    const deleteTargetChar = (idx) => {
    	console.log(this)
    	const temp = cur.slice().split("");
    	temp.splice(idx, 1)
    	const newTemp = temp.join("");
    	cur = newTemp
    }
    //click={ () => deleteTargetChar(idx) }
*/
    const buildingChars = () => {
    	let charsCard = cur.slice().split("").map( (char, idx) => {
	    	return <CharComponent 
	    				charachter={char}
	    				key={idx}
	    				
	    			/>
    	})
    	return charsCard;
    }

	return (
		<div style={mystyle}>
			<input type="text" onChange={props.change} value={cur}/>
			{buildingChars()}
			<ValidationComponent length={cur.length} />
			<span onClick={props.click}>X</span>
		</div>
	)
}

export default InpOutField;