// import { useState, useEffect } from "react";


// const Pagination = () => {

//     const [data, setData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);

//     //To fetch data


//     useEffect(() => {
//         const fetchData = async () => {
//             let res = await fetch("https://fakestoreapi.com/products/category/electronics");
//             let result = await res.json();
//             console.log(result);


//             setData(result);
//         }
//         fetchData();
//     }, [])



//     // pagination


//     // const productsPerPage = 2;

//     // const lastIndex = currentPage * productsPerPage;
//     // const firstIndex = lastIndex - productsPerPage;

//     // const currentProducts = data.slice(firstIndex, lastIndex)


//     // const totalPages = Math.ceil(data.length / productsPerPage)


//     const productsPerPage =2;
//     const lastIndex = currentPage * productsPerPage;
//     const firstIndex = lastIndex - productsPerPage;

//     const currentProducts = data.slice(firstIndex,lastIndex);

//     const totalPages = Math.ceil(data.length / productsPerPage)



//     return (
//         <>
//             <h1> Products Table</h1>

//             {/* <table border="2" cellPadding="5">

//                 <thead>
//                     <tr>
//                         <th> S.No </th>
//                         <th>Title</th>
//                         <th>Category</th>
//                         <th>Price</th>
//                         <th>Description</th>
//                     </tr>


//                 </thead>

//                 <tbody>
//                     {currentProducts.map((prod, index) => (
//                         <tr key={prod.id}>
//                             <td>{firstIndex + index + 1} </td>
//                             <td>{prod.title} </td>
//                             <td>{prod.category} </td>
//                             <td>{prod.price} </td>
//                             <td>{prod.description} </td>
//                         </tr>
//                     ))}

//                 </tbody>


//             </table> */}

// {currentProducts.map((prod,index)=>(
//     <ul key={prod.id}>
//     <li>{prod.title} <hr></hr> {prod.category} <hr></hr>{prod.price}<hr></hr>{prod.description}</li>
//     {/* <hr></hr>
//     <li>{prod.category} </li>
//     <hr></hr>
//     <li>{prod.price} </li>
//     <hr></hr>
//     <li>{prod.description} </li> */}
// </ul>

// ))}



//             <button style={{ width: "100px", height: "30px", margin: "auto", }} disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
//                 Next
//             </button>

//             <span> Page {currentPage} of {totalPages}</span>

//             <button style={{ width: "100px", height: "30px", margin: "auto", }} disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
//                 Previous
//             </button>




//         </>
//     )
// }


// export default Pagination;




// import {useState,useEffect} from "react";

// const Pagination = ()=>{
//     const [data, setData] = useState([]);
//     const [currentPage,setCurrentPage] = useState(1)


//     useEffect(()=>{

//         const fetchData = async()=>{
//             try{


//             const response =await fetch("https://fakestoreapi.com/products/category/electronics")
//            const result =await response.json();
//            console.log(result);

//            setData(result);


//             }catch(error){
//                 console.log("error in fetching data",error);
//             }
//         }
//         fetchData();

//     },[])

//     const productsPerPage = 2;

//     const lastIndex = currentPage * productsPerPage;
//     const firstIndex = lastIndex - productsPerPage;

//     const currentProducts = data.slice(firstIndex,lastIndex);

//     const TotalPages = Math.ceil(data.length / productsPerPage)



//     return(
//         <>

//         <h2>Pagination</h2>

//         <table border="5" cellPadding="5">
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <th>Category</th>
//                     <th>Price</th>
//                     <th>Description</th>
//                 </tr>

//             </thead>

//             <tbody>
//                 {currentProducts.map((item,index)=>(
//                     <tr key={item.id}>
//                         <td>{firstIndex + index+1} </td>
//                         <td>{item.title} </td>
//                         <td>{item.category} </td>
//                         <td>{item.price} </td>
//                         <td>{item.description} </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>

// <button style={{width: "100px", height: "30px", margin:"auto"}} disabled={currentPage === TotalPages} onClick={()=>setCurrentPage(currentPage+1)} > Next </button>

// <p>{currentPage} of {TotalPages}</p>
//    <button style={{width: "100px", height: "30px", margin:"auto"}} disabled={currentPage === 1} onClick={()=>setCurrentPage(currentPage-1)} > Back </button>     

//         </>
//     )
// }

// export default Pagination;



import { useState, useEffect } from "react";


const Pagination = () => {

    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/users")
                const result = await response.json();
                console.log(result);

                setData(result);

            } catch (error) {
                console.log("error in fetching data", error)
            }
        }
        fecthData();
    }, [])


    const usersPerPage = 3;

    const lastIndex = currentPage * usersPerPage;

    const firstIndex = lastIndex - usersPerPage;

    const CurrentUsers = data.slice(firstIndex, lastIndex)

    const TotalPages = Math.ceil(data.length / usersPerPage)



    return (
        <>
            <h2> Pagination </h2>

            <table border="5" cellPadding="5">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>City</th>
                </thead>

                <tbody>
                    {CurrentUsers.map((item, index) => (
                        <tr key={item.id}>
                            <td>{firstIndex + index + 1}</td>
                            <td>{item.name.firstname + item.name.lastname} </td>
                            <td>{item.email} </td>
                            <td>{item.password} </td>
                            <td>{item.address.city} </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button style={{height : "40px", width : "100px", margin : "auto"}} disabled={currentPage === TotalPages} onClick={()=>setCurrentPage((currentPage+1))} > Next </button>

<span>Page {currentPage} of {TotalPages} </span>

            <button style={{height : "40px", width : "100px", margin : "auto"}} disabled={currentPage === 1} onClick={()=>setCurrentPage((currentPage-1))} > Back </button>
        </>
    )
}

export default Pagination;