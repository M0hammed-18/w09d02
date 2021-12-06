const instialState = {
    user: null,
    token: "",
  };

  const signIn = (state = instialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "LOGIN":
        const { user, token } = payload;
        localStorage.setItem("token", token);
        return { user, token };
  
      case "LOGOUT":
        localStorage.clear();
        return payload;
  
      default:
        return state;
    }
  };
  
  export default signIn;