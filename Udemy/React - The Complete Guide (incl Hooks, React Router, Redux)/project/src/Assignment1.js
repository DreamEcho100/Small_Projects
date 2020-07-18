import React, { Component } from 'react';
import Inp from './Assignments/Assignment1/Inp'
import Output from './Assignments/Assignment1/Output'

class Assignment1 extends React.Component  {
	state = {
		inp: 'lol'
	}

	changeTheInp = (e) => {
		this.setState({inp: e.target.value});
	}

	mystyle = {
      border: "1px solid black",
      margin: "5px",
      padding: "2px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "lightblue"
    };

    render() {	
		return (
			<div style={this.mystyle}>
				<Inp 
					change={this.changeTheInp}
					current={this.state.inp}
				/>
				<Output change={this.state.inp} />
			</div>
		);
	}
}

export default Assignment1;



/*
import React from 'react';
import Inp from './Assignments/Assignment1/Inp'

function Assignment1() {
  return (
    <Inp />
  );
}

export default Assignment1;
*/