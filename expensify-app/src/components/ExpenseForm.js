import React from 'react';
import { connect } from 'react-redux';
import { addExpenseGenerator } from '../actions/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class ExpenseForm extends React.Component{

	constructor(props){
		super(props);
		
		this.getNote = this.getNote.bind(this);	
		this.getDescription = this.getDescription.bind(this);	
		this.getAmount = this.getAmount.bind(this);
		this.onDateChange = this.onDateChange.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			note : props.expense ? props.expense.note : '',
			description : props.expense ? props.expense.description : '',
			amount : props.expense ? props.expense.amount : 0,
			createdDate : props.expense ? moment(props.expense.createdDate) :  moment() ,
			error : false,
			calenderFocused : false
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

	onDateChange( createdDate ){
		this.setState({
			createdDate
		});
	}
	onFocusChange({ focused }){	
		this.setState(() => ({ 
			calenderFocused : focused 
		}));
	}

	onSubmit(e){
		if( this.state.note != '' ){
			
			this.setState(()=>({ error : false }));
			
			this.props.onSubmit({
				note : this.state.note,
				description : this.state.description,
				amount : this.state.amount,
				createdDate : this.state.createdDate.valueOf()
			});
		}
		else{
			this.setState(()=>({ error : true }));
		}
	}

	render(){
		return(
			<div>		
				{ this.state.error && <p>Fill all the details</p> }
				<input type = "text" 
					onChange = { this.getNote } 
					value = { this.state.note } 
				autoFocus/> 

				<input type="number"
					onChange={this.getAmount}
					value={this.state.amount}
				/>

				<textarea 
					onChange={this.getDescription} 
					placeholder="add description"
					value = { this.state.description } 
				>  </textarea>

				<SingleDatePicker
					date = { this.state.createdDate } 
					onDateChange = { this.onDateChange } 
					focused = { this.state.calenderFocused }
					onFocusChange = { this.onFocusChange }
					numberOfMonths = {1}
					isOutsideRange = {() => false}
				/>
				<br />
				<button onClick={this.onSubmit} > Submit </button>
			</div>
		)
	} 
};

const mapStateToProps = (state) =>({
	expenses : state.expenses
});

export default connect(mapStateToProps) (ExpenseForm);