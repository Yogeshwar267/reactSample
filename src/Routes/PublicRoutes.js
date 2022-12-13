import Home from '../Views/Home/index';
import Login from "../Views/Login";
import Signup from "../Views/Signup";
import { Link } from "react-router-dom";

export const PUBLIC_ROUTES = [
  {
    path: "/" ,
    component: Home,
    title: "Homepage",
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    title: "login",
    exact: true,
  },
  {
    path: "/signup",
    component: Signup,
    title: "Signup",
  },
];

