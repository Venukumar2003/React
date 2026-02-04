

// import React,{useState} from "react";

// const ManageCount = ()=>{
//     const [count,setCount] = useState(0)

//     const increment = ()=>{setCount(count+1)}
//     const deccrement = ()=>{setCount(count-1)}
//     const reset = ()=>{setCount(0)}
//     return(
//         <>
//         <h2> Manage Count : {count} </h2>
//         <button onClick={increment}> + </button>
//         <button onClick={deccrement}> - </button>
//         <button onClick={reset}> reset </button>
        
        
//         </>
//     ) 
// }

// export default ManageCount;



import React,{useState} from "react";

const ManageCount = ({count,increment,decrement,reset})=>{
    // const [count,setCount] = useState(0)

    // const increment = ()=>{setCount(count+1)}
    // const deccrement = ()=>{setCount(count-1)}
    // const reset = ()=>{setCount(0)}
    return(
        <>
        <h2> Manage Count : {count} </h2>
        <button onClick={increment}> increment </button>
        <button onClick={decrement}> decrement </button>
        <button onClick={reset}> reset </button>
        
        
        </>
    ) 
}

export default ManageCount;