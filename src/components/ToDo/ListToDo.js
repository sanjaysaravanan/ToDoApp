import React, { useState } from "react";

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
			<div className="container">
				<table className="table">
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
		</div>
	);
}

export default ListToDo;
