import { provider } from "@/lib/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [update,setUpdate] = useState(false)
  const updateFunc = () => {
    setUpdate(!update)
  }
const navigate = useNavigate()
const loginWithGoogle = (event) => {
  // Prevent default behavior (typically used for form submissions or links)
  event.preventDefault();

  const auth = getAuth();  // Get Firebase Auth instance
  const provider = new GoogleAuthProvider();  // Create a Google Auth Provider instance

  // Start sign-in with popup
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;  // Access Token

      // The signed-in user info.
      const user = result.user;  // Firebase user data
      console.log("User: ", user);  // Log user info

      // Optionally log additional user info:
      const additionalUserInfo = result.additionalUserInfo;
      console.log("Additional User Info: ", additionalUserInfo);
      localStorage.setItem("token" , user.uid)
      navigate("/")
      // You can use token or user info as needed
      // For example, you can save token or user details in your app state or localStorage
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error Code:", errorCode);  // Log error code
      console.error("Error Message:", errorMessage);  // Log error message

      // Handle specific error types
      if (errorCode === 'auth/popup-closed-by-user') {
        console.log('User closed the popup.');
      } else {
        console.log('An error occurred during sign-in.');
      }

      // The email of the user's account used (if available)
      const email = error.customData?.email;  // Safe access to customData
      console.log("Email: ", email);

      // The AuthCredential type that was used
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("AuthCredential: ", credential);
    });
};

//  const loginWithGoogle = () =>{
//   event.preventDefault()
//   const auth = getAuth();
//   console.log(auth)
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     console.log({user})
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     console.log(credential , error)
//     // ...
//   });
//  } 
  useEffect(()=>{
       const apiUrl = 'https://restcountries.com/v3.1/all';
       const fetchCountries = async () => {
         try {
           const response = await fetch(apiUrl);
           if (!response.ok) {
             throw new Error(`Error: ${response.status}`);
           }
           const data = await response.json();
          //  setCountries(data);
         } catch (err) {
          //  setError(err.message);
         } finally {
          //  setLoading(false);
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
          <button onClick={loginWithGoogle} className="mt-2  px-4 py-2 border flex  m-auto gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
        <img className="w-6 h-6 " src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Login with Google</span>
    </button>
          {/* <button
            type="submit"
            
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Log In
          </button> */}
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
