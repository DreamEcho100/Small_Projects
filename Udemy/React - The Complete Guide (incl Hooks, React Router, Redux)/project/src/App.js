import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import Assignment1 from './Assignment1'
import Assignment2 from './Assignment2'

class App extends React.Component  {

    render() {
		return (
			<StyleRoot>
				<div className="App">
					<Assignment1 />
					<Assignment2 />
				</div>
			</StyleRoot>
		);
	}
}

export default Radium(App);