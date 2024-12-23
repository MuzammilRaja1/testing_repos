import React, { useEffect, useState } from "react";

const LoginPage = () => {
  const [update,setUpdate] = useState(false)
  const updateFunc = () => {
    setUpdate(!update)
  }
  
  useEffect(()=>{
       const apiUrl = 'https://restcountries.com/v3.1/all';
       const fetchCountries = async () => {
         try {
           const response = await fetch(apiUrl);
           if (!response.ok) {
             throw new Error(`Error: ${response.status}`);
           }
           const data = await response.json();
         } catch (err) {
          
         } 
         finally {

         }
       };
       fetchCountries();
  },[updateFunc])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome Back!
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            onClick={updateFunc}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
