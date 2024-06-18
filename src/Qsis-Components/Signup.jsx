// import React from 'react'
import { useState } from "react"
import {Link} from "react-router-dom"
import axios from "axios"


const Signup = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [passwaord , setPassword] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3001/register", {name, email, passwaord})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }
  return (
    <div className="bg-[#17C6D4] w-full  flex justify-center px-3 py-6">
    <div className="bg-white px-10 py-5 rounded">
    <form  className=" " onSubmit={handleSubmit}>
    <h2 className="text-center">
     <strong className="text-3xl font-bold">Admin Access</strong> </h2>

    <div className="flex flex-col py-3">
    <label htmlFor="name" className="py-2">
      <strong>Name : </strong>
    </label>
    <input className="border border-black rounded px-2 py-1" type="text" id="name" name="name" placeholder="Your Name" required
    onChange={(e) => setName(e.target.value)}
    value={name}
    />
    </div>

    <div className="flex flex-col py-3">
    <label htmlFor="email" className="py-2">
      <strong>Email : </strong>
    </label>
    <input className="border border-black rounded px-2 py-1" type="text" id="email" name="email" placeholder="Entter Email" required 
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    />
    </div>

    <div className="flex flex-col py-3">
    <label htmlFor="password" className="py-2">
      <strong>Password : </strong>
    </label>
    <input className="border border-black rounded px-2 py-1" type="password" id="password" name="password" placeholder="Enter password" required
    onChange={(e) => setPassword(e.target.value)}
    value={passwaord}
    />
    </div>

    <button type="submit" className="bg-green-700 w-full py-2 my-2 text-white rounded">Create Access</button>
    </form>

    {/* <p className="italic text-sm">Already Have an Account</p>

    <Link to={"/login"} className="">
      <button className="bg-blue-700 w-full  py-2 my-2 text-white rounded">Login</button>
      
      </Link> */}

      </div>
  </div>
  )
}

export default Signup