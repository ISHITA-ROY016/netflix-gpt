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
        console.log(error);
      });
  };

  const handleSearchBtn = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-full px-4 py-2 bg-gradient-to-b from-black z-20 flex items-center justify-between md:px-10">
      {/* Left Half: Netflix Logo */}
      <div className="flex w-1/2 items-center">
        <img
          src={Logo}
          alt="logo"
          className="w-20 sm:w-24 md:w-28 lg:w-36 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Right Half: Buttons */}
      {user && (
        <div className="flex w-1/2 justify-end items-center space-x-3 md:space-x-5">
          {/* GPT Search Button */}
          <button
            className="relative text-sm text-white md:text-base py-3 px-4 md:px-6 bg-gradient-to-r from-purple-600 to-pink-500 hover:animate-gradient-x hover:from-purple-700 hover:to-pink-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 transform transition-all duration-300 ease-in-out  hover:-translate-y-1 will-change-transform"
            onClick={handleSearchBtn}
          >
            {showGptSearch ? "Browse Movies" : "GPT Search"}
          </button>

          {/* Sign Out Button */}
          <button
            className="text-xs text-white sm:text-sm md:text-base px-3 sm:px-4 py-3 rounded-lg bg-transparent hover:bg-slate-200 hover:bg-opacity-25 border border-transparent hover:border-solid hover:border-white transition duration-200"
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
