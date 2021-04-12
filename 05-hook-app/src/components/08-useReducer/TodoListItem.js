import React from 'react'

export const TodoListItem = ({ todo, i,dispatch}) => {

    
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

    return (
        <li className={`list-group-item todo-li ${todo.done && 'complete'}`}  >
            <span onClick={() => handleToggle(todo)}>{i + 1}. {todo.desc}</span>
            <button className="btn btn-danger" onClick={() => handleDelete(todo)}>Borrar</button>
        </li>
    )
}
