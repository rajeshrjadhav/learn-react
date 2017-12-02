import React from 'react';
import Addoption from './Addoption';
import Option from './Option';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
	constructor(props){
		super(props);
		this.onRemoveAllClick= this.onRemoveAllClick.bind(this);
		this.onRemoveClick = this.onRemoveClick.bind(this);
		this.onHandleAddOption = this.onHandleAddOption.bind(this);
		this.onHandlePick = this.onHandlePick.bind(this);
		this.clearSelectedOption = this.clearSelectedOption.bind(this);
		this.state={
			options : props.options,
			selectedOption : undefined ,
			optionSelected : 0
		};
		console.log(this.state);
	} 

	componentWillMount(){
		console.log("componentWillMount");
	}

	componentDidMount(){
		console.log("componentDidMount");
		try{
			const options=JSON.parse(localStorage.getItem('options'));
			if(options){
				this.setState((prevState)=>({
					options: options 
				}));
			}	
		}
		catch(e){
			//do nothing
		}
		
	}

	componentDidUpdate(prevProps,prevState){
		console.log("componentDidUpdate");
		if(prevState.options.length!=this.state.options.length){
			const options=JSON.stringify(this.state.options);
			localStorage.setItem('options',options);
			console.log(JSON.parse(localStorage.getItem('options')));
		}
	}

	componentWillUnmount(){
		console.log("componentWillUnmount");
	}

	onHandleAddOption(option){
		if(!option){			
			return "Enter valid value to add option"
		}
		else if(this.state.options.indexOf(option)>-1){
			return "Option already exists!";
		}
		// this.setState((prevState)=>{
		// 	return{
		// 		options : prevState.options.concat([option])
		// 	};	
		// });

		//shorhand synatax
		this.setState((prevState)=> (
			{ options : prevState.options.concat([option]) }
		));
	}

	onRemoveAllClick(){
		this.setState(()=>{
			return{
				options : []
			}
		});
	}

	onRemoveClick(optionToRemove){		
		this.setState((prevState)=>({
			options: prevState.options.filter((option)=>{
					return optionToRemove !== option;	
				})		
		}));
	}

	onHandlePick(){ 	

		const randomNum = Math.floor(Math.random() * this.state.options.length );
		console.log(randomNum);
		let option=this.state.options[randomNum];
		this.setState((prevState)=>({
			 selectedOption: option
			 // optionSelected :option
		}));		
		//this.setState({selectedOption:option});
		console.log(this.state);
	}

	clearSelectedOption(){
		this.setState(()=>{
			selectedOption : undefined
		});
	}

	render(){
		return(
			<div className="indecisionApp">				
				<Header />		
				<div className="container">
					<Action 
						hasOptions={this.state.options.length > 0} 
						onHandlePick={this.onHandlePick} />			
					<Options 
						options={this.state.options} 
						onRemoveAllClick={this.onRemoveAllClick} 
						onRemoveClick={this.onRemoveClick}/>	
					<Addoption 
						onHandleAddOption={this.onHandleAddOption}/>	
					<OptionModal 
						selectedOption={this.state.selectedOption} 
						optionSelected={1} 
						clearSelectedOption={this.clearSelectedOption} />
				</div>
			</div>
		);
	}
}

IndecisionApp.defaultProps={
	options : []
};