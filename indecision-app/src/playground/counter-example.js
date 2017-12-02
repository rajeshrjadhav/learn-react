class CounterApp extends React.Component{
	
	constructor(props){
		super(props);

		this.addBtnClick = this.addBtnClick.bind(this);
		this.minusBtnClick = this.minusBtnClick.bind(this);
		this.resetBtnClick = this.resetBtnClick.bind(this);

		//Step 1 - Set initial/default state
		this.state={
			count : props.count && props.count
		};
	}

	componentDidMount(){
		
		console.log("componentDidMount");
		try{
			const count=parseInt(localStorage.getItem('count'));			
			if(!isNaN(count)){
			
				this.setState(()=>({
					count: count
				}));
			}	
		}
		catch(e){
			//
		}
		
	}
	componentDidUpdate(prevProps,prevState){
		console.log("componentDidUpdate");
		if(prevState.count!==this.state.count){
			localStorage.setItem('count',this.state.count);
		}
	}
	addBtnClick(){

		this.setState((prevState)=>{
			return{
				count : prevState.count + 1
			};			
		});

	}

	minusBtnClick(){
		this.setState((prevState)=>{
			return{
				count : prevState.count -1 
			};
		});
	}

	resetBtnClick(){
		this.setState(()=>{
			return{
				count : 0
			}
		});
	}

	render(){
		return(
			<div>
				<h1>Counter : {this.state.count}</h1>
				<button onClick={this.addBtnClick}>+1</button> <br /><br />
				<button onClick={this.minusBtnClick}>-1</button> <br /><br />
				<button onClick={this.resetBtnClick}>reset</button> <br /><br />
			</div>
		);
	}
} 

CounterApp.defaultProps={
	count : 0
};

ReactDOM.render(<CounterApp />,document.getElementById('app'));
