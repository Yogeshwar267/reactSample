export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const SETAUTHDATA = "SETAUTHDATA"

export const login = (payload,callback) => {
  return {
    type: LOGIN,
    payload,
    callback,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const setAuthData = (payload, callback) => {
  return {
    type: SETAUTHDATA,
    payload,
    callback,
  }
}

export const signup = (payload, callback) => {
  return {
    type: SIGNUP,
    payload,
    callback,
  }
}
