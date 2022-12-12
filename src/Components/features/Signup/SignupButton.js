import { Link } from "react-router-dom";
import { COMMON } from "../../../Shared/Constants";

const SignupButton = () => (
    <Link to="/signup">
      <button type="button" class="btn btn-primary btn-lg m-2">
        {COMMON.signup}
      </button>
    </Link>
  );

export default SignupButton;
  