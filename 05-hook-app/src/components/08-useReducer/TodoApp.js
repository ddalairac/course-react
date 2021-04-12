import React, { useEffect, useReducer } from 'react'
import { useForm } from '../02-useEffect/useForm';
import '../styles.css';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || []
    }
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    // console.log("todos states: ", todos)

    const [formValues, handleInputChange, reset] = useForm({ description: '' })
    const { description } = formValues
    // console.log("formValues: ", formValues)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todo)=>{
        // console.log("delete",todo)
        const deleteAction={
            type:'remove',
            payload:todo
        }
        dispatch(deleteAction)
    }

    const handleToggle = (todo)=>{
        const toggleActions = {
            type: "toggle",
            payload: todo
        }
        dispatch(toggleActions)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Nueva tarea")
        if (description.trim().length > 0) {
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            }

            const actions = {
                type: "add",
                payload: newTodo
            }
            dispatch(actions)
            reset()
        }
    }
    return (
        <>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <h2>Nuevo TODO</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="description" placeholder="Aprender..." autoComplete="off"
                    onChange={handleInputChange}
                    value={description}
                    className="form-control" />
                <button tye="submit" className="btn btn-outline-danger">Agregar</button>
            </form>

            <ul className="list-group list-group-flush">{
                todos.map((todo, i) =>
                    <li key={todo.id} className={`list-group-item todo-li ${todo.done && 'complete'}`}  >
                        <span onClick={()=>handleToggle(todo)}>{i + 1}. {todo.desc}</span>
                        <button className="btn btn-danger" onClick={()=>handleDelete(todo)}>Borrar</button>
                    </li>
                )
            }</ul>
        </>
    )
}
