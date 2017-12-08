import React from 'react';

export default class Addoption extends React.Component{

	constructor(props){
		super(props);
		this.onHandleAddOption = this.onHandleAddOption.bind(this);
		this.state={
			error: undefined
		};
	}

	onHandleAddOption(e){
		e.preventDefault(e);
		const option=e.target.form.elements.option.value.trim();	
		const error=this.props.onHandleAddOption(option);	
		if(error){
			this.setState((prevState)=>{
				return {
					error : error
				}
			});
		}		
		if(!error){
			e.target.form.elements.option.value='';
		}
	}
	
	render(){
		return(
			<div className="option">
				{ this.state.error && <p className="message">{this.state.error}</p> }
				<form 
					className="option__body"
					onSubmit={this.onHandleAddOption}>					

					<input className="option__input" type="text" name="option"/>
					
					<button 
						className="option__addButton button"
						onClick={this.onHandleAddOption}>
						Add Option
					</button>
				</form>
			</div>
		)	
	}
}
