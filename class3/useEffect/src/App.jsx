import { useState ,useEffect} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

 let  status = false;

  // useEffect(()=>{
  //   console.log("without dependency-------")
  //   // if(count % 2 ===0){
  //   //   status = true;
  //   // }

  // })

  // useEffect(()=>{
  //   console.log("with dependency-----")

  // },[])

  // useEffect(()=>{
  //   console.log("dependency with value--------")
  //   if(count%2===0){
  //     console.log("positive numbers count")
  //     document.title = `you clicked ${count} times`;
  //   }

  // },[count])



  // useEffect(()=>{
  //   console.log("with dependency with some condition")

  //   // console.log(count%2 === 0)
  //   if(count % 2==0){
  //     console.log("positive -----")
  //     document.title = `you clicked ${count} times `
  //   }else{
  //     console.log("negative--------")
  //   }

    
  // },[count])



  useEffect(()=>{
    let timer = setInterval(()=>{
      console.log("Timer Tick")

    },2000)

    // Cleanup function
    return(()=>{
      clearInterval(timer)
    })
  },[])

  return (
    <>
    <h1> App.jsx Component </h1>

    <h2> Count : {count} </h2>

    <button onClick= {()=>{setCount(count+1)}}>Increase </button>

    <button onClick={()=>{setCount(count-1)}}>Decrease </button>


    
      
    </>
  )
}

export default App
