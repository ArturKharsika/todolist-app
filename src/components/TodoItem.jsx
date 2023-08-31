import { useState } from "react";

const TodoItem = function ({ todo, index, toggleCompleted, editTodo }) {
	const [isEdit, setEdit] = useState(false);
	const { id, body, completed } = todo;

	const [text, setText] = useState(body);

	const editHandler = () => {
		setEdit(!isEdit);

		if (isEdit) {
			editTodo(id, text);
		}
	}

	return (

		<li className={completed ? "todo-item  line-throgh" : "todo-item"}>
			<input onChange={() => toggleCompleted(id)} checked={completed} type="checkbox" className="todo-item_complited" />
			<span className="todo-item_number" > {index + 1}</span>

			{
				!isEdit
					? <p className="todo-item_text">  {body} </p>
					: <input className="todo-item_text" value={text} onChange={e => setText(e.target.value)}/>

			}

			<div className="user-action">
				<button onClick={ editHandler }>{ !isEdit ? 'edit' : 'save' }</button>
				<button className="btn-icon user-action_del"> X </button>
			</div>
		</li>
	)


}

export default TodoItem;