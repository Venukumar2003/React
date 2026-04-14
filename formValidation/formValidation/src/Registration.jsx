import React, { useState } from "react";


const Registration = () => {

    const [errors, setErrors] = useState({})

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        salary: ""
    })



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }




    const handleSubmit = (e) => {
        e.preventDefault();


        let errors = {};

        if (!formData.name) {
            errors.name = "Name is required"

        }
        if (!formData.email) {
            errors.email = "Email is required"

        }
        if (!formData.password) {
            errors.password = "Password is required";

        }else if(formData.password.length <=4){
            errors.password = "Password must be greater than 4 characters"

        }

        if(!formData.role){
            errors.role = "Role is required"
        }


        if (!formData.salary) {
            errors.salary = "Salary is required";

        } else if (formData.salary <= 0) {
            errors.salary = "Salary must be grater than 0"

        }

        if(Object.keys(errors).length > 0){
            setErrors(errors);
            return;
        }


        const submitData = {                     // data storing purpose we created object//
            Name: formData.name,
            "E-Mail": formData.email,
            Password: formData.password,
            Role: formData.role,
            Salary: formData.salary
        }
        console.log(submitData)

setErrors({})          //clearing old errors 

        setFormData({               // after my work is done to clearing data purpose we use this //
            name: "",
            email: "",
            password: "",
            role: "",
            salary: ""

        })
    }


    return (
        <>

            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name"> Name :</label>
                <input type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}

                <label htmlFor="email" > E-Mail :</label>
                <input type="email"
                    placeholder="Enter E-Mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

                <label htmlFor="password"> Password :</label>
                <input type="password"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                />
                {errors.password && <p style={{color:"red"}}>{errors.password}</p>}



                <label htmlFor="role"> Role :</label>
                <input type="text"
                    placeholder="Enter Role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                />
                {errors.role && <p style={{color:"red"}}>{errors.role}</p>}

                <label htmlFor="salary"> Salary :</label>
                <input type="number"
                    placeholder="Enter Salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                />
                {errors.salary && <p style={{color:"red"}}>{errors.salary}</p>}



                <button type="submit" > Register </button>



            </form>


        </>
    )
}

export default Registration;