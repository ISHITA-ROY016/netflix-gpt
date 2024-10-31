import Header from "./Header";
import Background from "../assets/bg-img.jpg";
import { useState } from "react";
const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm);
  };
  return (
    <>
      <Header />
      <img src={Background} alt="" className="object-cover w-screen h-screen" />
      <form
        action=""
        className="absolute flex flex-col w-96 bg-black bg-opacity-85 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-16"
      >
        <h1 className="font-bold text-3xl mb-8">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 bg-transparent outline-1 outline-white outline"
          />
        )}
        <input
          type="email"
          placeholder="Email or mobile number"
          className="p-3 my-3 bg-transparent outline-1 outline-white outline"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 bg-transparent outline-1 outline-white outline"
        />
        <button className="py-2 my-4 bg-red-700 text-xl font-semibold rounded-md">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignedInForm ? (
          <h3 className="text-gray-300">
            New to Netflix? <button onClick={toggleSignInForm} className="text-white font-bold">Sign up</button>{" "}
            now.
          </h3>
        ) : (
          <h3 className="text-gray-300">
            Already Registered?{" "}
            <button onClick={toggleSignInForm} className="text-white font-bold">Sign in</button> now.
          </h3>
        )}
      </form>
    </>
  );
};

export default Login;
