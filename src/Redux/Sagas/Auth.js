import { takeLatest, all } from "redux-saga/effects";
import { LOGIN, LOGOUT } from "../Actions/Auth";
import requestSaga from "Shared/RequestSaga";
import { API_URLS } from "Services/Api/Constants";

function* logIn({ payload }) {

  try {
    const response = yield postRequest({
      API: API_URLS.LOGIN,
      DATA: payload,
    });
    if (response?.status >= 400 && response?.status <= 500) {
      //handle cases
    } else if (response?.status === 200) {
      console.log("API HIT");
    }
  } catch (error) {
    //handle cases
    console.log("ERROR");
  }
}

function* logOut({ payload }) {
  try {
    const response = yield postRequest({
      API: API_URLS.LOGOUT,
    });
    if (response?.status >= 400 && response?.status <= 500) {
      //handle cases
    } else if (response?.status === 200) {
      console.log("API HIT");
    }
  } catch (error) {
    //handle cases
  }
}

function* watchAuth() {
  yield all([
    takeLatest(LOGIN, logIn),
    takeLatest(LOGOUT, logOut),
  ]);
}

export default watchAuth;
