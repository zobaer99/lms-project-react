import React, { useState } from "react";
import {Lock, Mail, User } from "lucide-react";
function Register() {
 const [form, setForm] = useState({username: "", email: "", password: ""});
 const [message, setMessage] = useState("");
  const handlechange = (e) => {
    setForm({  ...form, [e.target.name]: e.target.value, });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const payload = {
        ...form,
        role: "student",
      };
      const res = await fetch("https://lms-backend-xpwc.onrender.com/api/user/auth/",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Registration successful:", data);
      }
    } catch (error) {
      
    }
  };
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
      <div className="rounded"></div>
      <div className="rounded bg-light-300 lg:col-span-2 shadow-md">
        <div  className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
        <div className="">
          <h2 className="text-xl font-bold text-gray-900 sm:text-xl text-center">Create an Account</h2>
        </div>
        <form onSubmit={handleSubmit} >
          <div className="mb-4 relative">
           
              <User size={22} className=" text-gray-700 absolute left-3 bottom-2" /> 
              <input type="text" name="username" onChange={handlechange}
               id="username" placeholder="Enter your User Name"
              className="mt-0.5 pl-10 pr-3 py-2 text-lg w-full rounded border-gray-300 shadow-sm sm:text-sm" />

          </div>
          <div>
           <div className="relative mb-4">
                 <Mail size={22} className=" text-gray-700 absolute left-3 bottom-2" /> 
                <input
                  type="email" placeholder="Enter your email"
                  id="Email" name="email" onChange={handlechange}
                  className="mt-0.5 pl-10 pr-3 py-2 text-lg w-full rounded border-gray-300 shadow-sm sm:text-sm"/>
                  <span className="absolute inset-y-0 right-0 grid w-8 place-content-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                </span>
              </div>
          </div>
          <div className="mb-4 relative">
           <Lock size={22} className=" text-gray-700 absolute left-3 bottom-2" />
              <input type="password" id="password" onChange={handlechange}
               placeholder="Enter your password" name="password"
              className="mt-0.5 pl-10 pr-3 py-2 text-lg w-full rounded border-gray-300 shadow-sm sm:text-sm"/>
           
          </div>
          <div>
            <button 
             className="w-full inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
            >Register</button>
          </div>
        </form>
        {message && <p className="text-red-500 text-center mt-2">{message}</p>}
        <div>
          <p>
            Already have an account? <a href="/Login">Login here</a>.
          </p>
          <p>
            By registering, you agree to our{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
        </div>
      </div>
      <div className="rounded"></div>
    </div>
    
  );
}

export default Register;
