const FruitsComponent = ({ fruitsArray }) => {

    console.log("Array ------------",fruitsArray)
    return (
        <>
        <h1>Fruits Names </h1>
            <h2>Fruits List : </h2>
            <h3>Apple</h3>
            <h3>Banana</h3>
            <h3>Orange</h3>
            <h3>Pine Apple</h3>
            <h3>Pomogranite</h3>

            {status ? "failure" : "success"}

            {/* {
                fruitsArray.map((ele, index) => (
                    <h3 key={index}> {ele}</h3>

                ))
            } */}

        </>


    )
}


export default FruitsComponent;