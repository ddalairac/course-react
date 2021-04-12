// console.log("hola mundo")

const initialToDoState = [
    {
        id: 1,
        todo: "comprar pan",
        done: false
    }
]

function todoReducer(state = initialToDoState, action) {
    if (action?.type === "agregar") {
        return [...state, action.payoad]
    }
    return state
}

let todos = todoReducer()

const newToDoState ={
    id: 2,
    todo: "comprar leche",
    done: true
}


const action = {
    type: 'agregar',
    payoad: newToDoState
}

todos = todoReducer(todos, action)

console.log("todos ", todos)