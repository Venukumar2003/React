import { useState } from 'react'
import './App.css'


import DisplayCount from "./components/DisplayCount"
import ManageCount from "./components/ManageCount"

function App() {

  const [count, setCount] = useState(0)

  const incrementFn = () => {
    // setCount(prev => prev + 1)
    setCount(count+1)
  }

  const decrementFn = () => {
    // setCount(prev => prev - 1)
    setCount(count-1)
  }

  const resetFn = () => {
    setCount(0)
  }






  return (
    <>
      <h1> App.jsx Component </h1>
      <DisplayCount count={count}
        incrementFn={incrementFn}
        decrementFn={decrementFn}
        resetFn={resetFn} 
      />


      <ManageCount count={count}
        incrementFn={incrementFn}
        decrementFn={decrementFn}
        resetFn={resetFn} 
      />




    </>
  )
}

export default App





// import { useState } from "react";
// import DisplayCount from "./components/DisplayCount";
// import ManageCount from "./components/ManageCount";

// function App() {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(prev => prev + 1);
//   };

//   const decrementCount = () => {
//     setCount(prev => prev - 1);
//   };

//   const resetCount = () => {
//     setCount(0);
//   };

//   return (
//     <>
//       <DisplayCount
//         count={count}
//         increaseCount={increaseCount}
//         decrementCount={decrementCount}
//         resetCount={resetCount}
//       />

//       <ManageCount
//         count={count}
//         increaseCount={increaseCount}
//         decrementCount={decrementCount}
//         resetCount={resetCount}
//       />
//     </>
//   );
// }

// export default App;
