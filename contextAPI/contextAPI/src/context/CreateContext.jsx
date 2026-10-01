
// import {useState,useEffect,createContext} from "react";


// export const UserContext = createContext();

// export const UserProvider = ({children})=>{

//     const [data,setData] = useState([]);
//     const [loading,setLoading] = useState(false);
//     const [errors,setErrors] = useState("");


//     useEffect(()=>{
//         const fetchData = async()=>{
//             try{
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users")
//                 const result = await response.json()
//                 console.log(result);

//                 setData(result);

//             }catch(error){
//                 console.log("Error in fetching data",error)
//             }
//         }
//         fetchData();
//     },[])

//     return(
//         <>

//         <UserContext.Provider value={{data,loading,errors}} >
//             {children}
//         </UserContext.Provider>

//         </>
//     )


// }


import { useState, useEffect, createContext } from "react";


export const UserContext = createContext();

export const UserPrvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const result = await response.json()
                console.log(result)
                setUsers(result);
            } catch (error) {
                console.log("Error in fetching data", error)
            }

        }
         fetchData();
    },[])

   


    return(
        <>
        <UserContext.Provider value = {{users,loading,errors}}>
            {children}
        </UserContext.Provider>
        
        </>
    )
}