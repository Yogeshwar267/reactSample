import { Link } from "react-router-dom";

const Button = (title, path) => (
  <Link to={`/${path}`}>
    <button type="button" class="btn btn-primary btn-lg m-2">
      {title}
    </button>
  </Link>
);

export default Button;
