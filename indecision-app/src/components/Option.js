import React from 'react';

const Option=(props)=>{
		return(			
	
			<div className="options">
				<p  className="title"> {props.optionText} </p>
				<button 
					className="remove-button"
					onClick={
						(e)=>{
							return props.onRemoveClick(props.optionText);
						}
				}>Remove</button>
			</div>						

		)
};

export default Option;