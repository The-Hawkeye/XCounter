import React, {useState} from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrease = ()=>{
        setCounter(counter+1);
    }

    const handleDecrease = ()=>{
        setCounter(counter-1);
    }

  return (
    <div>
        <h1>Counter App</h1>
        <h3>Count : {counter}</h3>

        <button onClick={handleIncrease}>
            Increment
        </button>

        <button onClick={handleDecrease}>Decrement</button>
    </div>
  )
}

export default Counter