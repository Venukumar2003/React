
// import React, { useState,useRef, useEffect } from "react";


// const Timer = ()=>{

//     const [time, setTime] = useState(0)
//     const intervalRef = useRef(null);

//     useEffect (()=>{
//         intervalRef.current = setInterval(()=>{
//         setTime(prev => prev +1);
//         },1000)

//         return()=>{
//             clearInterval(intervalRef.current)
//         }
//     },[])

 

//     return (
//         <>
//         <p> Time : {time} </p>

//         <button onClick={()=>clearInterval(intervalRef.current)} >Stop Timer </button>
        
        
//         </>

//     )
// }

// export default Timer;



import React,{useState,useRef, useEffect} from "react";


const Timer = ()=> {

    const [second,setSecond] = useState(0);
    const intervalRef = useRef(null);

useEffect(()=>{
    
    intervalRef.current = setInterval(()=>{
        setSecond(prev => prev+1)
        
    },1000)

    return ()=>{
       clearInterval(intervalRef.current)
    }
    
},[])
    



    return(
        <>

        <p> Second : {second}  </p>

        <button onClick={()=>clearInterval(intervalRef.current)}>Stop Seconds</button>
        
        </>
    )
}

export default Timer;