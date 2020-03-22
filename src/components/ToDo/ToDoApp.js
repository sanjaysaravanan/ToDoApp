import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderComponent from "./HeaderComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import ListToDo from "./ListToDo";
import WelcomeComponent from "./WelcomeComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";

export default function() {
	return (
		<div className="ToDoApp">
			<Router>
				<HeaderComponent />
				<Switch>
					<Route path="/" exact component={LoginComponent} />
					<Route path="/login" component={LoginComponent} />
					<AuthenticatedRoute path="/logout" component={LogoutComponent} />
					<AuthenticatedRoute
						path="/welcome/:name"
						component={WelcomeComponent}
					/>
					<AuthenticatedRoute path="/todos" component={ListToDo} />
					<Route path="" component={ErrorComponent} />
				</Switch>
				<FooterComponent />
			</Router>
		</div>
	);
}
