import Header from "./Header";
import Background from "../assets/bg-img.jpg";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);

  const [errMsg, setErrMsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm);
  };

  const handleClick = () => {
    //validate the form data
    const errMsg = checkValidData(
      isSignedInForm ? null : name.current.value,
      email.current.value,
      password.current.value
    );
    setErrMsg(errMsg);

    // if and error exists return nothing
    if (errMsg) return;

    // else sign in/ sign up

    //sign up logic
    if (!isSignedInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrMsg(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " : " + errorMessage);
        });
    }
    //sign in logic
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " : " + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <img src={Background} alt="" className="object-cover w-screen h-screen" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col w-96 bg-black bg-opacity-85 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-16"
      >
        <h1 className="font-bold text-3xl mb-8">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 bg-transparent outline-1 outline-white outline"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or mobile number"
          className="p-3 my-3 bg-transparent outline-1 outline-white outline"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 bg-transparent outline-1 outline-white outline"
        />
        <p className="text-red-500 mt-1">{errMsg}</p>
        <button
          className="py-2 my-4 bg-red-700 text-xl font-semibold rounded-md"
          onClick={handleClick}
        >
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignedInForm ? (
          <h3 className="text-gray-300">
            New to Netflix?{" "}
            <button onClick={toggleSignInForm} className="text-white font-bold">
              Sign up
            </button>{" "}
            now.
          </h3>
        ) : (
          <h3 className="text-gray-300">
            Already Registered?{" "}
            <button onClick={toggleSignInForm} className="text-white font-bold">
              Sign in
            </button>{" "}
            now.
          </h3>
        )}
      </form>
    </>
  );
};

export default Login;
