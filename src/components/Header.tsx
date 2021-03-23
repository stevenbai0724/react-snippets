import React, { useContext } from "react";
import "../assets/css/Header.css";
import styled from "styled-components";
import img from "../assets/images/ccs_logo_fb 1.png";
import { Link } from "react-router-dom";
import FilterMenu from "./FilterMenu";
import { dashboardContext } from "../context/dashboardContext";

const Button = styled.button`
    background: #026896;
    border-radius: 24px;
    height: 40px;
    color: white;
    border: none;
    padding: 10px;
    width: 280px;
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
                    <Link to="/" className="dashboard-button">
                        Dashboard
                    </Link>
                    <img id="profile-pic" src={img} alt="" />
                </li>
            </ul>

            <div className="button-container">
                <Button>Create Opportunity</Button>
                <FilterMenu options={["Newest", "Oldest"]} />
                <FilterMenu
                    options={["Live Events", "Draft Events", "Past Events"]}
                />
            </div>
        </div>
    );
};

export default Header;
