const CityComponent = ({ cityArray }) => {

    console.log("city Array-----------", cityArray)
    return (
        <>

            <h1>City Names</h1>
            <h2>City List : </h2>
            <h3>Hyd</h3>
            <h3>Bng</h3>
            <h3>Chennai</h3>
            <h3>Vizag</h3>
            <h3>Anantapur</h3>

            {status ? "success" : "failure"}


            {
                cityArray.map((ele, index) => {
                    <h1 key={index}> {ele} </h1>
                })
            }


        </>
    )
}


export default CityComponent;