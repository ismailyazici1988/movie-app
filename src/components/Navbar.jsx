import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  //   const currentUser = { displayName: "Mark Madison" };
  const currentUser = false;
  return (
    <div>
      <div className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h3>Ninjas Movie App</h3>
          </Link>
          <div className="d-flex align-items-center">
            {currentUser ? (
              <>
                <h5 className="mb-0">{currentUser.displayName}</h5>
                <button className="ms-2 btn btn-outline-dark">Logout</button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="ms-2 btn btn-outline-light"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="ms-2 btn btn-outline-light"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
