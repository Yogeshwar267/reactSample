import SignupButton from "../../Components/features/Signup/SignupButton";
import withLayout from "../../Components/hoc/Header";
import { COMMON, SIGNIN_FORM } from "../../Shared/Constants";
import "./../../App.css";

function Signup() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <form className="form d-flex flex-column">
        <h1 >
          {COMMON.signup}
        </h1>
        {SIGNIN_FORM.map((i) => {
          return (
            <div className="m-1 d-flex flex-column">
              <label title={i.value} >
                {i.value}
              </label>

              <input
                className="form-control"
                type={i.type}
                name={i.value}
                id={i.id}
                placeholder={i.placeholder}
                spellCheck="false"
              />
            </div>
          );
        })}
        <SignupButton />
      </form>
    </div>
  );
}

export default withLayout(Signup);
