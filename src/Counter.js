import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

// create counter component that displays the current value of the counter
function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)

    // handle increment button click
    const byAmount = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h1>{count}</h1>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit={(e) => byAmount(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Counter