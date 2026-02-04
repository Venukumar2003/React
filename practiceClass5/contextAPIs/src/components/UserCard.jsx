import UserName from "./UserName";

const Profile=()=>{
    return(
        <div style={{border:"2px solid black",padding:"20px"}}>

            <h2>This is my Profile Component</h2>
            <UserName/>
        </div>
    )
}


// const Profile=({username})=>{
//     return(
//         <div style={{border:"2px solid Orange",padding:"15px"}}>

//             <h2>This is my Profile Component</h2>
//             <UserName username={username}/>
//         </div>
//     )
// }

export default Profile;