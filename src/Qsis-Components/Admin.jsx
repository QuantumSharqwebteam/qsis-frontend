import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import adminImg from "../assets/admin.svg";

const Admin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(email,password);
    e.preventDefault();
    axios
      .post(`http://localhost:5000/user`, { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log("you have got some error: " ,err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-full">
        <img src={adminImg} className="h-[80vh]" alt="adminImg" />
      </div>

      <div className="w-full flex justify-center px-3 py-0 md:py-20">
        <div className="bg-white md:px-10 pb-5 rounded w-11/12 md:w-3/5 ">
          <form action="" className="" onSubmit={handleSubmit}>
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-semibold text-center">Login</h3>
              <p className="text-slate-500 text-center">Only admins can login</p>
            </div>

            <div className="flex flex-col py-3">
              <label htmlFor="name" className="py-2">
                <h1 className="font-semibold">Email </h1>
              </label>
              <input
                className="border border-slate-400 rounded-md px-2 py-1 "
                type="text"
                id="name"
                name="name"
                placeholder="Your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col py-3">
              <label htmlFor="password" className="py-2">
                <h1 className="font-semibold">Password </h1>
              </label>
              <input
                className="border border-slate-400 rounded-md px-2 py-1 "
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 transition duration-300 w-full py-2 uppercase my-4 font-medium text-lg rounded-md text-black">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
