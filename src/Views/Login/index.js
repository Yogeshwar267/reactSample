import "./../../App.css";
import Email from "../../Components/features/Login/Form/Email";
import Password from "../../Components/features/Login/Form/Password";
import LoginButton from "../../Components/features/Login/Form/LoginButton";
import withLayout from "../../Components/hoc/Header";
import { COMMON } from "../../Shared/Constants";
import { useDispatch, useSelector } from "react-redux";
import { login, setAuthData } from "Redux/Actions/Auth";
import { logout } from "../../Redux/Actions/Auth";

function Login() {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.authData);

  const submit = () => {
    const data = {
      email: "Developer5@gmail.com",
      password: "123456",
    };
    dispatch(
      login(data, (res) => {
        dispatch(setAuthData(res));
      })
    );
  };
  
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      {authData ? (
        <div className="d-flex flex-column">
          <h1 className="m-3">
            {`Hey ${authData.Name}, you are logged in succesfully.`}
          </h1>
          <h2 className="m-3">
            {`Your ID : ${authData.Id}.`}
          </h2>
          <button
            class="btn btn-primary btn-lg m-2"
            onClick={() => dispatch(logout())}
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <>
          <form className="form d-flex flex-column">
            <h1 className="m-1">{COMMON.login}</h1>
            <Email />
            <Password />
          </form>
          <button class="btn btn-primary btn-lg m-2" onClick={() => submit()}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default withLayout(Login);
