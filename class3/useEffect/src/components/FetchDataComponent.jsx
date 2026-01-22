// import {useState , useEffect} from "react"

// const FetchDataComponent = ()=>{
//     const [data , setData] = useState(null)

//     useEffect(()=>{
//         try{
//             const fetchData = async ()=>{
//                 const response = await fetch('https://jsonplaceholder.typicode.com/todos/10')
//                 // console.log("response -------",response)

//                 const result = await response.json();
//                 setData(result);
//             }
//             fetchData();

//         }catch(error){
//             console.log("error-----",error)
//         }
//     })

//     return (
//         <>
//         {data  ? <p> Data is Loaded <br />
//            Title :  {data.title} </p> : <p> Loading.....</p> }
//         </>
//     )
// }


// export default FetchDataComponent;



import { useState, useEffect } from "react"


const FetchDataComponent = () => {

    const [data, setData] = useState(null);

    useEffect(()=>{
        try{

            const fetchData = async()=>{
                const response =await fetch("https://jsonplaceholder.typicode.com/todos/4")
                // console.log(response)
                const result = await response.json()
                console.log(result);
                setData(result);
            }
            fetchData();

        }catch(error){
            console.log("error --------",error)
        }
    })

    return (
        <>
            {data ? <p>Data is Loaded <br /> Title :  {data.title}</p> : <p>Loading.....</p>}
        </>
    )
}







export default FetchDataComponent;