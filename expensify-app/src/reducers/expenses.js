
//reducer - expense
//default state - expense reducer
const expensesReducerDefaultState = [];

const expensesReducer=(	state = expensesReducerDefaultState , action )=>{
	console.log("running:"+action.type);	
	console.log("action:"+JSON.stringify(action));	
	switch(action.type){
		case 'ADD_EXPENSE':			
			// Allows us to create new array from old one 
			// & we can add new elements in that array.
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

export default expensesReducer;