import React, { Component, Fragment } from 'react';
import './App.css';
import cssModuleTst from './cssModuleTst.module.css';
import Radium, {StyleRoot} from 'radium'
import styled from 'styled-components';
import Assignment1 from './Components/Assignment1';
import Assignment2 from './Components/Assignment2';
import TogglingDivWithBtnClassBased from './Components/TogglingDivWithBtnClassBased';
import TogglingDivWithBtnFunctionBased from './Components/TogglingDivWithBtnFunctionBased';

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
	componentWillUnmount() {
		console.log('[App.js] componentWillUnmount');
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

    render() {
    	console.log('[App.js] render');
		return (
			<Fragment>
				<StyleRoot>
					<div className="App">
						<TogglingDivWithBtnClassBased />
						<Assignment1 />
						<Assignment2 />
						<p className={cssModuleTst.Tst}>Hello World</p>
						<TogglingDivWithBtnFunctionBased />
					</div>
				</StyleRoot>
			</Fragment>
		);
	}
}

export default Radium(App);