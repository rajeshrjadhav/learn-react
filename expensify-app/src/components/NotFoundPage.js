import React from 'react';
import {BrowserRouter, Route, Link,Switch, NavLink } from 'react-router-dom';

const NotFoundPage=()=>(
  <div>
    404! <Link to="/"> GO Home</Link>
  </div>
);

export default NotFoundPage;
