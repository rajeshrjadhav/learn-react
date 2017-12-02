import React from 'react';

const Option=(props)=>{
		return(			
	
			<li key={props.index} style={{marginTop:"5px",marginBottom:"5px"}} >
				{props.optionText}  &nbsp;
				<button onClick={
						(e)=>{
							return props.onRemoveClick(props.optionText);
						}
				}>Remove</button>
			</li>						

		)
};

export default Option;