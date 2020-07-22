import React, { Component } from 'react';
import './App.css';
import cssModuleTst from './cssModuleTst.module.css';
import Radium, {StyleRoot} from 'radium'
import styled from 'styled-components';
import Assignment1 from './Components/Assignment1';
import Assignment2 from './Components/Assignment2';
import TogglingDivWithBtnClassBased from './Components/TogglingDivWithBtn(ClassBased)';

class App extends React.Component  {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps');
		return state;
	}

/*
	componentWillMount() {
		console.log('[App.js] componentWillMount');
	}
*/

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

    render() {
    	console.log('[App.js] render');
		return (
			<StyleRoot>
				<div className="App">
					<TogglingDivWithBtnClassBased />
					<Assignment1 />
					<Assignment2 />
					<p className={cssModuleTst.Tst}>Hello World</p>
				</div>
			</StyleRoot>
		);
	}
}

export default Radium(App);