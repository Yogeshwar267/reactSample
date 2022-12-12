import "./../../App.css";
import Email from "../../Components/features/Login/Form/Email";
import Password from "../../Components/features/Login/Form/Password";
import LoginButton from "../../Components/features/Login/Form/LoginButton";
import withLayout from "../../Components/hoc/Header";
import { COMMON } from "../../Shared/Constants";
import { useDispatch } from "react-redux";
import { login } from "Redux/Actions/Auth";

function Login() {
  const dispatch = useDispatch()
  const submit = () => {
    const data = {
      email: "Email",
      password: "password",
    }
    dispatch(login(data))
  }
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <form className="form d-flex flex-column">
        <h1 className="m-1">
          {COMMON.login}
        </h1>
        <Email />
        <Password />
      </form>
      <button class="btn btn-primary btn-lg m-2" onClick={()=> submit()}>
        Submit
      </button>
    </div>
  );
}

export default withLayout(Login);
