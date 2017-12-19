import React from 'react';

class AddExpensePage extends React.Component{

	constructor(props){
		super(props);
		
		this.getNote = this.getNote.bind(this);	
		this.getDescription = this.getDescription.bind(this);	
		this.getAmount = this.getAmount.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			note : '',
			description : '',
			amount : 0
		};
	}		

	getNote(e){
		this.setState({
			note : e.target.value
		});
	}

	getAmount(e){
		const amount =  e.target.value;

		this.setState((prevState) => ({
			amount 
		}));
	}
	getDescription(e){
		this.setState({
			description : e.target.value
		});
	}

	onSubmit(e){
		console.log("submit");
	}

	render(){
		return(
			<div>		
				<input type="text" 
					onChange={this.getNote} 
					value={this.state.note} 
				autoFocus/>

				<input type="number"
					onChange={this.getAmount}
					value={this.state.amount}
				/>

				<textarea 
					onChange={this.getDescription} 
					placeholder="add description"
				></textarea>

				<button onClick={this.onSubmit} >Add</button>
			</div>
		)
	}
};

export default AddExpensePage;
