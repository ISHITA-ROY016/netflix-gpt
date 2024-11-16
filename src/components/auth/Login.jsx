import Header from "../layout/Header";
import Background from "../../assets/bg-img.jpg";
import { useRef, useState } from "react";
import { checkValidData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm);
  };

  const handleClick = () => {
    const errMsg = checkValidData(
      isSignedInForm ? null : name.current.value,
      email.current.value,
      password.current.value
    );
    setErrMsg(errMsg);

    if (errMsg) return;

    if (!isSignedInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          }).catch((error) => {
            setErrMsg(error.message);
          });
          console.log(user);
        })
        .catch((error) => {
          setErrMsg(error.code + " : " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          setErrMsg(error.code + " : " + error.message);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={Background}
          alt=""
          className="object-cover w-full h-full absolute inset-0 opacity-80"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative flex flex-col w-11/12 max-w-lg mx-auto bg-black bg-opacity-80 rounded-lg shadow-lg text-white p-8 md:p-12 lg:p-16 transform -translate-y-1/4 lg:-translate-y-1/3 top-1/3 sm:top-1/2 sm:-translate-y-1/2"
        >
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
            {isSignedInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignedInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-red-500"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or mobile number"
            className="p-3 my-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-red-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-red-500"
          />

          {errMsg && <p className="text-red-500 mt-2">{errMsg}</p>}

          <button
            className="py-3 my-4 bg-red-600 hover:bg-red-700 text-lg font-semibold rounded-md transition duration-200 ease-in-out"
            onClick={handleClick}
          >
            {isSignedInForm ? "Sign In" : "Sign Up"}
          </button>

          {isSignedInForm ? (
            <h3 className="text-gray-300 text-sm mt-4">
              New to Netflix?{" "}
              <button
                onClick={toggleSignInForm}
                className="text-white font-bold"
              >
                Sign up
              </button>{" "}
              now.
            </h3>
          ) : (
            <h3 className="text-gray-300 text-sm mt-4">
              Already Registered?{" "}
              <button
                onClick={toggleSignInForm}
                className="text-white font-bold"
              >
                Sign in
              </button>{" "}
              now.
            </h3>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
