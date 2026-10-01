import React, { useContext } from "react";
import UserName from "./UserName"
import UserContext from "../context/UserContext";

const UserCard = ()=>{

    const {username} = useContext(UserContext)
    return(
        <div style= {{border : "2px dashed black", padding : "20px"}}>
            <h2>My UserCard Component</h2>
            {/* <h4>username : {username}</h4> */}
            <h4>username : {username} </h4>
            <UserName/>

        </div>
    )

}





// const UserCard = ({username})=>{
//     return(
//         <div style= {{border : "2px dashed black", padding : "20px"}}>
//             <h2>My UserCard Component</h2>
//             {/* <h4>username : {username}</h4> */}
//             <UserName  username = {username}/>

//         </div>
//     )

// }

export default UserCard;