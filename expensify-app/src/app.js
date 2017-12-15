import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpenseGenerator, editExpenseGenerator, removeExpesnseGenerator } from './actions/expenses';  
import { setTextFilterGenerator } from './actions/filters' ;
import { getVisibleExpenses } from './selectors/expenses'; 
import 'normalize.css/normalize.css';
import './styles/styles.scss';

var d = new Date();

const store = configureStore();

//Mobile Bill Expense
store.dispatch(addExpenseGenerator({
	type: 'ADD_EXPENSE',
	description :'Mobile Bill',
	note : 'Personal Mobile Bill',
	amount : '350',
	createdDate : d.getTime()
}));

store.dispatch(addExpenseGenerator({
	type : 'ADD_EXPENSE',
	description : 'Gas Bill',
	note : 'Gas Bill for Month December',
	amount : '700',
	createdDate : d.getTime()
}));


store.dispatch(setTextFilterGenerator('Gas'));

setTimeout(()=>{
	store.dispatch(setTextFilterGenerator('Bill'));
},5000);

// const state=store.getState(); 
// const visibleExpenses = getVisibleExpenses(state.expenses , state.filter);	

const jsx =(
	<Provider store={store}>
		<AppRouter /> 	
	</Provider>
);

ReactDOM.render( jsx, document.getElementById('app'));