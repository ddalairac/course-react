import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos,dispatch}) => {
    return (
        <ul className="list-group list-group-flush">{
            todos.map((todo, i) =>
                <TodoListItem key={todo.id} todo={todo} i={i} dispatch={dispatch}  />
            )
        }</ul>
    )
}
