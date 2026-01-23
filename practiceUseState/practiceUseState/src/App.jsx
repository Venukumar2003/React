import { useState } from 'react'

import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   const [email, setEmail] = useState(" ")
//   const [name, setName] = useState(" ")

//   const handleSubmitForm = (event)=>{

//     console.log(email,name)
//     console.log(event)

//     setEmail(" ");
//     setName(" ");

//   }








//   const SubmitUserData = ()=>{

//     const userData = {
//       email : {email},
//       name : {name}
//     }

//     console.log("userData ------",userData)

//   }


//   return (
//     <>
//       <form onSubmit={handleSubmitForm} >

//          <div>

//         <label htmlFor='email'> Email : </label>
//         <input type="email"
//           value={email}
//           id="email"
//           name = "email"
//           onChange={(event) => {
//             console.log("event-----", event.target.value)
//             setEmail(event.target.value)

//           }} />
//         <h1> Email : {email}</h1>



//         <label htmlFor='name'> Name :</label>
//         <input type="text"
//           value={name}
//           id = "name"
//           name ="name"
//           onChange={(event) => {
//             console.log("event------", event.target.value)
//             setName(event.target.value)
//           }} />

//         <h1> Name : {name} </h1>


//       </div>

//       <button type = "submit" onClick ={SubmitUserData} > Submit </button>

//       </form>


//     </>
//   )
// }



// function App() {
//   const [count, setCount] = useState(0)



//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: ""
//     // gender: "",
//     // skills: ""
//   })

//   const handleChange = (event) => {
//     const { name, value } = event.target

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }))
//   }


//   const handleSubmitForm = (event) => {
//     event.preventDefault();
//     // console.log("event-----",event)
//     console.log(formData)
//     // console.log("event-----", event)

//     //  Cleat the inputs after submit 
//     setFormData({
//       name: " ",

//       email: " ",
//       phone: " "

//     })

//   }


//   // const submitUserData = () => {
//   //   const userData = {
//   //     email: { email },
//   //     name: { name },
//   //   }
//   // }


//   return (
//     <>
//       <form onSubmit={handleSubmitForm}>
//         <div>
//           <label htmlFor='name'>Name :</label>
//           <input type="text"
//             value={formData.name}
//             id="name"

//             name="name"
//             onChange={handleChange} />

//           {/* <h2> Name : {name} </h2> */}



//           <label htmlFor='email'> Email : </label>
//           <input type="email"
//             value={formData.email}
//             id="email"
//             name="email"
//             onChange={handleChange} />


//           <label htmlFor='phone'>Phone :</label>
//           <input type="tel"
//             value={formData.phone}
//             id="phone"
//             name="phone"
//             onChange={handleChange} />




//         </div>

//         <button type="submit">Submit</button>



//       </form>



//     </>

//   )
// }



// function App(){
//   const [count, setData] = useState(0)

//   const [formData , setFormData] = useState({
//     name : "",
//     gender : "",
//     skills : []


//   })

//   const handleChange=(event)=>{
//     const {name , value,type,checked} = event.target

//     if(type === "checkbox"){
//       setFormData((prev)=>({
//         ...prev,
//         skills : checked ? [...prev.skills, value]  :  prev.skills.filter((skills)=>skills !==value)
//       }))

//     }else{

//       setFormData((prev)=>({
//       ...prev,
//       [name] : value
//     }))

//     }




//   }





//   const handleSubmitForm = (event)=>{
//     event.preventDefault()
//     console.log(formData)

//     setFormData({
//       name : "",
//       gender : "",
//       skills : []
//     })
//   }


//   // const submitUserData = ()=>{
//   //   const userData = {

//   //   }
//   // }


//   return(
//     <>
//     <form onSubmit= {handleSubmitForm}>

//       <div>
//         <label htmlFor='name'>Name :</label>
//         <input type="text"
//         value= {formData.name}
//         id ="name"
//         name="name"
//         onChange= {handleChange} /> 

//         <br />
//         <br />


//         <label htmlFor="gender"> Gender :</label>
//         <input type= "radio"
//         value= "Male"
//         name="gender"
//         id="gender"
//         checked ={formData.gender === "Male"}
//         onChange = {handleChange} /> Male



//         {/* <label htmlFor='gender'> Gender :</label> */}
//         <label>
//         <input type ="radio"
//         value="Female"
//         name="gender"
//         id="gender"
//         checked = {formData.gender === "Female"}
//         onChange = {handleChange} /> 

//          Female  </label>


//          <br />
//          <br />


//          <label>Skills :</label>
//          <input type="checkbox"
//          value = "React.js"
//          onChange={handleChange} /> React.js

//          <input type="checkbox"
//          value="Node.js"
//          onChange={handleChange} /> Node.js


//          <input type="checkbox"
//          value="Javascript"
//          onChange={handleChange} /> Javascript



//       </div>

//       <button type="submit">Submit</button>
//     </form>



//     </>
//   )
// }




function App() {
  const [count, setCount] = useState(0)


  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    skills: []

  })

  const handleChange = (event) => {
    // console.log("event-----",event.target)
    const { name, value, type, checked } = event.target


    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked ? [...prev.skills, value] : prev.skills.filter((skills) => skills !== value)
      }))

    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value

      }))
    }




  }


  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(formData)

    setFormData({
      name: "",
      gender: "",
      skills: [""]
    })

  }

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div>

          <label htmlFor='name'> Name :</label>
          <input type="text"
            value={formData.name}
            id="name"
            name="name"
            onChange={handleChange} />

          <br />
          <br />

          <label htmlFor='gender'>Gender :</label>
          <input type="radio"
            value="Male"
            name="gender"
            id="gender"
            checked={formData.gender === "Male"}
            onChange={handleChange} /> Male


          <input type="radio"
            value="Female"
            name="gender"
            id="gender"
            checked={formData.gender === "Female"}
            onChange={handleChange} /> Female


          <br />
          <br />


          <label htmlFor='skills'> Skills :</label>
          <input type="checkbox"
          value="React.js"
          onChange={handleChange} /> React.js


          <input type="checkbox"
          value="Node.js"
          onChange={handleChange} />Node.js


          <input type="checkbox"
          value="Javascript"
          onChange={handleChange} /> Javascript






        </div>

        <button type="submit"> submit </button>
      </form>



    </>
  )
}

export default App
