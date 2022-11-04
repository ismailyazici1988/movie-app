import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="d-flex align-items-center">
            <h5 className="mb-0">Ismail</h5>
            <button className="ms-2 btn btn-outline-dark">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
