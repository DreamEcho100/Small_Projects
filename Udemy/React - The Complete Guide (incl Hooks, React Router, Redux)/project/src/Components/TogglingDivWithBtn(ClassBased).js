import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components';

const ToggleElement = styled.div`
						margin: 1rem;
						background-image: linear-gradient(to left, #${Math.random().toString(16).substr(-6)}, #${Math.random().toString(16).substr(-6)});
						color: #${Math.random().toString(16).substr(-6)};
						font-size: 3rem;
						font-weight: 700;
						align-text: center;
					`;

let elem1;				

const style1 = {
	width: "75%",
	hight: "20rem",
	margin: "auto",
	textAlign: "center"
}

class TogglingDivWithBtnClassBased extends React.Component  {
	constructor(props) {
		super(props);
	}

	state = {
		showElem: true
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[TogglingDivWithBtn(ClassBased).js] getDerivedStateFromProps');
		console.log(state);
		return state;
	}
/*
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[TogglingDivWithBtn(ClassBased).js] shouldComponentUpdate');
		console.log({state: this.state, nextState: nextState});
		return {state: this.state, nextState: nextState};
	}
*/
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[TogglingDivWithBtn(ClassBased).js] getSnapshotBeforeUpdate');
		return {prevProps: prevProps, prevState:prevState}
	}

	componentDidUpdate(prevProps, prevState, snapeshot) {
		console.log('[TogglingDivWithBtn(ClassBased).js] componentDidUpdate');
		console.log(snapeshot);
	}

	toggleElem = () => {
		this.setState({showElem: !this.state.showElem});
		if (this.state.showElem) {
			elem1 = <ToggleElement>Boooooooooo!!!</ToggleElement>;
		} else {
			elem1 = null;
		}
	}

    render() {
    	console.log('[TogglingDivWithBtn(ClassBased).js] rendering...');
		return (
			<div style={style1}>
				<button onClick={this.toggleElem}>Click To Show :)</button>
				{elem1}
			</div>
		);
	}
}

export default Radium(TogglingDivWithBtnClassBased);