import React from 'react'
import { useForm } from '../02-useEffect/useForm';

export const TodoForm = ({ dispatch }) => {
    const [formValues, handleInputChange, reset] = useForm({ description: '' })
    const { description } = formValues

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
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" placeholder="Aprender..." autoComplete="off"
                onChange={handleInputChange}
                value={description}
                className="form-control" />
            <button tye="submit" className="btn btn-outline-danger">Agregar</button>
        </form>
    )
}
