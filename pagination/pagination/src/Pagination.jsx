import React, { useState, useEffect } from "react";


const Pagination = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    //To fetch data


    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch("https://fakestoreapi.com/products/category/electronics");
            let result = await res.json();
            console.log(result);


            setData(result);
        }
        fetchData();
    }, [])



    // pagination


    const productsPerPage = 2;

    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;

    const currentProducts = data.slice(firstIndex, lastIndex)


    const totalPages = Math.ceil(data.length / productsPerPage)




    return (
        <>
            <h1> Products Table</h1>

            <table border="2" cellPadding="5">

                <thead>
                    <tr>
                        <th> S.No </th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>


                </thead>

                <tbody>
                    {currentProducts.map((prod, index) => (
                        <tr key={prod.id}>
                            <td>{firstIndex + index + 1} </td>
                            <td>{prod.title} </td>
                            <td>{prod.category} </td>
                            <td>{prod.price} </td>
                            <td>{prod.description} </td>
                        </tr>
                    ))}

                </tbody>


            </table>

            <button style={{ width: "100px", height: "30px", margin: "auto", }} disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                Next
            </button>

            <span> Page {currentPage} of {totalPages}</span>

            <button style={{ width: "100px", height: "30px", margin: "auto", }} disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                Previous
            </button>




        </>
    )
}


export default Pagination;