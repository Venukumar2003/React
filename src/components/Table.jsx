import { useEffect, useState } from "react";


const Table = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("")
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const result = await response.json();
                console.log(result);
                setData(result);

            } catch (error) {
                console.log("Error to fetch api", error)
            }


        }
        fetchData();

    }, [])


    const searchData = data.filter((data) => {
        return data.category?.toLowerCase().includes(search.toLowerCase());
    })
    console.log(searchData);

    // const searchData = data.filter((data) => {
    //   return data.name.toLowerCase().includes(search.toLowerCase());
    // })
    // console.log(searchData);

    const sortAsc = [...searchData].sort((a, b) => {
        if (sort === "asc") {
            return a.category.localeCompare(b.category)
        }
    })
    console.log(sortAsc);

    const sortDesc = [...searchData].sort((a, b) => {
        if (sort === "desc") {
            return b.category.localeCompare(a.category)
        }
    })
    console.log(sortDesc)

    const sortData = [...searchData].sort((a, b) => {
        if (sort === "asc") {
            return a.category.localeCompare(b.category)
        } else {
            return b.category.localeCompare(a.category);
        }
    })


    const productsPerPage = 3;

    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;

    const currentProducts = sortData.slice(firstIndex, lastIndex);

    const TotalPages = Math.ceil(sortData.length / productsPerPage)

    console.log(sortData)
    return (
        <>
            <h1>Table</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>

                <input type="search"
                    placeholder="Search By Category"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

            </div>


            <div style={{ display: "flex", justifyContent: "center", margin: "10px", padding: "5px", gap: "10px", cursor: "pointer" }}>
                <button onClick={() => setSort("asc")}>Asc</button>
                <button onClick={() => setSort("desc")}>Desc</button>

            </div>


            <table border="5" cellPadding="5">
                <thead>
                    <tr>
                        <th>Image / Title</th>
                        <th>Catergory</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {currentProducts.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{Math.ceil(item.price)}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <div style={{ display: "flex", justifyContent: "center",position:"sticky",margin:"10px",padding:"5px" }}>
            
                 <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    Back
                </button>
                <span>{currentPage} of {TotalPages} </span>

                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === TotalPages}>
                    Next
                </button>


            </div>

        </>
    )
}

export default Table;