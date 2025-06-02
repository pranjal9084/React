import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "hello world"}]

}

export const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload,
                    completed: false
                }
                state.todos.push(todo)
            },
            removeTodo:(state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            },
            updateTodo: (state, action) => {
                state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload:todo)
            },
            toogleComplete: (state, action) => {
                const todo = state.todos.find( (todo) => todo.id === action.payload.id )
                if(todo){
                    todo.completed = !todo.completed;
                }
            }
        }
    }
)

export const {addTodo, removeTodo, updateTodo, toogleComplete} = todoSlice.actions

export default todoSlice.reducer