import Todo from "./Todo"

function TodoList({ todos, showCompleted, removeTodo, checkCompleted }) {

    return (
        <div className="todo-list">
            {
                todos.map(task => {
                    console.log(task)
                    return <Todo
                        key={task.id}
                        text={task.text}
                        id={task.id}
                        showCompleted={showCompleted}
                        completed={task.completed}
                        removeTodo={removeTodo}
                        checkCompleted={checkCompleted}
                    />
                })
            }
        </div>
    )
}

export default TodoList