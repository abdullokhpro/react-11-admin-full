import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  let { pathname } = useLocation();
  let isLogin = localStorage.getItem("x-auth-token");

  if (pathname.includes("register") || pathname.includes("admin")) {
    return <></>;
  }

  return (
    <header className="header">
      <h2>Logo</h2>
      <NavLink className="header__link" to={"/"}>
        Home
      </NavLink>
      <NavLink className="header__link" to={"/user"}>
        User
      </NavLink>

      <NavLink
        className="header__link "
        to={isLogin ? "/admin/create" : "/register"}
      >
        {isLogin ? "Account" : "Login"}
      </NavLink>
    </header>
  );
};

export default Navbar;
