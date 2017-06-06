import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import App from "App";
require("./scss/app.scss");

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
		</Route>
	</Router>,
	document.getElementById("sahipakdehai")
);
