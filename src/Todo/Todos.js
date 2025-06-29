import React, { createContext, useContext } from 'react'

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"I am todo",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
})

export const TodoProvider=TodoContext.Provider;

export const useTodo=()=> {
    return useContext(TodoContext);
    
}