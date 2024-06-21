import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import adminImg from "../assets/admin.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(name, email,password);
    e.preventDefault();
    axios
      .post("http://localhost:5000/user/createUser", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 px-3 py-6">
      <div className="px-10 py-5 ">
        <form
          className="w-full md:w-9/12 mx-auto mb-4 md:mb-0"
          onSubmit={handleSubmit}
        >
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Admin Access</h1>{" "}
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="name" className="py-2 font-medium">
              Name
            </label>
            <input
              className="border border-slate-400 rounded-md px-2 py-1"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="email" className="py-2 font-medium">
              Email
            </label>
            <input
              className="border border-slate-400 rounded-md px-2 py-1"
              type="text"
              id="email"
              name="email"
              placeholder="Entter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="flex flex-col py-3">
            <label htmlFor="password" className="py-2 font-medium">
              Password
            </label>
            <input
              className="border border-slate-400 rounded-md px-2 py-1"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 transition duration-300 w-full py-2 my-2 text-black rounded-md uppercase font-medium"
          >
            Create Access
          </button>
        </form>

        {/* <p className="italic text-sm">Already Have an Account</p>

    <Link to={"/login"} className="">
      <button className="bg-blue-700 w-full  py-2 my-2 text-white rounded">Login</button>
      
      </Link> */}
      </div>

      {/* image */}
      <div className="flex justify-center w-full">
        <img
          src={adminImg}
          alt="admin image"
          className="w-[80%] object-contain"
        />
      </div>
    </div>
  );
};

export default Signup;
