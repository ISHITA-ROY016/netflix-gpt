import Logo from "../assets/logo.svg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((Store) => Store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={Logo} alt="logo" className="w-32" />
      {user && (
        <button
          className="border border-solid border-black"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default Header;
