
// import React, { useState, useEffect } from "react";



// const Table = () => {
//     const [data, setData] = useState([])


//     useEffect(() => {


//         const fetchData = async () => {

//             try {
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users")
//                 const result = await response.json()
//                 console.log(result)

//                 setData(result)
//             } catch (error) {
//                 console.log(error)
//             }

//         }

//         fetchData();

//     }, [])







//     return (

//         <>
//             <div className="container">

//                 <table border="2" cellPadding="5" >
//                     <thead>
//                         <tr>
//                             <td>ID</td>
//                             <td>Name</td>
//                             <td>Email</td>
//                             <td>City</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((user) => (
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name} </td>
//                                 <td>{user.email} </td>
//                                 <td>{user.address.city} </td>
//                             </tr>
//                         ))}
//                     </tbody>


//                 </table>
//             </div>


//         </>

//     )
// }






// export default Table;



// import React, { useState, useEffect } from "react";



// const Table = () => {

//     const [data, setData] = useState([]);
//     const [search, setSearch] = useState("");
//     const [sortOrder, setSortOrder] = useState("")

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const userData = await fetch('https://jsonplaceholder.typicode.com/users')
//                 const result = await userData.json();
//                 console.log(result);

//                 setData(result);

//             } catch (error) {
//                 console.log(error)
//             }

//         }
//         fetchData();
//     }, [])

//     const filterUsers = data.filter((data) => (
//         data.name.toLowerCase().includes(search.toLowerCase())

//     ))
//     console.log("filterUsers-------", filterUsers)


//     const sortedUsers = [...filterUsers].sort((a, b) => {
//         if (sortOrder === "asc") {
//             return a.name.localeCompare(b.name)
//         } else {
//             return b.name.localeCompare(a.name)
//         }
//     })

//     console.log("sorted Users-------", sortedUsers)

//     return (
//         <>
//             <h2> User Table </h2>

//             {data ? <p> Data Loaded</p> : <p>Loading....</p>}

//             <label htmlFor="search"> Filter :</label>
//             <input type="text"
//                 value={search}
//                 placeholder="Search by Name"
//                 name="search"
//                 onChange={(e) => setSearch(e.target.value)} />


//             <button onClick={() => setSortOrder("asc")}> sort A-Z</button>
//             <button onClick={() => setSortOrder("desc")}> sort Z-A</button>



//             <table border="2" cellPadding="5">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>City</th>
//                     </tr>

//                 </thead>



//                 <tbody>
//                     {sortedUsers.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.address.city}</td>
//                         </tr>
//                     ))}

//                 </tbody>

//             </table>






//         </>
//     )

// }

// export default Table



// import React, { useState, useEffect } from "react";



// const Table = () => {


//     const [data, setData] = useState([]);
//     const [search, setSearch] = useState("")
//     const [sortData, setSortData] = useState("")




//     useEffect(() => {

//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users")


//                 const result = await response.json();
//                 console.log(result);

//                 setData(result);

//             } catch (error) {
//                 console.log(error)
//             }

//         }

//         fetchData();

//     }, [])


//     const filterUsers = data.filter((data) => (
//         data.name.toLocaleLowerCase().includes(search.toLowerCase())
//     ));


//     console.log("filterd users", filterUsers)


//     const sortedUsers = [...filterUsers].sort((a, b) => {

//         if (sortData === "asc") {
//             return a.name.localeCompare(b.name)
//         } else {
//             return b.name.localeCompare(a.name)
//         }
//     });

//     console.log("sorted users", sortedUsers);


//     return (
//         <>
//             <h2> Users Table </h2>

//             {data ? <div> Data Loaded</div> : <div> Loading....</div>}

//             <label htmlFor="search">Filter :</label>
//             <input type="text"
//                 placeholder="Filter by Name"
//                 name="search"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)} />



//             <button onClick={() => setSortData("asc")}> sort A-Z </button>
//             <button onClick={() => setSortData("desc")}> sort Z-A</button>

//             <table border="2" cellpadding="5">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email </th>
//                         <th>Phone No </th>
//                         <th>City</th>

//                     </tr>

//                 </thead>

//                 <tbody>

//                     {sortedUsers.map((user) => (
//                         <tr key={user.id}>

//                             <td>{user.name} </td>
//                             <td>{user.email}</td>
//                             <td>{user.phone}</td>
//                             <td>{user.address.city}</td>
//                         </tr>

//                     ))}

//                 </tbody>


//             </table>

//         </>
//     )
// }

// export default Table;



// import React from "react";
// import { useEffect, useState } from "react";



// const Table = ()=> {

//     const [data, setData] = useState([])
//     const [filter,setFilter] = useState("")
//     const [sorted,setSorted] = useState("")

//     useEffect( () => {

//         try {
//             const fetchData = async() => {
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users")
//                 const result =await response.json()
//                 console.log(result)

//                 setData(result);

//             }
//             fetchData();
//         } catch (error) {
//             console.log(error)
//         }

