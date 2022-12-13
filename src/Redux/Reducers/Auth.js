import { LOGIN, LOGOUT, SETAUTHDATA } from "../Actions/Auth";
import { ACTION_STATES } from "../Actions/ActionStates";

const initialState = {
  token: null,
  authData:null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN : {
      return {
        ...state,
        token: action.token,
      };
    }
    case LOGOUT : {
      return {
        ...state,
        authData: null,
      };
    }
    case SETAUTHDATA : {
      return {
        ...state,
        authData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
