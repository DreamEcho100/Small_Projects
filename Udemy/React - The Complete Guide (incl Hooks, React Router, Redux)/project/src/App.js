import React, { Component } from 'react';
import './App.css';
import cssModuleTst from './cssModuleTst.module.css';
import Radium, {StyleRoot} from 'radium'
import Assignment1 from './Assignment1'
import Assignment2 from './Assignment2'

class App extends React.Component  {

    render() {
    	console.log(cssModuleTst.Tst, cssModuleTst)
		return (
			<StyleRoot>
				<div className="App">
					<Assignment1 />
					<Assignment2 />
					<p className={cssModuleTst.Tst}>Hello World</p>
				</div>
			</StyleRoot>
		);
	}
}

export default Radium(App);