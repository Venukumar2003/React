import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserName=()=>{
    const {username} = useContext(UserContext)
    return(
        <div style={{border:"2px solid blue",padding:"20px"}}>

            <h2>This is my UserName Component</h2>
            <h4>username = {username}</h4>
        </div>
    )
}

// const UserName=({username})=>{
//     return(
//         <div style={{border:"2px solid blue",padding:"15px"}}>

//             <h2>This is my UserName Component</h2>
//             <h4>username = {username}</h4>
//         </div>
//     )
// }


export default UserName;