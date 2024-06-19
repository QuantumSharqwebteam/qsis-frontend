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
    <div className="flex">
      <div className="w-1/2 h-[80vh]">
        <img src={adminImg} className="h-[80vh]" alt="adminImg" />
      </div>

      <div className="w-1/2 flex justify-center px-3 py-20">
        <div className="bg-white px-10 py-5 rounded w-3/5 ">
          <form action="" className="" onSubmit={handleSubmit}>
            <h2 className="text-center">
              <strong className="text-3xl font-bold text-center">Login</strong>{" "}
            </h2>

            <p className="italics text-center">
              {" "}
              <i>Only admin can login</i>{" "}
            </p>

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
