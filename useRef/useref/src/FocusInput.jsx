

import React,{useState,useRef} from "react";


const FocusInput = ()=>{
    const [timer,setTimer] = useState(0);

    const inputRef = useRef(null);

    const input =() =>{
        // console.log("Focus Input")
        inputRef.current.focus();
    }

    return(
        <>
        <input type="text" ref={inputRef} />
        <button onClick={input} > Focus Input </button>
        
        </>
    )
}

export default FocusInput