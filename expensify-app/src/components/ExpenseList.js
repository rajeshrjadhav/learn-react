import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem  from './ExpenseListItem';
import getVisibleExpenses  from '../selectors/expenses'; 

const ExpenseList = (props) => (
	<div>
		
		{ 
			props.expenses.map((expense) => {				
				return <ExpenseListItem key={expense.id} {...expense} />
			})
		}
	</div>
);

//not a common practice/pattern
// const ConnectedExpenseList = connect((state) => {
// 	return {
// 		expenses : state.expenses,
// 		filters : state.filters
// 	};
// })(ExpenseList);
// export default ConnectedExpenseList;

//common practice/pattern
const mapStateToProps = (state) => {
	return {
		expenses : getVisibleExpenses(state.expenses,state.filter)
	};	
};

export default connect(mapStateToProps)(ExpenseList);