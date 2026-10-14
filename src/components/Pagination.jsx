import { useEffect, useState } from "react";



const Pagination = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [isLoading, setIsLoading] = useState(true);


    const filterData = data.filter((data) => {
        return data.title.toLowerCase().includes(search.toLowerCase())

    })
    console.log(filterData)

    const sortData = [...filterData].sort((a, b) => {
        if (sort === "asc") {
            return a.title.localeCompare(b.title)
        } else {
            return b.title.localeCompare(a.title)
        }
    })
    console.log(sortData);

    const productsPerPage = 4;

    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;

    const currentProducts = sortData.slice(firstIndex, lastIndex);
    const TotalPages = Math.ceil(sortData.length / productsPerPage);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            console.log(result);
            setData(result)
        }
        fetchData()
    }, [])

    return (
        <>
            <h1>Pagination</h1>
            <div>
                <input type="text"
                    placeholder="Search by Title"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />


            </div>


            <div>

                <button onClick={() => setSort("asc")} >Asc</button>


                <button onClick={() => setSort("desc")} >Desc</button>
            </div>
    
                    <table border="5" cellPadding="5">
                        <thead>
                            <tr>
                                <th>S.No </th>
                                <th>Title </th>
                                <th>Category </th>
                                <th>Price </th>
                                <th>Description </th>


                            </tr>
                        </thead>

                        <tbody>
                            {currentProducts.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{firstIndex + index + 1} </td>
                                    <td>{item.title} </td>
                                    <td>{item.category} </td>
                                    <td>{item.price} </td>
                                    <td>{item.description} </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    
                    
                    

                    {/* <table border="5" cellPadding="5">
                <thead>
                    <tr>
                        <th>S.No </th>
                        <th>Title </th>
                        <th>Category </th>
                        <th>Price </th>
                        <th>Description </th>


                    </tr>
                </thead>

                <tbody>
                    {currentProducts.map((item, index) => (
                        <tr key={item.id}>
                            <td>{firstIndex + index + 1} </td>
                            <td>{item.title} </td>
                            <td>{item.category} </td>
                            <td>{item.price} </td>
                            <td>{item.description} </td>
                        </tr>
                    ))}
                </tbody>

            </table> */}
                    <div>
                        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} > BACK </button>

                        <span> {currentPage} / {TotalPages} </span>

                        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === TotalPages} > NEXT </button>
                    </div>


                </>
    )
}

            export default Pagination;