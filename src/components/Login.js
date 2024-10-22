import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const message = checkValidData(
      email.current.value,
      password.current.value,
      isSignIn ? null : name.current.value, // Pass name only if not signing in
      isSignIn
    );

    if (message) {
      setErrorMessage(message);
    } else {
      // Form is valid, proceed with your submission logic
      console.log("Form submitted successfully");
      console.log(email.current.value);
      console.log(password.current.value);
      // Placeholder for your submission logic
      setErrorMessage(null); // Clear error message
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
          required // Make it required
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
