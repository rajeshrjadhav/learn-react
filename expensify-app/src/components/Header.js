import React from 'react';
import {BrowserRouter, Route, Link,Switch, NavLink } from 'react-router-dom';

const Header=()=>(
		<header>
			<h1>Expensify</h1>

			<NavLink to="/create" activeClassName="is-active" exact={true}>Add new expense</NavLink> <br />
			<NavLink to="/help" activeClassName="is-active">Help</NavLink>
		</header>
);

export default Header;
