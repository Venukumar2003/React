// import React,{useState , useMemo} from "react";


// const generateLargeArray = ()=>{
//     const largeArray =[];

//     console.time("generateLargeArray")

//     for(let i=1;i<=10000;i++){
//         largeArray.push(i)
//     }

//     // for(let i=100000;i>=1;i--){
//     //     largeArray.push(i);
//     // }

//     console.timeEnd("generateLargeArray")

//     return largeArray;

// }

// const sumArray = (array)=>{
//     console.time("sumArray");

//     let result = array.reduce((acc,curr)=>{
//         acc = acc + curr;
//         return acc

//     },0)
//     console.timeEnd("sumArray")

//     return result;
    
// }

// const UseMemoComponent = ()=>{
//     const [count , setCount] = useState(0)

//     const largeArray = useMemo(()=> generateLargeArray(),[])
//     const sum = useMemo(()=>sumArray(largeArray),[largeArray])

//     return(
//         <>
//         <h1>useMemo Example</h1>
//         <h2> Sum : {sum}</h2>
//         <button onClick={()=>setCount(count+1)}> Increase </button>
//         <p>Count : {count} </p>
        
        
//         </>
//     )
// }

// export default UseMemoComponent;




import React,{useState , useMemo} from "react";


const generateLargeArray = ()=>{
    const largeArray =[];

    console.time("generateLargeArray")

    for(let i=1;i<=10;i++){
        largeArray.push(i)
    }

    // for(let i=100000;i>=1;i--){
    //     largeArray.push(i);
    // }

    console.timeEnd("generateLargeArray")

    return largeArray;

}

const sumArray = (array)=>{
    console.time("sumArray");

    let result = array.reduce((acc,curr)=>{
        acc = acc * curr;
        return acc

    },1)
    console.timeEnd("sumArray")

    return result;
    
}

const UseMemoComponent = ()=>{
    const [count , setCount] = useState(0)

    const largeArray = useMemo(()=> generateLargeArray(),[])
    const sum = useMemo(()=>sumArray(largeArray),[largeArray])

    return(
        <>
        <h1>useMemo Example</h1>
        <h2> Sum : {sum}</h2>
        <button onClick={()=>setCount(count+1)}> Increase </button>
        <p>Count : {count} </p>
        
        
        </>
    )
}

export default UseMemoComponent;