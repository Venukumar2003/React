// import React,{useState,useCallback} from "react";


// const Child = React.memo(({item,removeItem})=>{
//     console.log("Child rendered",item);
//     return <li onClick={()=>removeItem(item)}>{item}</li>
// })

// const UseCallbackComponent =()=>{
//     const [item,setItem] = useState(["A","B","C"]);

//     const removeItem = useCallback((item)=>{
//         setItem(prev=>prev.filter(i=> i !== item));
//     },[])

//     return(
//         <>
//         <ul>
//             {item.map((item)=>(
//                 <Child key ={item} 
//                 item ={item}
//                 removeItem={removeItem} />

//             ))}
//         </ul>
        
        
        
//         </>
//     )
// }

// export default UseCallbackComponent;





// import React,{useState,useCallback} from "react";


// const Child = React.memo(({item,removeItem})=>{
//     console.log("Child rendered",item);
//     return <li onClick={()=>removeItem(item)}>{item}</li>
// })

// const UseCallbackComponent =()=>{
//     const [item,setItem] = useState(["A","B","C"]);

//     const removeItem = useCallback((item)=>{
//         setItem(prev=>prev.filter(i=> i !== item));
//     },[])

//     return(
//         <>
//         <ul>
//             {item.map((item)=>(
//                 <Child key ={item} 
//                 item ={item}
//                 removeItem={removeItem} />

//             ))}
//         </ul>
        
        
        
//         </>
//     )
// }

// export default UseCallbackComponent;




// import React, { useState, useCallback } from 'react';

// const Use_callback = () => {
//     const [items, setItems] = useState(["item1", "item2", "item3", "item4", "item5"]);

//     // useCallback(() => { }, []);

//     const removeItem = useCallback((item) => {
//         console.log("item remove item");
//         setItems((prevItem)=> prevItem.filter((ele) => ele !== item))
//     }, []);


//     //  const removeItem = (item) => {
//     //     // items.filter((ele)=> ele !== item)
//     //     console.log("item remove item");
//     //     setItems((prevItem)=> prevItem.filter((ele) => ele !== item))
//     // }
        
//     return (
//         <>
//             <h1>Use callback</h1>
//             {items.map((ele, index) => (
//                 <div key={index}>
//                     {ele}
//                     <button onClick={() => removeItem(ele)}>removeItem</button>
//                 </div>
//             )
//             )}
//         </>
//     );
// }

// export default Use_callback;





import React,{useState,useCallback} from "react";

const UseCallbackComponent=()=>{

    const [item,setItem] = useState(["item1","item2","item3","item4","item5"])


    const removeItem = useCallback((item)=>{
        console.log("item removed");
        setItem((prev) => prev.filter((ele)=>ele !== item))
    },[])

    return(

        <>
        <h2>Use Callback Example</h2>
        {item.map((ele,index)=>{
           return <div key={index}>
                {ele}
                <button onClick={()=>removeItem(ele)}>DeleteItem </button>

            </div>

        })}
        
        
        </>
    )
}

export default UseCallbackComponent;


// import React,{useState,useCallback} from "react";
// const UseCallbackComponent=()=>{

//     const [items, setItems] = useState(["item1", "item2", "item3", "item4", "item5"]);

//     // useCallback(() => { }, []);

//     const removeItem = useCallback((item) => {
//         console.log("item remove item");
//         setItems((prevItem)=> prevItem.filter((ele) => ele !== item))
//     }, []);


//     //  const removeItem = (item) => {
//     //     // items.filter((ele)=> ele !== item)
//     //     console.log("item remove item");
//     //     setItems((prevItem)=> prevItem.filter((ele) => ele !== item))
//     // }
        
//     return (
//         <>
//             <h1>Use callback</h1>
//             {items.map((ele, index) => (
//                 <div key={index}>
//                     {ele}
//                     <button onClick={() => removeItem(ele)}>removeItem</button>
//                 </div>
//             )
//             )}
//         </>
//     );
// }




// export default UseCallbackComponent;