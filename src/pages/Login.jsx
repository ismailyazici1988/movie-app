import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(email, password);
    signIn(email, password, navigate);
  };

  const handleProvider = () => {
    signUpProvider(navigate);
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="form-image d-none d-lg-block">
          <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
        </div>
        <form className="register-form" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="submit"
              className="btn btn-dark form-control"
              value="Login"
            />
          </div>
          <div
            className="btn btn-dark form-control"
            onClick={() => handleProvider()}
          >
            Login with Google
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
