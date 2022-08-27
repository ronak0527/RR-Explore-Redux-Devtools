import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

//create and export todoSlice
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //add todo item
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload]}
        },

        //remove todo from state
        removeOne: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        //remove all todos from state
        clearTodo: () => {
            return { items: [] }
        }
    }
})

export const { addTodo, removeOne, clearTodo } = todoSlice.actions

export default todoSlice.reducer