//     }, [])

//     const filterUsers = data.filter((data)=>(
//         data.name.toLowerCase().includes(filter.toLowerCase())

//     ))

//     console.log("filterd users",filterUsers)

//     const SortedUsers = [...filterUsers].sort((a,b)=>{
//         if(sorted === "asc"){
//            return a.name.localeCompare(b.name)
//         }else{
//             return b.name.localeCompare(a.name)
//         }

//     })

//     console.log("sorted Users",SortedUsers)



//     return(
//         <>
//             <h2> Users Table</h2>
//             {data ? <div> Data is Loaded</div> : <div> Data Loading</div>}

//             <label>Filter : </label>
//             <input type="search"
//             placeholder="Filter"
//             name="filter"
//             value={filter}
//             onChange={(e)=>setFilter(e.target.value)} />

//             <button onClick={()=>setSorted("asc")}> A - Z</button>
//             <button onClick={()=>setSorted("desc")}> Z - A</button>

//             <table border="2" cellPadding="5">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>E-mail</th>
//                         <th>Phone No</th>
//                         <th>City</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {SortedUsers.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.name}</td>
//                             <td>{user.email} </td>
//                             <td>{user.phone}</td>
//                             <td>{user.address.city} </td>
//                         </tr>
//                     ))}
//                 </tbody>

//             </table>

//         </>
//     )
// }

// export default Table;


// import { useState,useEffect } from "react";


// const Table =()=>{


//     const [data,setData] = useState([]);
//     const [search,setSearch] = useState("");
//     const [sort,setSort] = useState("");

//     useEffect(()=>{

//         const fetchData =async()=>{
//             try{
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users")
//                 const result =  await response.json()

//                 console.log(result)
//                 setData(result)

//             }catch(error){
//                 console.log(error);
//             }

//         }
//         fetchData()
//     },[])

//     const filterUsers = data.filter((data)=>(
//         data.name.toLowerCase().includes(search.toLowerCase())
//     ))

//     console.log("filtered Users", filterUsers)

//     const sortedUsers = [...filterUsers].sort((a,b)=>{
//         if(sort === "asc"){
//             return a.name.localeCompare(b.name)
//         }else{
//             return b.name.localeCompare(a.name)
//         }
//     })

//     console.log("sorted Users", sortedUsers)



//     return(
//         <>
//         <h2> Users Table</h2>
//         {data ? <div>Data is Loaded</div>: <div>Data is Loading</div>}

//         <label> Filter : </label>
//         <input type="search"
//         name="search"
//         placeholder="search"
//         value ={search}
//         onChange={(e)=>setSearch(e.target.value)} />

//         <button onClick={()=>setSort("asc")}> A - Z</button>
//         <button onClick={()=>setSort("desc")}> Z - A</button>

//         <table border="2" cellPadding="5"> 
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>E-Mail</th>
//                     <th>Mobile</th>
//                     <th>City</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 {sortedUsers.map((user)=>(
//                     <tr key={user.id}>
//                         <td>{user.name}</td>
//                         <td>{user.email} </td>
//                         <td>{user.phone} </td>
//                         <td>{user.address.city} </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>

//         </>
//     )

// }

// export default Table;



import React, { useState, useEffect } from "react";



const Table = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/users")
                let result = await response.json();
                console.log(result);
                setData(result);

            } catch (error) {
                console.log(error);

            }

        }
        fetchData();

    }, [])


    const filterData = data.filter((data) => {
       return data.name.toLowerCase().includes(search.toLowerCase());
    })

    console.log("filter Users-----", filterData)


    const sortData = [...filterData].sort((a, b) => {
        if (sort === "asc") {
            return a.name.localeCompare(b.name)
        } else {
            return b.name.localeCompare(a.name)
        }
    })

    console.log("sortData", sortData)

    const ascData = [...filterData].sort((a, b) => {
        if (sort === "asc") {
            return a.name.localeCompare(b.name)
        }
    })
    console.log(ascData)

    const descData = [...filterData].sort((a, b) => {
        if (sort === "desc") {
            return b.name.localeCompare(a.name)
        }
    })

    console.log(descData)


    return (
        <>

            <h1> User Table </h1>

            <label > Filter by Name : </label>
            <input type="search"
                name="search"
                value={search}
                onChange={((e) => setSearch(e.target.value))} />


            <button onClick={() => setSort("asc")}> A-Z </button>
            <button onClick={() => setSort("desc")}> Z-A </button>
            <table border="2" cellPadding="5">
                <thead>
                    <tr>
                        <th>Name </th>
                        <th> E-Mail </th>
                        <th> City </th>
                        <th> Phone </th>
                    </tr>

                </thead>



                <tbody>
                    {sortData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name} </td>
                            <td>{user.email} </td>
                            <td>{user.address.city} </td>
                            <td>{user.phone} </td>
                        </tr>

                    ))}


                </tbody>
            </table>



        </>
    )
}

export default Table;