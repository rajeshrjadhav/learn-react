
//template
const app={
	title: 'Indecision App',
	subTitle: 'My first app',
	options: []
};


const appRoot=document.getElementById('app');

const onFormSubmit=(e)=>{
	e.preventDefault();
	let option=e.target.elements.option.value;
	if(option){
		app.options.push(option);
		e.target.elements.option.value='';
	}
	renderOptionsApp();
};

const removeAll=(e)=>{
	e.preventDefault();
	console.log("removeAll");
	app.options=[];
	renderOptionsApp();
}

const renderOptionsApp=()=>{
	const template=(
	<div>
		<h1>{app.title}</h1>		
		<p> {app.subTitle}</p>
		<p>{app.options.length}</p>
		
		<ol>Options are
			{
				app.options.map((option,index) => {
					return <li key={index} > {option} </li>					
				})
			}
			
		</ol>
		

		<form onSubmit={onFormSubmit}>
			<input type="text" name="option" />
			<button>Add option</button> <br /><br />
			<button onClick={removeAll}>Remove All</button>
		</form>

	</div>
	);
	ReactDOM.render(template,appRoot);
};

renderOptionsApp();
