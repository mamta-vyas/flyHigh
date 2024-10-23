import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { BACKGROUND_IMAGE } from "../utils/constants";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignIn ? null : name.current.value, // Pass name only if not signing in
      isSignIn
    )
         setErrorMessage(message);

         if(message) return;

        //  sign up logic

if(!isSignIn){
         
createUserWithEmailAndPassword(auth,  
  email.current.value , 
  password.current.value, )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
      console.log(user);
      updateProfile(user, {
        displayName: name.current.value, 
        photoURL: "https://avatars.githubusercontent.com/u/112095415?v=4"
      })
      
      .then(() => {
        // Profile updated!
        const {uid, email, displayName , photoURL } = auth.currentUser;
        dispatch(
          addUser({
          uid: uid, 
          email: email , 
          displayName: displayName, 
          photoURL: photoURL
        })
      );
      navigate("/");
  })
  .catch((error) => {
    setErrorMessage(error.message )
    // ..
  });
})

.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  setErrorMessage(errorCode+ " - " + errorMessage);
});
}
else
{
// Sign In logic
signInWithEmailAndPassword(auth,  
  email.current.value,
  password.current.value,)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log(user);
   })

.catch((error) => {
    // An error occurred
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage)
  });
  // ...
}
};
  
  

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null); // Clear error message on switch
  };

  return (
    <div className='relative h-screen w-screen bg-cover bg-no-repeat bg-center'>
      <div>
        <img
          src={BACKGROUND_IMAGE}
          alt="bg-img"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <form
        onSubmit={handleButtonClick} // Attach submit handler here
        className="flex flex-col absolute inset-0 p-4 w-3/12 h-[60vh] bg-black text-white mt-10 bg-opacity-70 mx-auto right-0 left-0 rounded-lg">
        <h1 className="font-bold text-xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="bg-gray-500 p-2 my-4 w-full text-lg rounded-lg"
            required={!isSignIn} // Ensure it's required if signing up
          />
        )}
        <input
          ref={email}
          type="email" // Use type="email" for better validation
          placeholder="Email Address"
          className="bg-gray-500 p-2 my-4 w-full text-lg rounded-lg"
          required // Make it required
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-gray-500 p-2 my-4 w-full text-lg rounded-lg"
          required 
          autoComplete="current-password"
          // Make it required
        />
        <p className="text-red-500">{errorMessage}</p>

        <button
          type="submit" // Make sure it's a submit button
          className="bg-red-500 p-2 my-4 cursor-pointer rounded-lg font-bold text-xl"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={handleSignIn} className="cursor-pointer">
          {isSignIn
            ? "New To FlyHigh? Sign Up Now"
            : "Already Registered! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
