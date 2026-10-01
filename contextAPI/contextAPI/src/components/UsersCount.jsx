
// import { useContext } from "react";

// import { UserContext } from "../context/CreateContext";

// const UsersCount = ()=>{

//     const {data,loading} = useContext(UserContext);


//     // return(
//     //     <>

//     // {/* {loading ? (<p>..... Loading</p>) : (<p>Total users : {data.length}</p>)} */}
        

//     //       <nav>
//     //   <h2>My Application</h2>

//     //   {loading ? (
//     //     <p>Loading users...</p>
//     //   ) : (
//     //     <p>Total Users: {data.length}</p>
//     //   )}
//     // </nav>
//     //     </>
//     // )


//     return (
//     <nav>
//       <h2>My Application</h2>

//       {loading ? (
//         <p>Loading users...</p>
//       ) : (
//         <p>Total Users: {data.length}</p>
//       )}
//     </nav>
//   );
// }

// export default UsersCount;




import { useContext } from "react";

import { UserContext } from "../context/CreateContext";

const UsersCount = ()=>{
    const {users,loading} = useContext(UserContext);

    return(
        <>
        {loading ? (<p> ....Loading</p>) : (<p>TotalUsers : {users.length} </p>) }

        
        </>
    )
}

export default UsersCount;