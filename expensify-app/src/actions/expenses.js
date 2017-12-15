import uuid from 'uuid';

//action generators
//ADD_EXPENSE
export const addExpenseGenerator =( {type,description,note,amount,createdDate} = payload = {}) =>(
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
export const removeExpenseGenerator = ({ id } = {} )=>(
	{
		type : 'REMOVE_EXPENSE',
		id : id
	}
);

//EDIT_EXPENSE
export const editExpenseGenerator = ( id, updates = {  })=>(
	{
		type : 'EDIT_EXPENSE',
		id : id,
		updates: updates		
	}
);