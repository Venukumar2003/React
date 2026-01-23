import { useState, useEffect } from "react"


const UserTable = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [sortOrder, setSortOrder] = useState("asc")
    const [currentPage, setCurrentPage] = useState(1)


    const USERS_PER_PAGE = 5;


    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            console.log("userData---------", data)
            setUsers(data)

        }
        fetchData();
    }, [])


    // Filter data

    const filterUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLocaleLowerCase())

    })
    console.log("filterUsers--------", filterUsers)

    // Sort data


    const sortedUsers = [...filterUsers].sort((a, b) => {
        if (sortOrder === "asc") {
            return a.name.localeCompare(b.name)
        } else {
            return b.name.localeCompare(a.name)
        }
    })


    console.log("sortedUsers--------", sortedUsers)



    // Pagination logic
    const startIndex = (currentPage - 1) * USERS_PER_PAGE;

    const paginatedUsers = sortedUsers.slice(
        startIndex,
        startIndex + USERS_PER_PAGE
    );

    const totalPages = Math.ceil(sortedUsers.length / USERS_PER_PAGE);


    return (
        <>

            <h2>Users List :</h2>

            <label htmlFor="search">Filter :</label>
            <input type="text"
                value={search}
                id="search"
                name="search"
                onChange={(event) => {
                    console.log(event.target.value)
                    setSearch(event.target.value)
                }} />



            <button onClick={() => setSortOrder("asc")}>sort A-Z </button>
            <button onClick={() => setSortOrder("desc")}>sort Z-A </button>


            {/* Table */}
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>

                <tbody>
                    {paginatedUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>




            {/* Pagination */}
            <div style={{ marginTop: "10px" }}>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                >
                    Prev
                </button>

                <span>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                >
                    Next
                </button>
            </div>





        </>
    )


}

export default UserTable;