// import {useState} from "react"

const DisplayCount =({count,incrementFn,decrementFn,resetFn})=>{
    // const [count , setCount] = useState(0)

    // const incrementFn = ()=>{
    //     setCount(prev =>prev +1)
    // }

    // const decrementFn = ()=>{
    //     setCount(prev => prev-1)
    // }

    // const resetFn = ()=>{
    //     setCount(0)
    // }

    return(
        <>
        <h2> Display Count : {count}</h2>
        <button type="button" onClick={incrementFn} > + </button>
        <button type="button" onClick={decrementFn} > - </button>
        <button type="button" onClick={resetFn} > reset </button>
        </>
    )
}


export default DisplayCount;




// const DisplayCount = ({ count, increaseCount, decrementCount, resetCount }) => {
//   return (
//     <>
//       <h2>Display Count : {count}</h2>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decrementCount}>Decrease</button>
//       <button onClick={resetCount}>Reset</button>
//     </>
//   );
// };

// export default DisplayCount;
