import { useState, useEffect } from 'react'
import './App.css'
// import FetchData from './components/FetchData'
import UserTable from './components/UserTable'

function App() {
  const [count, setCount] = useState(0)

  // let status = false;

  // useEffect(() => {
  //   console.log("without dependency");
  //   document.title = `you clicked ${count} times`
  //   if(count %2===0){
  //     console.log("It is even number")

  //   }
  // })

  // useEffect(() => {
  //   console.log("with dependency with empty array")
  //   if(count%4=== 0){
  //     console.log("It is divisible by 4")
  //   }
  // }, [])


  // useEffect(() => {
  //   console.log("dependency with value")
  //   if(count%4=== 0){
  //     console.log("It is divisible by 4")
  //   }else{
  //     console.log("It is not divisible by 4")
  //   }

  // }, [count])



  // useEffect(()=>{
  //   const timer = setInterval(()=>{
  //     console.log("It is a timer")
  //   },2000)
  //   // return ()=>{
  //   //   clearInterval(timer)
  //   // }
  // },[])









  return (
    <>

      <h1> Example of useEffect </h1>
      <h1> Count : {count}</h1>

      <button  onClick={() => setCount(count + 1)}>Increase</button>

      <button onClick={() => setCount(count - 1)}>Decrease</button>

      {/* <FetchData /> */}
      <UserTable />




    </>
  )
}

export default App
