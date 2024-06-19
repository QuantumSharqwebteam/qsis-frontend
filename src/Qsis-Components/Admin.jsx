import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import adminImg from "../assets/admin.svg";

const Admin = () => {
  const [name, setName] = useState();
  const [passwaord, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/login`, { name, passwaord })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-5/6 mx-auto items-center">
      <div className="w-full">
        <img src={adminImg} className="h-[80vh]" alt="adminImg" />
      </div>

      <div>
        <div className="flex justify-center w-full mx-auto">
          <form action="" className="w-5/6 md:w-4/6" onSubmit={handleSubmit}>
            <div className="text-center">
              <h1 className="text-3xl font-semibold mb-1 text-center">Login</h1>{" "}
              <p className="text-slate-600 text-center">Only admin can login</p>
            </div>

            <div className="flex flex-col py-3">
              <label htmlFor="name" className="py-2">
                <h1 className="font-semibold">Name </h1>
              </label>
              <input
                className="border border-slate-400 rounded-md px-2 py-1 "
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
                value={passwaord}
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
