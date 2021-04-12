import React, { useEffect, useReducer } from 'react'
import '../styles.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || []
    }
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])



    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <h2>Nuevo TODO</h2>
            <TodoForm dispatch={dispatch} />
            <TodoList todos={todos} dispatch={dispatch} />
        </>
    )
}
