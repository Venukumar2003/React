import React,{useContext, useState} from "react"
import UserCard from "./UserCard"
import UserContext from "../context/UserContext"

const Profile = ()=>{
    const {username} = useContext(UserContext)

    return(

        <div style = {{border : "2px dotted green", padding : "20px"}}>
            <h2> My Profile Component</h2>
            <h4> username : {username}</h4>
            <UserCard/>
        </div>

    )

}



// const Profile = ({username})=>{

//     return(
//         <div style = {{border : "2px dotted green", padding : "20px"}}>
//             <h2> My Profile Component</h2>
//             {/* <h4> username : {username}</h4> */}
//             <UserCard username={username}/>
//         </div>

//     )

// }

export default Profile;