import "../../../../App.css";
import { COMMON, EMAIL_FORM } from "../../../../Shared/Constants";

const Email = () => {
  return (
    <div className="m-1 d-flex flex-column">
      <label title="Email">
        {COMMON.email}
      </label>

      <input
        className="form-control"
        type={EMAIL_FORM.type}
        name={COMMON.email}
        id={EMAIL_FORM.id}
        placeholder={EMAIL_FORM.placeholder}
        spellCheck="false"
        autoComplete="false"
      />
    </div>
  );
};

export default Email;
