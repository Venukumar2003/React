
import React,{useState} from "react"

const DisplayCount=({count,increment,decrement,reset})=>{

//     const [count , setCount] = useState(0);



//     const incrementFn = ()=>{setCount (count + 1)}
//   const decrementFn = ()=>{setCount (count - 1)}
//   const resetFn = ()=>{setCount (0) }


    return(
        // <>
        // <h2>Display Count : {count} </h2>
        // <button onClick={()=>setCount(count+1)}> + </button>
        // <button onClick={()=>setCount(count-1)}> - </button>
        // <button onClick={()=>setCount(0)}> reset </button>
        // </>

        <>
        <h2>Display Count : {count} </h2>
        <button onClick={increment}> increment </button>
        <button onClick={decrement}> decrement </button>
        <button onClick={reset}> reset </button>
        </>
    )

}

export default DisplayCount;