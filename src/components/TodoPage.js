import TodoForm from './TodoForm'
import NoTasks from "./NoTasks"
import TodoList from './TodoList'
import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function TodoPage() {
    const [todos, setTodos] = useLocalStorage('todos', [])
    const [showCompleted, setShowCompleted] = useState(true)
    const [id, setId] = useLocalStorage('id', 1)

    const addTodo = text => {
        const newTodos = [...todos, { text, completed: false, id }]
        setId(id + 1)
        setTodos(newTodos)
    }

    const removeTodo = id => {
        const newTodos = todos.filter(el => el.id !== id)
        setTodos(newTodos)
    }

    const checkCompleted = id => {
        const todo = todos.find(todo => todo.id === id)
        todo.completed = !todo.completed
        const newTodos = todos.map(t => {
            if (t.id === id)
                return todo
            return t
        })
        setTodos(newTodos)
    }

    return (
        <div className="todo">
            <div className='todo-container'>
                <div className='hide-block'>
                    <input type='checkbox'
                        defaultChecked={!showCompleted}
                        name='Hide completed'
                        onChange={() => setShowCompleted(!showCompleted)}
                    />
                    <label>

                        Hide completed
                    </label>
                </div>
                <TodoForm addTodo={addTodo} />
                {todos.length
                    ? 
                    <TodoList
                        todos={todos}
                        showCompleted={showCompleted}
                        removeTodo={removeTodo}
                        checkCompleted={checkCompleted}
                    /> 
                    : 
                    <NoTasks />}
            </div>
        </div>
    )
}

export default TodoPage