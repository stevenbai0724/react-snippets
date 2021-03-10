import React from "react";
import "./Header.css";
import styled from "styled-components";
import img from "./img/ccs_logo_fb 1.png";
import arrow from "./img/Vector 85 (Stroke).png";

const Button = styled.button`
  background: #026896;
  border-radius: 24px;
  height: 40px;
  color: white;
  border: none;
  padding: 10px;
  width: 280px;
`;
const Button2 = styled.button`
  background: white;
  border-radius: 24px;
  height: 40px;
  border: 2px solid #026896;
  padding: 10px;
  float: right;
  margin-left: 20px;
`;

const Header = () => {
  return (
    <div className="header-container">
      <ul className="search-layer">
        <li>
          <div className="logo">
            <h1>iContribute</h1>
            <h3>We rise by lifting others.</h3>
          </div>
        </li>
        <li>
          <form className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            ></input>
          </form>
        </li>
        <li className="nav-links">
          <a className="dashboard-button">DashBoard</a>
          <img id="profile-pic" src={img} />
        </li>
      </ul>

      <div className="button-container">
        <Button>Create Opportunity</Button>
        <Button2>
          Sort By
          <img id="arrow" src={arrow} />
        </Button2>
        <Button2>
          Opportunity Type
          <img id="arrow" src={arrow} />
        </Button2>
      </div>
    </div>
  );
};

export default Header;
