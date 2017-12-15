import React from 'react';
import {BrowserRouter, Route, Link,Switch, NavLink } from 'react-router-dom';

const Header=()=>(
		<header>
			<h1>Expensify</h1>
			<NavLink to="/" activeClassName="is-active">Dashboard Page</NavLink> <br /><br />
			<NavLink to="/create" activeClassName="is-active" exact={true}>Add new expense</NavLink> <br /><br />
			<NavLink to="/help" activeClassName="is-active">Help</NavLink>
		</header>
);

export default Header;
