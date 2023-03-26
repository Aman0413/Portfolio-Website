import React, { useState } from "react";
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../axiosClient/axiosClient";
import { adminLogin } from "../redux/slices/adminSlice";
import { useNavigate } from "react-router";

function Login() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.admin);
  const navigate = useNavigate();
  console.log(state.data);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login(e) {
    e.preventDefault();
    dispatch(adminLogin(name, email, password));
    if (state.data) {
      navigate("/admin");
    }
  }

  return (
    <div className="Login">
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={login}>
            <input
              type="text"
              placeholder="Name"
              required="true"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              required="true"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required="true"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
