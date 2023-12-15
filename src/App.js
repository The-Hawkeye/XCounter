
import './App.css';
// import Counter from './Component/Counter';
import React ,{useState} from 'react';

function App() {

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
  );
}

export default App;
