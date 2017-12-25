import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpenseGenerator } from '../actions/expenses' ;

const EditExpensePage = (props) => {
  console.log(props);
    return(
      <div>
        <h1>Edit Expense </h1>
        <ExpenseForm 
        expense = {props.expense}
        onSubmit ={ (expense) => {
        		props.dispatch(editExpenseGenerator(props.expense.id,expense));
        		props.history.push('/');
        	}
    	}
        />
      </div>
    );
};

const mapStateToProps = (state,props) => ({
	expense : state.expenses.find((expense)=>{
		return expense.id ==  props.match.params.id			 		
	})
});

export default connect (mapStateToProps) (EditExpensePage);
