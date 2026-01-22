import {useState , useEffect} from "react"

import { Routes, Route, Link ,useParams , Navigate} from "react-router-dom"


const HomePage = () => {
    return (
        <>
            <h3> I am Home Page </h3>
        </>
    )
}

const AboutPage = () => {
    return (
        <>
            <h3> I am About Page</h3>
        </>
    )
}


const ListingPage = () => {
    return (
        <>
            <h3>I am Listing Page </h3>
        </>
    )
}

const PageNotFound = () => {
    return (
        <>
            <h3>Page in not found</h3>
        </>
    )
}

const Users =()=>{
    // console.log(props)
    const [data,setData] = useState(null);

    const params = useParams();
    // console.log("params----",params);
    const userId = params.id;
    // console.log("userId--------",userId)


    useEffect(()=>{
        try{

            const FetchUserData = async ()=>{

            const response =await fetch(`https://fakestoreapi.com/users/${userId}`)
            const userData = await response.json()
            // console.log("userData-------",userData)
            setData(userData)
            // console.log("userData-------",userData)


        }
        FetchUserData();
            
        }catch(error){
            console.log("error ---------",error)
        }
        
    })


    return(
        <>
        {/* <h3> user Details : {userId} </h3> */}

        {data == null ? (
            <h3> Loading .....</h3> 
    ) : (
        <>
         <h3> User Name : {data.username} </h3>
        <h3> Name : {data.name.firstname + " " + data.name.lastname}</h3>
        <h3>Phone  : {data.phone}</h3>
        
        </>
    )}
        </>
    )
}




const Routing = () => {

    return (
        <>
            <nav>
                <h1> Routing Example </h1>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>

                    <li>
                        <Link to="/about">About Page</Link>
                    </li>

                    <li>
                        <Link to="/listing">Listing Page</Link>
                    </li>

                    <li>
                        <Link to="/users/:id">User page</Link>
                    </li>

                </ul>
            </nav>




            <Routes>
                <Route path="/" element={<HomePage> </HomePage>}></Route>
                <Route path="/about" element={<AboutPage> </AboutPage>}></Route>
                <Route path="/listing" element={<ListingPage> </ListingPage>} ></Route>


                {/* wild card entry thats why we use path as "*" */}
                {/* If some people enter some thing wrongly and different kind of text,
                           in that ssituatin it will show the page is not found */}
                <Route path="*" element={<PageNotFound></PageNotFound>}> {" "} </Route>

                <Route path ="/users/:id" element= {<Users userAdmin></Users>}></Route>

                <Route path = "/abc" element = {<Navigate to ="/about"></Navigate>}></Route>
            
            </Routes>
        </>
    )
}

export default Routing;