import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/", { state: "Hi" });
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <span onClick={handleNavigateHome} style={{ cursor: "pointer" }}>
              Home
            </span>
          </li>
          <li>
             <Link to="/about" state={{ someKeys: "someValue" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
