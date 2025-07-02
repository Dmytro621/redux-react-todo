export const ADD_TODO = 'ADD_TODO'

export const addToDo = (text) => {
    return ({
        type: ADD_TODO, 
        payload: text,
    })
}

export const DELETE_TODO = 'DELETE_TODO'

export const deleteToDO = (index) => {
    return ({
        type: DELETE_TODO,
        payload: index,
    })
}