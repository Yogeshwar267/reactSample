import Login from "Views/Login";
import SignUp from "Views/Signup";

export const AUTH_ROUTES = [
  {
    path: "/login",
    component: Login,
    title: "Login",
  },
  {
    path: "/signup",
    component: SignUp,
    title: "Signup",
  },
];
