import React, { Component } from 'react';
import './App.css';
import Inp from './Assignments/Assignment1/Inp'
import Output from './Assignments/Assignment1/Output'

class App extends React.Component  {
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
			<div className="App">
				<div style={this.mystyle}>
					<Inp 
						change={this.changeTheInp}
						current={ this.state.inp}
					/>
					<Output change={this.state.inp} />
				</div>
			</div>
		);
	}
}

export default App;

/*
import React from 'react';
import './App.css';
import Inp from './Assignments/Assignment1/Inp'

function App() {
  return (
    <div className="App">
    	<Inp />
    	<Inp />
    </div>
  );
}

export default App;
*/