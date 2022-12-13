export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_VERSION = process.env.REACT_APP_API_VERSION;

export const API_URLS = {
  LOGIN: "http://restapi.adequateshop.com/api/authaccount/login",
  LOGOUT: "http://restapi.adequateshop.com/api/authaccount/logout",
  SIGNUP:"http://restapi.adequateshop.com/api/authaccount/registration",
};

export const STATUS_CODES = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};
