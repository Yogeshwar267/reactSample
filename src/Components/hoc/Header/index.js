import React from "react";
import HomeButton from "../../features/HomeComponent/HomeButton";
import LoginButton from "../../features/Login/Form/LoginButton";
import SignupButton from "../../features/Signup/SignupButton";

const withLayout = (PageComponent: React.FunctionComponent) => {
  return function WithPage({ ...props }) {
    return (
      <>
        <header class="nav navbar-nav navbar-right">
          <div className="flex flex-grow items-center">
            <div className="flex xs:hidden items-center ml-auto">
              <HomeButton />
              {/* <SignupButton /> */}
              <LoginButton />
            </div>
          </div>
        </header>
        <PageComponent />
      </>
    );
  };
};

export default withLayout;
