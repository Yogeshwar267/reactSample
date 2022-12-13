import { useState } from "react";
import SignupButton from "../../Components/features/Signup/SignupButton";
import withLayout from "../../Components/hoc/Header";
import { COMMON } from "../../Shared/Constants";
import { useDispatch, useSelector } from "react-redux";
import "./../../App.css";
import { signup } from "Redux/Actions/Auth";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const signinForm = [
    {
      title: "Name",
      value: name,
      type: "text",
      id: "name",
      placeholder: "Enter name",
      isFocused: true,
      onChange: (e) => setName(e)
    },
    {
      title: "Email",
      value: email,
      type: "text",
      id: "email",
      placeholder: "Enter email",
      isFocused: true,
      onChange: (e) => setEmail(e)
    },
    {
      title: "Password",
      value: password,
      type: "text",
      id: "password",
      placeholder: "Enter password",
      isFocused: true,
      onChange: (e) => setPassword(e)
    },
  ];

  const submit = () => {
    let data = {
      name: name,
      email: email,
      password: parseInt(password),
    }
    dispatch(signup(data,(res)=>{
      console.log(res,"RESPONSE");
    }))
  }

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <form className="form d-flex flex-column">
        <h1 >
          {COMMON.signup}
        </h1>

        {signinForm.map((i) => {
          return (
            <div className="m-1 d-flex flex-column">
              <label title={i.title} >
                {i.title}
              </label>

              <input
                className="form-control"
                type={i.type}
                name={i.value}
                id={i.id}
                placeholder={i.placeholder}
                spellCheck="false"
                onChange={(e) => {
                  i.onChange(e.target.value)
                }}
              />
            </div>
          );
        })}
        <button type="button" class="btn btn-primary btn-lg m-2" onClick={() => submit()}>
          Register
        </button>
      </form>
    </div>
  );
}

export default withLayout(Signup);
