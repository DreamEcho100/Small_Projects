import React from 'react';

const CharComponent = (props) => {
	
	const myCharStyle = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black"
    };

    const randomNum = Math.random();
    if ( ( randomNum > 0.5) ) {
    	const altColor = `#${randomNum.toString(16).substr(-6)}`;
    	myCharStyle['backgroundColor'] = altColor;
    } else {
    	const altColor = `#${randomNum.toString(16).substr(-6)}`;
    	myCharStyle['border'] = `3px solid ${altColor}`;
    	myCharStyle['padding'] = `13px`;
    }

	return (
		<div style={myCharStyle} onClick={props.clicked}>
			{props.character}
		</div>
	)
}

export default CharComponent;