import React, { Component } from 'react';
import styled from 'styled-components';
import InpOutField from './Assignments/Assignment1/InpOutField';

const StyleDiv = styled.div`
	border: 1px solid black;
	margin: 5px;
	padding: 5px,
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: lightblue;
	text-align: center;
	transition: all 0.5s;

	&:hover {
		border: 3px solid black;
		margin: 3px;
	}

	@media (max-width: 980px) {
		background-color: blue;
	}

	@media (max-width: 570px) {
		background-color: red;
	}

	@media (max-width: 320px) {
		background-color: yellow;
	}
`;

class Assignment1 extends React.Component  {
	state = {
		inp: 'lol'
	}

	changeTheInp = (e) => {
		this.setState({inp: e.target.value});
	}
/*
	mystyle = {
      border: "1px solid black",
      margin: "5px",
      padding: "2px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "lightblue"
    };
    // style={this.mystyle}
*/
    render() {

		return (
			<StyleDiv>
				<InpOutField 
					change={ (e) => this.changeTheInp(e) }
					current={this.state.inp}
				/>
			</StyleDiv>
		);
	}
}

export default Assignment1;