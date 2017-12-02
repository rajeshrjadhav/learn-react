import React from 'react';
import Option from './Option';

const Options=(props)=>{
	return(
		<div>
			<div className="option__header">
				<h2>Your Options</h2>
				<button 
					className="button" 
					onClick={props.onRemoveAllClick}
				>Remove All</button>
			</div>
			{
				props.options.length===0 
				&& 
				<p className="option__message">
				Please add options to get started!</p>
			}
			<ul></ul>
			{
				props.options.map(
					(option,index)=>  (
						<Option 
						key={index} 
						optionText={option} 
						onRemoveClick={props.onRemoveClick}/>						
					)		
				)
			}				
		</div>
	);
};

export default Options;