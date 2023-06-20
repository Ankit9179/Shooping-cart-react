import React from "react";
import { Link } from "react-router-dom";

const Header = ({ count }) => {
  return (
    <>
      <div className="header-container">
        <div>
          <h3>
            <Link to={"https://www.linkedin.com/in/ankit-rahi-563752258/"}>
              Shooping-C
            </Link>
          </h3>
        </div>
        <div>
          <h5>
            <Link to={"/"}>Home</Link>
          </h5>
        </div>
        <div>
          <Link to={"/c-list"}>
            Cart
            <sup>{count}</sup>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
