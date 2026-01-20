const FruitsComponent = ({ fruitsArray, status, laptops }) => {

    console.log("fruitsArray---------", fruitsArray)


    return (
        <>
            <h2>Fruits Lists : </h2>
            {/* <h3>apple</h3>
            <h3>Orange</h3>
            <h3>Banana</h3>
            <h3>Pine Apple</h3> */}


            {status ? "sucess" : "failure"}

            {
                fruitsArray.map((ele, index) => {
                    return <h3 key={index} >  {ele} </h3>
                })
            }

            <h2>Laptops List :</h2>

            {
                laptops.map((ele, index) => (
                    <h3 key={index} > {ele}</h3>
                ))
            }


        </>


    )
}





// const FruitsComponent = ({arrayDetails})=>{
//     return(
//         <>

//         {
//                 arrayDetails.map((ele, index) => {
//                     return <h3 key={index} >  {ele} </h3>
//                 })
//             }



//         </>
//     )
// }


export default FruitsComponent;