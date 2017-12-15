import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = ({ id, description, amount, createdDate }) => (
		<div>
			
			<h3> Expense Description: {description} </h3>
			<p>	Amount : {amount} </p>					
			<p> Creation Date: {createdDate} </p>					
		</div>
	);

export default ExpenseListItem;
