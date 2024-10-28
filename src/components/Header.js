// Header.js
import React, { useEffect } from "react";
import { FLYHIGH_LOGO } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removerUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login");
    
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(() => {
 
    const unsubscribe = onAuthStateChanged(auth , (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName , photoURL } = user;
        dispatch(addUser({
          uid: uid, 
          email: email , 
          displayName: displayName, 
          photoURL: photoURL
        })
      );
          navigate("/");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removerUser());
        navigate("/login");
      }
    }); 
  
    // unsubscribe when component unmounts
    return () => unsubscribe();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="relative bg-cyan-900 w-full h-30 flex flex-col z-50">
      <div className="my-2 mx-8 flex justify-between">
        <img
          className="w-[80px] h-[40px] rounded-xl mx-4"
          src={FLYHIGH_LOGO}
          alt="logo"
        />
        {user &&  
        <div>
          <img
            className="w-12 h-12 object-cover rounded-md"
            src={user?.photoURL}
            alt="user_icon"
          />
       
          <button 
          onClick={handleSignOut}
          className="my-2 p-2 font-bold text-white bg-red-500 rounded-xl">
            Sign Out
          </button>
        </div>}
      </div>
      <div className="p-2 mx-6 flex space-x-1">
        <Link
          to="/flights"
          className="p-2 m-0 w-[90px] h-[40px] text-sm text-white bg-blue-600 cursor-pointer rounded-3xl font-bold">
          ✈️ Flights
        </Link>
        <Link
          to="/hotels"
          className="p-2 m-0 w-[90px] h-[40px] text-sm text-white bg-transparent border border-blue-500 cursor-pointer hover:bg-blue-950 rounded-3xl font-bold">
          Hotels
        </Link>
        <Link
          to="/carhire"
          className="p-2 m-0 w-[90px] h-[40px] text-sm text-white bg-transparent border border-blue-500 cursor-pointer hover:bg-blue-950 rounded-3xl font-bold">
          Car Hire
        </Link>
      </div>
    </div>
  );
};

export default Header;
