import TodoItem from "./TodoItem";

const TodoList = function ({ todos, toggleCompleted, editTodo }) {


    return <ul className="todo-list">

        {

            todos.map((todo, index) => 
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    index={index} 
                    toggleCompleted={toggleCompleted}
                    editTodo={editTodo}
                />
            )
        }

    </ul>
}

export default TodoList;