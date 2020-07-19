 import React, { Component  } from 'react';
import Radium from 'radium';
import InpOutField from './Assignments/Assignment2/InpOutField';
import CharComponent from './Assignments/Assignment2/CharComponent';

class Assignment2 extends Component {
	state = {
		item: "lol"
	}

	changeTheInp = (e) => {
		this.setState( { item: e.target.value } );
	}

    deleteTargetChar = (idx) => {
    	const txt = this.state.item.split("");
    	txt.splice(idx, 1)
    	const temp = txt.join("");
    	this.setState( {item: temp} )
    }

	render() {
		const buildingChars = this.state.item.split('').map((ch, idx) => {
	      return <CharComponent 
		        character={ch} 
		        key={idx}
		        clicked={() => this.deleteTargetChar(idx)} 
		    />;
	    });

    	const style = {
		  backgroundColor: 'green',
		  transition: 'all 0.4s',

		  '@media (max-width: 980px)': {
		    backgroundColor: 'blue'
		  },

		  '@media (max-width: 570px)': {
		    backgroundColor: 'red'
		  },

		  '@media (max-width: 320px)': {
		    backgroundColor: 'yellow'
		  }
		};

		return (
			<div style={style}>
				<InpOutField
					change={(e) => this.changeTheInp(e)}
					current={this.state.item}
				/>
				{buildingChars}
			</div>
		)
	}

}

export default Radium(Assignment2);