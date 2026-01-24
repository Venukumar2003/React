import { useState, useEffect } from "react"


// const Table = () => {

//     const [users, setUsers] = useState([]);


//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://fakestoreapi.com/users");
//                 //    console.log("response -------",response)
//                 const data = await response.json();
//                 console.log("data--------", data);
//                 setUsers(data);

//             } catch (error) {
//                 console.log("error--------", error)
//             }

//         }

//         fetchData();
//     }, [])





//     return (
//         <>

//             <h2> Users List </h2>

//             {/* <h2> userName : {users.} </h2> */}

//             {users ? <p>Data Loaded </p> : <p>Loading.....</p>}


//             <table border="2" cellPadding= "5">

//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>E-Mail</th>
//                         <th>Phone Number </th>
//                         <th>City</th>
//                     </tr>
//                 </thead>

//                 <tbody>

//                     {users.map((users) => (
//                         <tr>
//                             <td>{users.id}</td>
//                             <td>{users.name.firstname + " " + users.name.lastname} </td>
//                             <td>{users.email} </td>
//                             <td>{users.phone} </td>
//                             <td>{users.address.city} </td>


//                         </tr>

//                     ))}


//                 </tbody>

//             </table>



//         </>
//     )



// }



const Table =()=>{

    const [users , setUsers] = useState([])

    useEffect(()=>{

        const fetchData = async()=>{
        try{
            const response = await fetch("https://fakestoreapi.com/users")
        const data = await response.json()
        console.log("data--------",data)
        setUsers(data)

        }catch(error){
            console.log("error-------",error)
        }
    }

    fetchData();

    },[])

    



    return(
        <>

        <h2>User Data</h2>
        {users ? <p> Data Loaded </p>:<p>Loading....</p> }

        <table border="2" cellPadding= "5">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>City</th>
                    <th>Phone Number </th>
                </tr>


            </thead>

            <tbody>

                {users.map((users) => (
                    <tr key={users.id}>


                        <td>{users.id}</td>
                        <td>{users.name.firstname + " " + users.name.lastname} </td>
                        <td>{users.email}</td>
                        <td>{users.address.city}</td>
                        <td>{users.phone}</td>


                    </tr>
                ))}


            </tbody>
        </table>
        
        </>
    )
}



export default Table;