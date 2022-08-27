import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

//create and export counterSlice
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //increment counter by 1
        increment: (state) => {
            return { value: state.value + 1 }
        },
        //decrement counter by 1
        decrement: (state) => {
            return { value: state.value - 1 }
        },
        //reset counter to 0
        incrementByAmount: (state, action) => {
            return { value: state.value + action.payload }
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer