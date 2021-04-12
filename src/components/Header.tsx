import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import { createStyles, InputBase, makeStyles, Theme } from "@material-ui/core";
import FilterMenu from "./FilterMenu";
import "../assets/css/Header.css";
import img from "../assets/images/ccs_logo_fb 1.png";
import { dashboardContext } from "../context/dashboardContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        appbar: {
            backgroundColor: "white",
            paddingTop: "5px",
            color: "black",
            boxShadow: "0px 4px 50px rgba(48, 48, 48, 0.08)",
        },
        button: {
            backgroundColor: "#026896",
            borderRadius: "24px",
            "&:hover": {
                cursor: "pointer",
            },
            color: "white",
            border: "none",
            fontSize: "16px",
            padding: "10px",
            paddingLeft: "50px",
            paddingRight: "50px",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            width: "40vw",
            maxWidth: "680px",
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            // transition: theme.transitions.create("width"),
            // [theme.breakpoints.up("md")]: {
            // width: "20ch",
            // },
            backgroundColor: "#E7EBEF",
            borderRadius: "24px",
            height: "32px",
        },
        inputRoot: {
            color: "inherit",
        },
        sectionDesktop: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "flex",
            },
        },
        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            marginRight: theme.spacing(2),
            marginLeft: 0,
            // width: "200%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(3),
                // width: "100%",
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
        },
    })
);

const Header = ({ showFilter = true }) => {
    const classes = useStyles();

    const sortByOptions = { des: "Newest", asc: "Oldest" };
    const typeOptions = {
        all: "All Events",
        live: "Live Events",
        draft: "Draft Events",
        past: "Past Events",
    };

    const context = useContext(dashboardContext);
    const { dashboard, setDashboard } = context;
    const { opportunityType, sortBy } = dashboard;

    const typeSelected = (type: string) => {
        setDashboard({ ...dashboard, opportunityType: type });
    };

    const sortBySelected = (sortBy: string) => {
        setDashboard({ ...dashboard, sortBy });
    };

    const history = useHistory();
    const handleCreateOpportunityClick = () => {
        history.push("/new-opportunity");
    };

    return (
        <>
            <div className={classes.grow}>
                <AppBar className={classes.appbar}>
                    <Container fixed>
                        <Toolbar>
                            <div className="logo">
                                <h1>iContribute</h1>
                                <h3 style={{ marginBottom: "2px" }}>
                                    We rise by lifting others.
                                </h3>
                            </div>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{
                                        "aria-label": "search",
                                    }}
                                />
                            </div>
                            <div className={classes.grow} />
                            <div className={classes.sectionDesktop}>
                                <Link to="/" className="dashboard-button">
                                    Dashboard
                                </Link>
                                <img id="profile-pic" src={img} alt="" />
                            </div>
                        </Toolbar>
                        {showFilter ? (
                            <Toolbar>
                                <button
                                    className={classes.button}
                                    onClick={handleCreateOpportunityClick}
                                >
                                    Create Opportunity
                                </button>
                                <div className={classes.grow} />
                                <div className={classes.sectionDesktop}>
                                    <FilterMenu
                                        options={sortByOptions}
                                        selected={sortBy}
                                        setSelected={sortBySelected}
                                    />
                                    <FilterMenu
                                        options={typeOptions}
                                        selected={opportunityType}
                                        setSelected={typeSelected}
                                    />
                                </div>
                            </Toolbar>
                        ) : (
                            ""
                        )}
                    </Container>
                </AppBar>
            </div>
            <Toolbar />
            <Toolbar />
        </>
    );
};

export default Header;
