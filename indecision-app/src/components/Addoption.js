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
			<div>
				<form onSubmit={this.onHandleAddOption}>
					{ this.state.error && <p>{this.state.error}</p> }
					<input className="" type="text" name="option"/>
					<button 
					className="button"
					onClick={this.onHandleAddOption}>
					Add Option
					</button>
				</form>
			</div>
		)	
	}
}
