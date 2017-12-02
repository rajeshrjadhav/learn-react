import React from 'react';

const Header=(props)=>{
		return(
			<div className=" header">
				<div className="container">
					<h1 className="header__title">{props.title}</h1>
					{  props.subTitle &&
						<h2 className="header__subtitle">{props.subTitle}</h2>
					}
					</div>
			</div>
		);
}
//default props
Header.defaultProps={
	title : 'Indecision App',
	subTitle : 'Give your life into the hands of Computer!'
};

export default Header;