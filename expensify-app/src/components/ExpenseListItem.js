import React from 'react';
import { connect } from 'react-redux';
import { removeExpenseGenerator } from '../actions/expenses';

const ExpenseListItem = ({ dispatch ,id ,description, amount, createdDate }) => (
		<div>			
			<h3>Expense Description: {description} </h3>
			<p>	Amount : {amount} </p>					
			<p> Creation Date: {createdDate} </p>					
			<button onClick={
				() =>
				{
					dispatch(removeExpenseGenerator({ id : id }))
				}				
			}>Remove</button>
		</div>
	);

const mapStateToProps = (state) => ({
	expenses : state.expenses
});

export default connect (mapStateToProps) (ExpenseListItem);
