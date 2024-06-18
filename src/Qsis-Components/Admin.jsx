// import React from 'react'
import axios from "axios";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"

const Admin = () => {

    const [name, setName] = useState()
    const [passwaord, setPassword] = useState() 
  
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(`http://localhost:3001/login`, {name, passwaord})
      .then(result => {console.log(result)
        if(result.data === "success") {
          navigate('/dashboard')
        } 
      })
      .catch(err => console.log(err))    
    }

  return (
    <div className="bg-[#17C6D4] w-full  flex justify-center px-3 py-20">
    <div className="bg-white px-10 py-5 rounded ">
  <form action="" className="" onSubmit={handleSubmit}>
  <h2 className="text-center">
   <strong className="text-3xl font-bold text-center">Login</strong> </h2>

   <p className="italics text-center"> <i>Only admin can login</i> </p>

  <div className="flex flex-col py-3">
  <label htmlFor="name" className="py-2">
    <strong>Name : </strong>
  </label>
  <input className="border border-black rounded px-2 py-1" type="text" id="name" name="name" placeholder="Your Name" required
  onChange={(e) => setName(e.target.value)}
  value={name}
  />
  </div>

  {/* <div className="flex flex-col py-3">
  <label htmlFor="email" className="py-2">
    <strong>Email : </strong>
  </label>
  <input className="border border-black rounded px-2 py-1" type="text" id="email" name="email" placeholder="Entter Email" required />
  </div> */}

  <div className="flex flex-col py-3">
  <label htmlFor="password" className="py-2">
    <strong>Password : </strong>
  </label>
  <input className="border border-black rounded px-2 py-1" type="password" id="password" name="password" placeholder="Enter password" required
  onChange={(e) => setPassword(e.target.value)}
  value={passwaord}
  />
  </div>

  {/* <button type="submit" className="bg-green-700 w-full py-2 my-2 text-white rounded">Register</button>
  <p className="italic text-sm">Already Have an Account</p> */}

  <button className="bg-green-700 w-full py-2 my-4 text-white rounded">Login</button>

  </form>
  {/* <p className="italic text-sm">Want to signup</p> 
  <Link to={"/signup"} className="">
      <button className="bg-blue-700 w-full  py-2 my-2 text-white rounded">SignUp</button>
      
      </Link> */}
</div>
</div>
  )
}

export default Admin