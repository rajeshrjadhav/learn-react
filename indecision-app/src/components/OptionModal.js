import React from 'react';
import Modal from 'react-modal';

const OptionModal =(props)=>{
	// !!props.selectedOption
	return(	
		<Modal 
			isOpen={!!props.istrue} 
			contentLabel={"selected option"}
			onRequestCloe={props.clearSelectedOption} >			
				
			{ props.istrue && <h1>{props.true}</h1> }

			<button onClick={props.clearSelectedOption}>Ok</button>
		</Modal>
	);
};

export default OptionModal;