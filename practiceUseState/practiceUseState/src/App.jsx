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




// function App() {
//   const [count, setCount] = useState(0)


//   const [formData, setFormData] = useState({
//     name: "",
//     gender: "",
//     skills: []

//   })

//   const handleChange = (event) => {
//     // console.log("event-----",event.target)
//     const { name, value, type, checked } = event.target


//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         skills: checked ? [...prev.skills, value] : prev.skills.filter((skills) => skills !== value)
//       }))

//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value

//       }))
//     }




//   }


//   const handleSubmitForm = (event) => {
//     event.preventDefault();
//     console.log(formData)

//     setFormData({
//       name: "",
//       gender: "",
//       skills: [""]
//     })

//   }

//   return (
//     <>
//       <form onSubmit={handleSubmitForm}>
//         <div>

//           <label htmlFor='name'> Name :</label>
//           <input type="text"
//             value={formData.name}
//             id="name"
//             name="name"
//             onChange={handleChange} />

//           <br />
//           <br />

//           <label htmlFor='gender'>Gender :</label>
//           <input type="radio"
//             value="Male"
//             name="gender"
//             id="gender"
//             checked={formData.gender === "Male"}
//             onChange={handleChange} /> Male


//           <input type="radio"
//             value="Female"
//             name="gender"
//             id="gender"
//             checked={formData.gender === "Female"}
//             onChange={handleChange} /> Female


//           <br />
//           <br />


//           <label htmlFor='skills'> Skills :</label>
//           <input type="checkbox"
//           value="React.js"
//           onChange={handleChange} /> React.js


//           <input type="checkbox"
//           value="Node.js"
//           onChange={handleChange} />Node.js


//           <input type="checkbox"
//           value="Javascript"
//           onChange={handleChange} /> Javascript






//         </div>

//         <button type="submit"> submit </button>
//       </form>



//     </>
//   )
// }




// function App() {
//   const [count, setCount] = useState(0)


//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")



//   const [error, setError] = useState("")



//   const storeData = () => {

//     if (name === "") {
//       setError("Name is required")
//       return;
//     }

//     if (email === "") {
//       setError("Email is required")
//       return;
//     }

//     if(email !== email.toLowerCase()){
//       setError("Email must in lowercase ")
//       return;
//     }


//     if (!email.includes("@")) {
//       setError("Email is not valid")
//       return;
//     }


//     setError("");




//     const submitData = {
//       Name: { name },
//       Email: { email }
//     }

//     console.log(submitData)
//   }




//   return (
//     <>

//       <label>Name : </label>
//       <input type="text"
//         value={name}
//         onChange={(event) => {
//           console.log("event-----", event.target.value)
//           setName(event.target.value)
//         }} />


//       <label>Email :</label>
//       <input type="email"
//         value={email}
//         onChange={(event) => {
//           console.log("event----", event.target.value)
//           setEmail(event.target.value)
//         }} />



//       <br />
//       <br />



//       <button type="submit" onClick={storeData}> Submit</button>

//       <br />
//       <br />

//       {/* <h2>{error}</h2> */}
//       <p style={{color : "red"}}>{error}</p>

//     </>
//   )
// }





function App() {

  // setting validation purpose 
  const [error, setError] = useState("");




  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    skills: []
  })



  const handleChange = (event) => {
    console.log("event.target------", event)
    const { name, value, checked, type } = event.target;


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



  // const submitFormData = (event) => {
  //   event.preventDefault()
  //   console.log(formData)


  //   if(validationData){
  //     console.log("Form Submitted :",formData)



  //     setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     gender: "",
  //     skills: []

  //   })

  //   }

  // }



  // Adding validations //


  const validationData = () => {

    if (formData.name==="") {
      setError("Name is required")
      return ;

    }

    if (formData.email ==="") {
      setError("Email is required")
      return ;
    }

    if (!formData.email.includes("@")) {
      setError("Email is not valid")
      return ;
    }

    if (formData.email !== formData.email.toLowerCase()) {
      setError("email must be in lowercase")
      return ;

    }

    if (formData.phone==="") {
      setError("Phone number is required")
      return ;
    }
    

    // if (formData.phone !== typeof("number")) {
    //   setError("Enter valid Phone Number")
    //   return ;
    // }

    if(formData.phone.length !== 10){
      setError("Phone number must be in 10 digits only")
      return ;

    }


    if (formData.gender === "") {
      setError("gender is required")
      return ;
    }

    if (formData.skills.length===0) {
      setError("You must select atleast one skills")
      return;
    }


    setError("");
    // return true;




  }



  const submitFormData = (event) => {
    event.preventDefault()
    console.log(formData)

    // console.log("Submitted data successfully")

    if (validationData()) {
      console.log("Form Submitted :", formData)



      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        skills: []

      })

    }

    // console.log("Submitted data successfully")

  }







  return (
    <>

      <form onSubmit={submitFormData}>
        <label htmlFor='name'> Name :</label>
        <input type="text"
          value={formData.name}
          id="name"
          name="name"
          onChange={handleChange} />

        <br />
        <br />



        <label htmlFor='email'> Email :</label>
        <input type="email"
          value={formData.email}
          id="email"
          name="email"
          onChange={handleChange} />

        <br />
        <br />

        <label htmlFor='phone'>Phone Number :</label>
        <input type="number"
          value={formData.phone}
          id="phone"
          name="phone"
          onChange={handleChange} />

        <br />
        <br />


        <label htmlFor='gender'> Gender :</label>
        <input type="radio"
          value="Male"
          id="gender"
          name="gender"
          checked={formData.gender === "Male"}
          onChange={handleChange} /> Male


        <input type="radio"
          value="Female"
          id="gender"
          name="gender"
          checked={formData.gender === "Female"}
          onChange={handleChange} /> Female


        <br />
        <br />

        <label> Skills :</label>
        <input type="checkbox"
          value="React.js"
          checked = {formData.skills.includes("React.js")}
          onChange={handleChange} />React.js


        <input type="checkbox"
          value="Node.js"
          checked = {formData.skills.includes("Node.js")}
          onChange={handleChange} />Node.js


        <input type="checkbox"
          value="Javascript"
          checked = {formData.skills.includes("Javascript")}
          onChange={handleChange} />Javascript


        <input type="checkbox"
          value="Mongodb"
          checked = {formData.skills.includes("Mongodb")}
          onChange={handleChange} />Mongodb

        <br />
        <br />


        <button type="submit" >Submit</button>



        {/* <h2 style={{color : "red"}}>{error}</h2> */}


      </form>


      <p style={{ color: "red" }}>{error}</p>



    </>
  )
}

export default App
