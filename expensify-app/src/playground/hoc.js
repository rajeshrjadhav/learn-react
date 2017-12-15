// High order component (HOC) -A component (HOC) that renders another compoent.
// Reuse code
// Render Hijacking
// Prop manupilation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
		<div>
			<p>This is {props.info}</p>
		</div>
	);

const withAdminWarning = (WrappedComponent)=>{
	return (props)=>(
		<div>
			<h1>This is private page.</h1>
			<WrappedComponent  {...props}/>
		</div>
	);
};

const withAuthenticationWarning = (WrappedComponent)=>{

	return (props)=>(
		<div>
			
			{ 	props.isAuth ? 
				( <WrappedComponent {...props} />)
				: 
				( <h1> This is restricted page. Please Login. </h1>)  
			}			
		</div>
	);
};

// const Admin = withAdminWarning(Info);
const Admin = withAuthenticationWarning(Info);

// ReactDOM.render(<Admin info="test" />,document.getElementById('app'));

ReactDOM.render(<Admin info="dummy text" isAuth={false}/>,document.getElementById('app'));
