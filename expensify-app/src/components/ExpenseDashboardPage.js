import React from 'react';
import ExpenseList from './ExpenseList';
import ExportListFilters from './ExportListFilters';

//stateless functional component
const ExpenseDashboardPage = () => (
	<div>
		<h1>This is Expense Dashboard Page </h1>
		<ExportListFilters />
		<ExpenseList />		
	</div>
	
);

export default ExpenseDashboardPage;