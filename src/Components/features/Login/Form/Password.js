import "../../../../App.css";
import { COMMON, PASSWORD_FORM } from "../../../../Shared/Constants";

const Password = () => {
  return (
    <div className="m-1 d-flex flex-column">
      <label title="passwordEmail" >
        {COMMON.password}
      </label>
      <input
        className="form-control"
        type={PASSWORD_FORM.type}
        name={COMMON.password}
        id={PASSWORD_FORM.id}
        placeholder={PASSWORD_FORM.placeholder}
        spellCheck="false"
      />
    </div>
  );
};

export default Password;
