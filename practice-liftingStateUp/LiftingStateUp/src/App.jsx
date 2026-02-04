import { useState } from 'react'
import './App.css'
import DisplayCount from "./components/DisplayCount"
import ManageCount from "./components/ManageCount"

function App() {
  const [count, setCount] = useState(0)


  const incrementFn = () => { setCount(count + 1) }
  const decrementFn = () => { setCount(count - 1) }
  const resetFn = () => { setCount(0) }

  return (
    <>
      <h2>App Component </h2>


      <h2> App count : {count} </h2>

      {/* <button onClick={() => setCount(count + 1)}> increment </button>

        <button onClick={() => setCount(count - 1)}> decrement </button>
        <br />
        <br />
        <button onClick={() => setCount(0)}> reset </button> */}


      <button onClick={incrementFn}> increment </button>

      <button onClick={decrementFn}> decrement </button>
      {/* <br />
        <br /> */}
      <button onClick={resetFn}> reset </button>


      <DisplayCount count= {count} 
      increment = {incrementFn}
      decrement = {decrementFn}
      reset = {resetFn}/>


      <ManageCount count= {count} 
      increment = {incrementFn}
      decrement = {decrementFn}
      reset = {resetFn}/>

    </>
  )
}

export default App
