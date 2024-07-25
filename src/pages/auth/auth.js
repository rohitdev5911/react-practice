export const authenticateUser = (email, password) => {
    const validEmail = "rohit@gmail.com";
    const validPassword = "12341234";
  
    if (email === validEmail && password === validPassword) {
      return true;
    } else {
      return false;
    }
  };