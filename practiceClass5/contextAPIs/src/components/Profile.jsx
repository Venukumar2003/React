import React from "react";
import UserCard from "./UserCard"

const Profile=()=>{
    return(
        <div style={{border:"2px solid green",padding:"20px"}}>

            <h2>This is my Profile Component</h2>
            <UserCard />
        </div>
    )
}

// const Profile=({username})=>{
//     return(
//         <div style={{border:"2px solid green",padding:"15px"}}>

//             <h2>This is my Profile Component</h2>
//             <UserCard username={username}/>
//         </div>
//     )
// }

export default Profile;