import { useState } from 'react'
import './App.css'
import Profile from "./components/Profile"
import UserContext from "./context/UserContext"


function App() {
  const [username , setUsername] = useState("Hello I am Venukumar")

  return (
    <UserContext.Provider value={{username , setUsername}}>
      <div  style={{border:"2px solid blue", padding:"20px"}}>
        <h2> App Component </h2>
        <Profile />

      </div>
    </UserContext.Provider>
  )
}





// function App() {
//   const [username , setUsername] = useState("Hello I am Venukumar")

//   return (
//     <div style={{border:"2px solid blue", padding:"20px"}}>
//       <h2> App Component</h2>
//       {/* <h3> username : {username} </h3> */}
//       <Profile username = {username}/>

//     </div>
//   )
// }

export default App
