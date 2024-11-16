// Body.jsx
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removedUser } from "../../utils/redux/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removedUser());
        navigate("/");
      }
    });

    // unsubscribes when component unmounts
    return unsubscribe;
  }, []); //empty dependency array => renders when my component loads 1st time

  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};

export default Body;
