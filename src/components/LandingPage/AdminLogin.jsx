import React, { useState } from "react";
import Axios from "axios";
import "./adminLogin.scss";

const AdminLogin = () => {
  const [loginState, setLoginState] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://portfolio.oldjimmy.com:8000/login", {
      userName: userName,
      password: password,
    })
      .then(() => {
        alert("success");
      })
      .catch((err) => {
        throw err;
      });
  };

  const openLogin = (e) => {
    e.preventDefault();
    if (loginState) setLoginState(false);
    if (!loginState) setLoginState(true);
  };

  return (
    <div className="admin-login_container">
      <button onClick={openLogin} value={`${loginState ? "active" : ""}`}>
        Login
      </button>
      <form id="login">
        <div className="input-flex" id={`${loginState ? "" : "hidden"}`}>
          <input
            placeholder="Username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button htmlFor="login" onClick={handleSubmit}>
            Go!
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
