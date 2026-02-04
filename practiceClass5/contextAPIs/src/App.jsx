import { useState } from 'react'
import UserContext from "./context/UserContext"
import Profile from './components/Profile'

function App() {
  const [username, setUsername] = useState("Hlo, I am Venukumar")

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div style={{ border: "2px solid red", padding: "20px" }}>
        <h2> My APP Component </h2>
        <Profile />

      </div>



    </UserContext.Provider>

  )
}


// function App() {
//   const [username, setUsername] = useState("Hlo, I am Venukumar")

//   return (

//       <div style={{ border: "2px solid red", padding: "15px" }}>
//         <h2> My APP Component </h2>
//         <Profile username = {username}/>

//       </div>

//   )
// }


export default App
