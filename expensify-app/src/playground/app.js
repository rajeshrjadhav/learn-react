//IndecisionApp Component (Parent Component)
class IndecisionApp extends React.Component{
	constructor(props){
		super(props);
		this.onRemoveAllClick= this.onRemoveAllClick.bind(this);
		this.onRemoveClick = this.onRemoveClick.bind(this);
		this.onHandleAddOption = this.onHandleAddOption.bind(this);
		this.state={
			options : props.options
		};
	} 

	componentWillMount(){
		console.log("componentWillMount");
	}

	componentDidMount(){

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

	render(){
		return(
			<div>				
				<Header />			
				<Action hasOptions={this.state.options.length > 0}/>			
				<Options 
					options={this.state.options} 
					onRemoveAllClick={this.onRemoveAllClick} 
					onRemoveClick={this.onRemoveClick}/>	
				<Addoption onHandleAddOption={this.onHandleAddOption}/>	
			</div>
		);
	}
}

IndecisionApp.defaultProps={
	options : []
};

//Stateless functional Header Component
const Header=(props)=>{
		return(
			<div>
				<h1>{props.title}</h1>
				<p>{props.subTitle}</p>
			</div>
		);
}
//default props
Header.defaultProps={
	title : 'Indecision App',
	subTitle : 'Give your life into the hands of Computer!'
};

//Class based Header Component
// class Header extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<p>{this.props.subTitle}</p>
// 			</div>
// 		);
// 	}
// }

//Action Component 
const Action=(props)=>{
		return(
			<button 
				disabled={!props.hasOptions}
				onClick={props.onHandlePick}
			>What do you want to do? </button>
		);
}


//Options Component
const Options=(props)=>{
	return(
		<div>
			<br />
			<button onClick={props.onRemoveAllClick}>Remove All</button>
			{props.options.length===0 && <p>Please add options to get started!</p>}
			<ul>Options are</ul>
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

//Option Component
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

//Addoption Component
class Addoption extends React.Component{

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
					<input type="text" name="option"/>
					<button onClick={this.onHandleAddOption}>Add Option</button>
				</form>
			</div>
		)	
	}
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));