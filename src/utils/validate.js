export const checkValidData = (email, password, name, isSignIn) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[A-Za-z]{1,}([-'\s][A-Za-z]{1,})*$/.test(name);
  
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    if (!isSignIn && !isNameValid) return "Name is not valid";
  
    return null;
  }
  