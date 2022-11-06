import React from "react";

const Login = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="form-image d-none d-lg-block">
          <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
        </div>
        <form className="register-form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
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
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
