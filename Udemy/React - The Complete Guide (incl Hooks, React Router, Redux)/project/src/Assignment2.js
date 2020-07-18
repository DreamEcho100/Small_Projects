import React, { Component  } from 'react';
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
		return (
			<div>
				<InpOutField
					change={(e) => this.changeTheInp(e)}
					current={this.state.item}
				/>
				{buildingChars}
			</div>
		)
	}

}

export default Assignment2;