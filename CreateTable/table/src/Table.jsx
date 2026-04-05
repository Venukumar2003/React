
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



import React, { useState, useEffect } from "react";



const Table = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetch('https://jsonplaceholder.typicode.com/users')
                const result = await userData.json();
                console.log(result);

                setData(result);

            } catch (error) {
                console.log(error)
            }

        }
        fetchData();
    }, [])

    const filterUsers = data.filter((data) => (
        data.name.toLowerCase().includes(search.toLowerCase())

    ))
    console.log("filterUsers-------", filterUsers)


    const sortedUsers = [...filterUsers].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.name.localeCompare(b.name)
        } else {
            return b.name.localeCompare(a.name)
        }
    })

    console.log("sorted Users-------", sortedUsers)

    return (
        <>
            <h2> User Table </h2>

            {data ? <p> Data Loaded</p> : <p>Loading....</p>}

            <label htmlFor="search"> Filter :</label>
            <input type="text"
                value={search}
                placeholder="Search by Name"
                name="search"
                onChange={(e) => setSearch(e.target.value)} />


            <button onClick={() => setSortOrder("asc")}> sort A-Z</button>
            <button onClick={() => setSortOrder("desc")}> sort Z-A</button>



            <table border="2" cellPadding="5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>

                </thead>



                <tbody>
                    {sortedUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}

                </tbody>

            </table>






        </>
    )

}

export default Table