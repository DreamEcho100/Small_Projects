import React from 'react';

const ValidationComponent = (props) => {
 let shortOrLong;
 if (props.length < 5) {
  shortOrLong = "Text too short";
 }
 if (props.length > 15) {
  shortOrLong = "Text long enough";
 }
	return (
		<div>{shortOrLong}</div>
	)
}

export default ValidationComponent;