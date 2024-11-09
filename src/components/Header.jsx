import Logo from "../assets/logo.svg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((Store) => Store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleSearchBtn = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img src={Logo} alt="logo" className="w-32" />
      {user && (
        <div className="flex p-2">
          <button
            className="relative overflow-hidden text-white py-3 px-6 mx-4 my-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:animate-gradient-x hover:from-purple-700 hover:to-pink-600 active:from-purple-800 active:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transform transition-all duration-300 ease-in-out hover:-translate-y-1 will-change-transform"
            onClick={handleSearchBtn}
          >
            <span className="absolute inset-0 bg-purple-900 opacity-0 hover:opacity-20 transition duration-300 pointer-events-none"></span>
            {showGptSearch ? "Browse Movies" : "GPT Search"}
          </button>
          <button
            className="text-white px-6 my-8 rounded-lg  bg-transparent hover:bg-slate-200 hover:bg-opacity-25 border border-transparent hover:border-black hover:border-solid transition duration-200"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
