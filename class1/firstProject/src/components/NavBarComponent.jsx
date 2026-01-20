const NavBarComponent = ({ personDetails }) => {
    return (
        <>
            <h1>This is NavBarComponent </h1>
            <h3>This is NavBarComponent </h3>


            {/* {
                personDetails.map((ele, index) => (
                    <h3 key={index}>{ele} </h3>
                ))
            } */}



            <h2>personDetails :</h2>
            <h3>{personDetails.name}</h3>
            <h3>{personDetails.salary}</h3>
            <h3>{personDetails.role}</h3>
        </>


    )
}


export default NavBarComponent;