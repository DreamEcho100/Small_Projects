import React, { Component  } from 'react';
import InpOutField from './Assignments/Assignment2/InpOutField'

class Assignment2 extends Component {
	state = {
		items: [
			{id: 0,txt: "l"},
			{id: 1,txt: "lo"},
			{id: 2,txt: "lol"},
		]		
	}

	changeTheInp = (e, id) => {
		const itemIdx = this.state.items.findIndex( el => {
			return el.id === id
		})
		const item = {
			...this.state.items[itemIdx]
		}
		item.txt = e.target.value;
		const items = [...this.state.items]
		items[itemIdx] = item;
		this.setState({items: items})
	}

	deleteTargetedInp = (itemIdx) => {
		const items = [...this.state.items];
		const deleteCount = 1;
		items.splice(itemIdx, deleteCount);
		items.forEach(el => {
		    if (el.id > itemIdx) el.id -= deleteCount
		})
		this.setState({items: items})
	}

	render() {
		let elems = this.state.items.map( (elem, idx) => {
			return <InpOutField
					test={[this.state, this.setState()]}
              		key={idx}
              		click={ () => this.deleteTargetedInp(idx)}
					change={(e) => this.changeTheInp(e, idx)}
					current={this.state.items[idx].txt}
				/>
		})

		return (
			<div>
				{elems}
			</div>
		)
	}

}

export default Assignment2;