import React,{ useState } from 'react'
// import Memo from './comonents/Memo'
// import UseMemoComponent from './comonents/useMemoComponent'
import UseCallbackComponent from './comonents/UseCallbackComponent'
import './App.css'

// const Counter = React.memo(({count})=>{
//   console.log("Counter rendered");
//   return <h2> Count : {count} </h2>
// })

function App() {
  // const [count, setCount] = useState(0)
  // const [toggle, setToggle] = useState(false)

  return (
    // <>
    // {/* <h2>Count : {count}</h2> */}
    // <Counter count = {count} />
    // <button onClick={()=>setCount(count+1)}>Increment</button>
    // <button onClick={()=>setCount(count-1)}>Decrement</button>
    // <button onClick={()=>setToggle(!toggle)}> Toggle </button>
    // {/* {toggle && <p> UI toggle </p>} */}
      
    // </>


    // <Memo />
    // <UseMemoComponent />
    <UseCallbackComponent />
  )
}

export default App
