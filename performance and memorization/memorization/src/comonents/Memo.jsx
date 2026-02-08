import React,{useState} from "react";

const Counter = React.memo(({count})=>{
    console.log("Counter rendered")
    return <div> Counter :{count} </div>
})


const Memo=()=>{
    const [count,setCount] = useState(0)
    const [toggle,setToggle] = useState(false)


    const increase = ()=>{
        setCount(count+1)
    }
     const decrease = ()=>{
        setCount(count-1)
    }

    const Toggle = ()=>{
     setToggle(!toggle)
    }

    return(
        <>
        <Counter count = {count}/>
        {/* <h2> Count : {count}</h2> */}
        <button onClick={increase}> Increase </button>
        <button onClick={decrease}> Decrease </button>
        <button onClick={Toggle}> Toggle </button>

        {toggle && <p> UI toggled </p>}

        
        </>
    )
}

export default Memo;