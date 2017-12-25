import React from 'react';
import ExpenseForm  from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpenseGenerator } from '../actions/expenses'; 

const AddExpensePage = (props) => {
	return(
		<div>
			<ExpenseForm 
				onSubmit = {
					(expense) => {
						props.dispatch(addExpenseGenerator({	
							type : 'ADD_EXPENSE',
							note : expense.note,
							description : expense.description,
							amount : expense.amount,
							createdDate : expense.createdDate
						}));

						props.history.push('/');						
					}
				} />
		</div>
	);
};

const mapStateToProps = (state) => ({

	expenses : state.expenses

});

export default connect (mapStateToProps) (AddExpensePage);
