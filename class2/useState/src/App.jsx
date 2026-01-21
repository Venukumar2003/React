import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)


  let [email, setEmail] = useState("");
  let [name, setName] = useState("");




  const submitUserDataFn = () => {

    const userData = {
      email: { email },
      name: { name }
    }

    console.log("userData-------", userData)

  }


  // let count = 0;

  // const IncrementCount = ()=>{
  //   console.log("IncrementCount------",count);
  //   // setCount( count + 1);
  //   count= count+1;
  //   setCount(count);
  // }

  // const DecrementCount = ()=>{
  //   console.log("DecrementCount-------",count);
  //   // setCount( count-1)

  //   count= count-1;
  //   setCount(count);
  // }



  const handleSubmitForm =(event) => {
    event.preventDefault()
    console.log(name, email)
    console.log(event)
  }


  return (
    <>

      {/* <label> Email :</label>
      <input type="text"
        value={email}
        onChange={(event) => {
          console.log("event----", event.target.value)
          setEmail(event.target.value)

        }} /> */}

      {/* <h1> Email : {email}</h1> */}



      {/* <label> Name :</label>
      <input type="text"
        value={name}
        onChange={(event) => {
          console.log("event----", event.target.value)
          setName(event.target.value)

        }} /> */}

      {/* <h1> Name : {name}</h1> */}






      {/* <h1>count  : {count} </h1>
    <button onClick = {IncrementCount} > Increase </button>
    <button onClick = {DecrementCount} > Decrease </button> */}


      {/* <button onClick={submitUserDataFn} > Submit</button> */}





      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="email"> Email :</label>
          <input type="text"
            id="email"
            value={email}
            onChange={(event) => {
              console.log("event----", event.target.value)
              setEmail(event.target.value)

            }} />


          <label htmlFor="name"> Name :</label>
          <input type="text"
            id="name"
            value={name}
            onChange={(event) => {
              console.log("event----", event.target.value)
              setName(event.target.value)

            }} />


        </div>
        <button type="submit"> Submit </button>


      </form>
    </>
  )
}

export default App
