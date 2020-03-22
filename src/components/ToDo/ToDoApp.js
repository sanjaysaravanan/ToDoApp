import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	Link
} from "react-router-dom";

export default function() {
	return (
		<div className="ToDoApp">
			<Router>
				<HeaderComponent />
				<Switch>
					<Route path="/" exact component={LoginComponent} />
					<Route path="/login" component={LoginComponent} />
					<Route path="/welcome/:name" component={WelcomeComponent} />
					<Route path="/todos" component={ListToDo} />
					<Route path="" component={ErrorComponent} />
				</Switch>
				<FooterComponent />
			</Router>
		</div>
	);
}

export function LoginComponent() {
	const [userName, setUserName] = useState("SanjaySaravanan");
	const [password, setPassword] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleUserNameChange = event => {
		const { value } = event.target;
		setUserName(value);
	};

	const handlePasowrdChange = event => {
		const { value } = event.target;
		setPassword(value);
	};

	const loginClicked = () => {
		if (userName === "SanjaySaravanan" && password === "password") {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	};

	return (
		<>
			<LoginMessage isLoggedIn={isLoggedIn} userName={userName} />
			User Name:{" "}
			<input
				type="text"
				name="username"
				value={userName}
				onChange={handleUserNameChange}
			/>
			<br />
			Password:{" "}
			<input
				type="password"
				name="password"
				value={password}
				onChange={handlePasowrdChange}
			/>
			<br />
			<button onClick={loginClicked}>Login</button>
		</>
	);
}

function LoginMessage(props) {
	if (props.isLoggedIn) {
		return <Redirect to={`/welcome/${props.userName}`} />;
	}
	return <Redirect to="/login" />;
}

function ListToDo() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			description: "Learn Spring MVC",
			isDone: false,
			targetDate: new Date()
		},
		{
			id: 2,
			description: "Learn Kubernetes",
			isDone: false,
			targetDate: new Date()
		},
		{
			id: 3,
			description: "Visit Austin Texas",
			isDone: false,
			targetDate: new Date()
		}
	]);

	return (
		<div>
			<h1>ToDo List</h1>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Description</th>
						<th>Target Date</th>
						<th>Completed</th>
					</tr>
				</thead>
				<tbody>
					{todos.map(todo => (
						<tr key={todo.id}>
							<td>{todo.id}</td>
							<td>{todo.description}</td>
							<td>{todo.targetDate.toString()}</td>
							<td>{todo.isDone.toString()}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function WelcomeComponent(props) {
	return (
		<>
			<h1>Welcome To ToDo Application, {props.match.params.name}</h1>
			<h4>
				Manage Your ToDos <Link to="/todos">Here</Link>
			</h4>
		</>
	);
}

function HeaderComponent() {
	return (
		<header>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<div>
					<a href="https://covidout.in" className="navbar-brand">
						ToDo Application
					</a>
				</div>
				<ul className="navbar-nav">
					<li>
						<Link to="/welcome/SanjaySaravanan" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/todos" className="nav-link">
							ToDos
						</Link>
					</li>
				</ul>
				<ul className="navbar-nav navbar-collapse justify-content-end">
					<li>
						<Link to="/login" className="nav-link">
							Login
						</Link>
					</li>
					<li>
						<Link to="/logout" className="nav-link">
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

function FooterComponent() {
	return (
		<div>
			<hr />
			Footer
		</div>
	);
}

function ErrorComponent() {
	return <div>An error occured... Please Contact Support !!!</div>;
}
