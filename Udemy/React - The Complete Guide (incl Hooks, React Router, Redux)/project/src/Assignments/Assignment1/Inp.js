import React from 'react';

const Inp = (props) => {

	return (
		<input type="text" onChange={props.change} value={props.current} />
	)
}

export default Inp;

/*
import React, { useState } from 'react';
import Output from './Output'

const Inp = (props) => {
	const [inp, setInp] = useState("");
	const mystyle = {
      border: "1px solid black",
      margin: "5px",
      padding: "2px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "lightblue"
    };
	return (
		<div
			style={mystyle}
		>
			<input type="text" value={inp} onChange={ (e) => setInp(e.target.value) } />
			<Output txt={inp}/>
		</div>
	)
}

export default Inp;
*/