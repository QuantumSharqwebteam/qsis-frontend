import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "../App.css";

const Form = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const errors = {};
    const formData = new FormData(form.current);

    if (!formData.get("user_name")) {
      errors.user_name = "Name is required";
    }
    if (!formData.get("user_email")) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("user_email"))) {
      errors.user_email = "Email is invalid";
    }
    if (!formData.get("user_phone")) {
      errors.user_phone = "Phone number is required";
    }
    if (!formData.get("user_message")) {
      errors.user_message = "Message is required";
    }

    return errors;
  };

  const handleBtn = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setLoading(true);

    emailjs
      .sendForm("service_wus31ug", "template_2lmtzfn", form.current, {
        publicKey: "3IZqrxM1_UHKFdisy",
      })
      .then(() => {
        toast.success("Message send succesfully!", { duration: 3000 });
        form.current.reset();
        setErrors({});
      })
      .catch((err) => {
        console.log(err.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="flex justify-center items-center"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <form className="flex flex-col space-y-2 w-11/12 md:w-3/4" ref={form}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="user_name"
            className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
          />
          {errors.user_name && (
            <span className="text-red-500">{errors.user_name}</span>
          )}
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
          />
          {errors.user_email && (
            <span className="text-red-500">{errors.user_email}</span>
          )}
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            id="phone"
            name="user_phone"
            className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
          />
          {errors.user_phone && (
            <span className="text-red-500">{errors.user_phone}</span>
          )}
          <label htmlFor="message">Message</label>
          <textarea
            cols="20"
            rows="5"
            placeholder="Feel free to ask!"
            name="user_message"
            id="message"
            className="border border-slate-300 p-1 rounded px-2 text-slate-700
        outline-sky-500 resize-none"
          ></textarea>
          {errors.user_message && (
            <span className="text-red-500">{errors.user_message}</span>
          )}
          <button
            className="bg-emerald-500 py-2 rounded uppercase text-lg text-black font-medium hover:bg-emerald-600 
        transition-all duration-500"
            onClick={handleBtn}
            disabled={loading}
          >
            {loading ? <div className="loading"></div> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
