import React from 'react';
import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';

//action generators

//ADD_EXPENSE
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

//REMOVE_EXPENSE
const removeExpenseGenerator = ({ id } = {} )=>(
	{
		type : 'REMOVE_EXPENSE',
		id : id
	}
);

//EDIT_EXPENSE
const editExpenseGenerator = ( id, updates = {  })=>(
	{
		type : 'EDIT_EXPENSE',
		id : id,
		updates: updates		
	}
);

//SET_TEXT_FLITER
const setTextFilterGenerator = (text = '')=>(
	{
		type : 'SET_TEXT_FLITER',
		text : text
	}	
);

//SORT_BY_DATE
const sortByDateGenerator = () => (
	{
		type : 'SORT_BY_DATE',
		sortBy : 'date'
	}	
);

//SORT_BY_AMOUNT
const sortByAmountGenerator = () => (
	{
		type: 'SORT_BY_AMOUNT',
		sortBy : 'amount'
	}
);

//SET_START_DATE
const setStartDateGenerator = (startDate)=>(
	{
		'type' : 'SET_START_DATE',
		'startDate' : startDate
	}
);

//SET_END_DATE
const setEndDateGenerator = (endDate)=>(
	{
		'type' : 'SET_END_DATE',
		'endDate' : endDate
	}
);
//
//

//reducer - expense
//default state - expense reducer
const expensesReducerDefaultState = [];

const expensesReducer=(	state = expensesReducerDefaultState , action )=>{
	console.log("running");	
	switch(action.type){
		case 'ADD_EXPENSE':			
			// Allows us to create new array from old one & we can add new elements in that array.
			return [...state , action.expense ];

		case 'REMOVE_EXPENSE':			
			return state.filter(({ id }) =>	id != action.id);

		case 'EDIT_EXPENSE' :
			return state.map((expense)=>{
					if(expense.id==action.id){
						return { 
							...expense,
							...action.updates
						};
					}
					else {
						return expense;
					}
				}
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
		case 'SET_TEXT_FLITER' :			
			return {
				...state,
				text : action.text
			};
		case 'SORT_BY_DATE' :
			return {
				...state ,
				sortBy : action.sortBy
			};
		case 'SORT_BY_AMOUNT' :
			return {
				...state ,
				sortBy : action.sortBy
			};

		case 'SET_START_DATE' :
			return {
				...state,
				startDate : action.startDate				
			};

		case 'SET_END_DATE' : 
			return {
				...state ,
				endDate : action.endDate				
			};
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

const getVisibleExpenses = (expenses, { text, sortBy , startDate , endDate } = filter) => {
	
	return expenses.filter((expense)=>{	
	
		const startDateMatch = typeof expense.createdDate === 'number' &&  expense.createdDate >= startDate ;		
		const endDateMatch =  typeof expense.createdDate === 'number' && expense.createdDate <= endDate ;		
		
		const textMatch = typeof text==='string' && (
				expense.description.toLowerCase().includes(text.toLowerCase()) 
			);				
		return startDateMatch && endDateMatch && textMatch;
	});	
};

store.subscribe(()=>{
	const state=store.getState(); 
	const visibleExpenses = getVisibleExpenses(state.expenses , state.filter);	
	console.log(visibleExpenses);
});

//dispatch actions - expense
const expenseOne = store.dispatch(addExpenseGenerator( 
	{
		type : 'ADD_EXPENSE',		
		description : 'Rent Expense' ,
		note : 'note',
		amount : 10000,
		createdDate : 101
	} 
) );

const expenseTwo = store.dispatch(addExpenseGenerator( 
	{
		type : 'ADD_EXPENSE',		
		description : 'Bike RentExpense' ,
		note : 'note',
		amount : 5000,
		createdDate : 200
	} 
) );

// const removeExpense = store.dispatch(removeExpenseGenerator(
// 	{ id:expenseOne.expense.id }
// ));

// const editExpense = store.dispatch(editExpenseGenerator( expenseTwo.expense.id ,
// 	{ 		
// 		description : 'new description',
// 		note : 'new note',
// 		amount : 2000,
// 		createdDate : 1
// 	}
// ));

//dispatch actions - filters
const setTextFilter = store.dispatch(setTextFilterGenerator('rent'));

// const sortByAmount = store.dispatch(sortByAmountGenerator());

// const sortByDate = store.dispatch(sortByDateGenerator());

const setStartDate = store.dispatch(setStartDateGenerator(100));
const setEndDate = store.dispatch(setEndDateGenerator(250));