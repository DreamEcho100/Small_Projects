import React from 'react';

const CharComponent = (props) => {
	
	const myCharStyle = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black"
    };

	return (
		<div style={myCharStyle} onClick={props.click}>
			{props.charachter}
		</div>
	)
}

export default CharComponent;