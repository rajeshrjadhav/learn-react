class Visbibility extends React.Component{

	constructor(props){
		super(props);

		this.onVisibleClick = this.onVisibleClick.bind(this);

		this.state={
			visible : false 
		};

	}

	onVisibleClick(){
		this.setState((prevState) => {
			return{			
				visible : !prevState.visible 
			};
		});
	}

	render(){

		return(
			<div>
				<h1>Visbibility Toggle</h1>
				<button onClick={this.onVisibleClick}>{ this.state.visible==true ? "hide details" : "show details" }</button>
				{this.state.visible ? <p>This is sample text.</p> : '' }
			</div>
		);
	};
}

ReactDOM.render(<Visbibility />,document.getElementById('app'));
