import React from 'react';
import { connect } from 'react-redux';
import { removeExpenseGenerator } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';

// BrowserRouter, Route, Link,Switch, 
const ExpenseListItem = ({ dispatch ,id ,description, amount, createdDate }) => (
		<div>			
			<br />
			<Link to={ `edit/${ id }` } > {description} </Link> 
			<p>	Amount : {amount} </p>					
			<p> Creation Date: { moment.unix(createdDate).format("YYYY-MM-DD HH:mm") }</p>					
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
