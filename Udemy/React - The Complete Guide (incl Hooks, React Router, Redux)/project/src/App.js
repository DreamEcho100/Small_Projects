import React, { Component } from 'react';
import './App.css';
import Assignment1 from './Assignment1'
import Assignment2 from './Assignment2'

class App extends React.Component  {

    render() {	
		return (
			<div className="App">
				<Assignment1 />
				<Assignment2 />
			</div>
		);
	}
}

export default App;