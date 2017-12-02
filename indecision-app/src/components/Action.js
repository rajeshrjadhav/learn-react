import React from 'react';

const Action=(props)=>{
		return(
			<button 
				className="big-button"
				disabled={!props.hasOptions}
				onClick={props.onHandlePick}
			>What do you want to do? </button>
		);
}

export default Action;