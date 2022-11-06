import React from "react";
import { useState } from "react";
import { createUser } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);
    // console.log(firstName, lastName);
    // navigate("/");
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-lg-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <form id="register" onSubmit={handleSubmit} className="register-form">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Enter Your First Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Enter Your Last Name"
            required
          />
        </div>

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
            {" "}
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
            value="Register"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
