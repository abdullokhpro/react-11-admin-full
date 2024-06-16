import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../api";
import "./login.scss";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let user = { username, password };
    setLoading(true);

    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        console.log(res.data);
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin/create");
      })
      .catch((err) => {
        console.log(err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login">
      <h2 className="login__title">Login</h2>

      <form className="login__form" onSubmit={handleLogin} action="">
        <input
          className="login__input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name=""
        />
        <input
          className="login__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
        />
        <button className="login__btn" disabled={loading}>
          {loading ? "Loading..." : "Log in"}
        </button>
      </form>
      <div className="login__buttons">
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default memo(Login);
