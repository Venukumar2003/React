
import React, { useState, useEffect } from "react";

const Table = () => {
    const [data, setData] = useState([])


    useEffect(() => {


        const fetchData = async () => {

            try {
                const response = await fetch("https://fakestoreapi.com/users")
                const result = await response.json()
                console.log(result)

                setData(result)
            } catch (error) {
                console.log(error)
            }

        }

        fetchData();

    }, [])







    return (

        <>
            <div className="container">

                <table border="2" cellPadding="5" >
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>City</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name.firstname + " " + user.name.lastname} </td>
                                <td>{user.email} </td>
                                <td>{user.address.city} </td>
                            </tr>
                        ))}
                    </tbody>


                </table>
            </div>


        </>

    )
}






export default Table;