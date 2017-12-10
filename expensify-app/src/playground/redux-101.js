import {createStore} from 'redux';

//Action generators are the functions that return action objects
//payload={} -- in this we have set default empty object for error handling
const incrementCount = ({incrementBy= 10} = payload = {} )=>( 
	{
		type: 'INCREMENT',
		incrementBy : typeof incrementBy === 'number' ? incrementBy : 1
	}
);

const decrementCount = ({ decrementBy=20 } = payload = {})=>(

	{
		type : 'DECREMENT',
		decrementBy : decrementBy
	}
);

const setCount=({count}=payload)=>(
	{
		type : 'SET',
		count : count 
	}
);

const resetCount = ({reset}=payload)=>({
	type : 'RESET',
	reset : reset
});

const countReducer=(state={count:0},action )=>{
	console.log("store called------------");
	switch (action.type)
	{	
		case 'INCREMENT' :
			
			return {
				count : state.count + action.incrementBy
			};

		case 'DECREMENT' :
			
			return {
				count : state.count - action.decrementBy
			};

		case 'RESET' :
			return{
				count : action.reset
			};

		case 'SET':
			return{
				count : action.count
			};

		default :
			return state;
	}
}

const store=createStore(countReducer);

console.log(store.getState());
// const unsubscribe=store.subscribe(()=>{
// 	console.log(store.getState());
// });

//increment count 
//inline action objects in dispatch
// store.dispatch({ type:'INCREMENT',incrementBy : 5 });	

//action generators in dispatch
store.dispatch( incrementCount( { incrementBy : 5 } ) );

console.log(store.getState());

// unsubscribe(); 

//decrement count 
store.dispatch( decrementCount( { decrementBy : 1 } ) );
console.log(store.getState());

//set count
store.dispatch(setCount( { count : 100 } ) );
console.log(store.getState());

//reset count
store.dispatch( resetCount( { reset : 0 } ) );
console.log(store.getState());


	