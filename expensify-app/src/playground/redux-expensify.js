import React from 'React';
import {createStore,combineReducers} from 'Redux';
import uuid from 'uuid';

//expense reducer
//default state - expense reducer
const expensesReducerDefaultState = [];

const expensesReducer=(	state = expensesReducerDefaultState , action )=>{
	console.log("running");
	console.log(action);
	switch(action.type){
		case 'ADD_EXPENSE':			
			// Allows us to create new array from old one & we can add new elements in that array.
			return [...state , action.expense ];
		case 'REMOVE_EXPENSE':			
			// return state.filter(({ id }) =>{
			// 		id!=action.id;
			// 	});
				
			return state.filter(expense=>								
					expense.id!=action.id
			);		
		default :
			return state;
	}
};

//filter reducer
//default state - filter reducer
const filterReducerDefaultState ={
	text : '',
	sortBy : '',
	startDate : undefined,
	endDate : undefined
};

const filtersReducer = ( state = filterReducerDefaultState, action)=>{
	switch(action.type){
		default :
			return state;
	}
};

//create store
const store = createStore(
	combineReducers(
		{
			'expenses' : expensesReducer,
			'filter' : filtersReducer
		}
	)
);
// console.log(store.getState());

//action generator for add expense
const addExpenseGenerator =( {type,description,note,amount,createdDate} = payload = {}) =>(
	{
		type:type ,
		expense : { 
			id : uuid() ,
			description : description,
			note : note,
			amount : amount,
			createdDate : createdDate
		}
	}
);

//ADD_EXPENSE
const expenseOne = store.dispatch(addExpenseGenerator( 
	{
		type : 'ADD_EXPENSE',		
		description : 'Rent Expense' ,
		note : 'note',
		amount : 10000,
		createdDate : 0
	} 
) );
console.log(expenseOne);
console.log(store.getState());

const expenseTwo = store.dispatch(addExpenseGenerator( 
	{
		type : 'ADD_EXPENSE',		
		description : 'Bike Expense' ,
		note : 'note',
		amount : 5000,
		createdDate : 0
	} 
) );
console.log(store.getState());

//REMOVE_EXPENSE
//action generator for remove expense
const removeExpenseGenerator = ({id}={})=>(

	{
		type : 'REMOVE_EXPENSE',
		id : id
	}
);

const removeExpense= store.dispatch(removeExpenseGenerator(
	{ id:expenseOne.expense.id }
));

console.log(store.getState());
