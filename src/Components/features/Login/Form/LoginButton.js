import { Link } from "react-router-dom";

const LoginButton = () => (
  <Link to="/login">
    <button type="button" class="btn btn-primary btn-lg m-2">
      Login
    </button>
  </Link>
);

export default LoginButton;
