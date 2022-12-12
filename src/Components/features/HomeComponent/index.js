import { Link } from "react-router-dom";
import "../../../App.css";
import { COMMON } from "../../../Shared/Constants";
import { IMAGES } from "../../../Shared/Images";

const HomeComponent = () => (
  <div className="m-1 d-flex flex-column">
    <p className="display-2">
      {COMMON.projectName}
    </p>
    <img className="img-fluid." width={"80%"} src={IMAGES.React_Logo} />
  </div>
);

export default HomeComponent;
