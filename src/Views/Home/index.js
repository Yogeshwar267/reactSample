import "./../../App.css"
import HomeComponent from "../../Components/features/HomeComponent";
import withLayout from "../../Components/hoc/Header";

function Home() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
        <HomeComponent/>
    </div>
  );
}

export default withLayout(Home);
