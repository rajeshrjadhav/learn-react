import React from 'react';
import Modal from 'react-modal';

const OptionModal =(props)=>{
	// onRequestClose={props.clearSelectedOption} 
	return(	
		<Modal 
			className="option_modal"
			isOpen={!!props.selectedOption} 
			contentLabel={"Selected option"}
			>			
			<h3 className="modal__title">Selected Option</h3>
			{ props.selectedOption && 
			<p className="selected__option">
				{props.selectedOption}
			</p> }

			<button 
				className="button" 
				onClick={props.clearSelectedOption}>Ok</button>

		</Modal>
		
	);
};

export default OptionModal;