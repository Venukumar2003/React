import { useState, useEffect } from "react";

const FetchData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchingData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/users/10")
                //    console.log(response)
                const userData = await response.json()
                console.log("userData------", userData)
                setData(userData)


            } catch (error) {
                console.log("error-------", error)
            }
        }

        fetchingData();


    },[])


    return (
        <>
            {data ? <p> Data is Loaded</p> : <p> Loading ......</p>}

            <h2> UserName : {data.username}</h2>
            <h2> Name : {data.name.firstname + " "+ data.name.lastname}</h2>

        </>
    )


}



export default FetchData;