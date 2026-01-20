const CityComponent = ({ cityArray, status, mobiles }) => {

    console.log("cityArray---------", cityArray)
    return (
        <>
            <h2>Mobiles List :</h2>
            {/* <h3>Hyd</h3>
        <h3>Bng</h3>
        <h3>Vizag</h3>
        <h3>Chennai</h3>
        <h3>Mumbai</h3> */}
            {status ? "Failure" : "Success"}


            {
                mobiles.map((ele, index) => {
                    return <h3 key={"mobiles" + index} >{ele}</h3>
                })
            }

            <h2> City List : </h2>
            {
                cityArray.map((ele, index) => (
                    <h3 key={"cityArray" + index} > {ele} </h3>
                ))
            }

        </>
    )
}


export default CityComponent;