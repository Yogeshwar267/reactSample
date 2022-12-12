import { Link } from "react-router-dom";
import { COMMON } from "../../../Shared/Constants";

const HomeButton = () => (
    <Link to="/">
      <button type="button" class="btn btn-primary btn-lg m-2">
        {COMMON.home}
      </button>
    </Link>
  );
  
export default HomeButton;
  