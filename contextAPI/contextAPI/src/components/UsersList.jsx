

// import { useContext } from "react";

// import { UserContext } from "../context/CreateContext";


// const UsersList = ()=>{

//     const {data,loading,errors} = useContext(UserContext);
// if(loading){
//     console.log("....Loading")
// }

// if(errors){
//     console.log("Error in Users List")
// }


//     return(
//         <>
//         <h1>Users List </h1>
//        {data.map((item)=>(
//         <div key={item.id}>
//             <h2>{item.name} </h2>
//             <p>{item.email} </p>

//         </div>

//        ))}
//         </>
//     )
// }

// export default UsersList;



import { useContext } from "react";
import { UserContext } from "../context/CreateContext";

const UsersList=()=>{

    const {users,loading,errors} = useContext(UserContext)

    if(loading) {
        console.log("....Loading")
    }
    if(errors){
        console.log("Errors occured in UsersList")
    }

    return(
        <>
        <h1> My Application</h1>
        {users.map((user)=>(
            <div key={user.id}>
                <h2>{user.name} </h2>
                <span>{user.email} </span>
                <br/>
                <span>City :    {user.address.city} </span>

            </div>
        ))}
        
        </>
    )
}

export default UsersList;