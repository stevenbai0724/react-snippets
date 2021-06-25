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
import PopOut from './PopOut'

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
        tutorialButton: {
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
            marginLeft: "20px",
        },
        nextButton: {
            backgroundColor: "#026896",
            borderRadius: "24px",
            "&:hover": {
                cursor: "pointer",
            },
            color: "white",
            border: "none",
            fontSize: "18px",
            padding: "12px",
            paddingLeft: "100px",
            paddingRight: "100px",

            textAlign: 'center',
            marginBottom: '20px',

        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            width: "40vw",
            maxWidth: "680px",
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            // transition: theme.transitions.create("width"),
            // theme.breakpoints.up("md")]: {
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
        h1Style: {
            fontSize: '30px',
            marginTop: '0px',
            textAlign: 'left',
            marginLeft: '70px',
            marginRight: '70px',
        },
        h2Style:{
            fontSize: '20px',
            marginTop: '0px',
            textAlign: 'left',
            marginLeft: '40px',
            marginRight: '40px',
        },
        h3Style: {
            fontSize: '18px',
            marginTop: 'calc(50% +100px)',
            marginLeft: '70px',
            marginRight: '70px',
            left: 'calc(50% - 200px)',
            color: '#736B6B',
            fontWeight: 23,
            textAlign: 'left',
        }, 
        h4Style: {
            fontSize: '18px',
            marginTop: 'calc(50% +100px)',
            marginLeft: '40px',
            marginRight: '40px',
            left: 'calc(50% - 200px)',
            color: '#736B6B',
            fontWeight: 23,
            textAlign: 'left',       
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

    const handleLogoClick = () => {
        history.push("/");
    };

    const [modalOn, toggleModal] = useState(false);
    const [step, setStep] = useState(1);
    return (
        <>
            <div className={classes.grow}>
                <AppBar className={classes.appbar}>
                    <Container fixed>
                        <Toolbar>
                            <div className="logo" onClick={handleLogoClick}>
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

                                <button
                                    className={classes.tutorialButton}
                                    onClick={() => toggleModal(true)}
                                >
                                    Tutorial
                                </button>
                                {/* <button
                                    className={classes.tutorialButton}
                                    onClick={() => setStep(step - step + 1)}
                                >
                                    Reset tutorial 
                                </button> */}

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
            {
                modalOn && step === 1 && (
                    <PopOut
                        modalOpen={modalOn}
                        onClose={() => toggleModal(false)}
                        tutorialStep = {1}
                    >   
                        <>
                        
                        <h1 className={classes.h1Style}>Welcome to iContribute!</h1>
                        <h3 className = {classes.h3Style}>We are excited to have you join us. Let’s show you around while your account is being verified. We’ll take you on a tour to get started!</h3>
                        
                        <button
                            className={classes.nextButton}
                            onClick={() => setStep(step + 1)}
                        >
                            Let's go
                                </button>
                        </>
                    </PopOut>
                )
            }
            {
                modalOn && step === 2 && (
                    <PopOut
                        modalOpen={modalOn}
                        onClose={() => toggleModal(false)}
                        tutorialStep = {2}
                    >   

                    <>
                    <h2 className={classes.h2Style}>Dashboard</h2>
                    <h4 className = {classes.h4Style}> This is the dashboard, where you’ll be able to view your calendar and your different volunteer opportunities. </h4>
                    <button
                        className={classes.nextButton}
                        onClick={() => setStep(step + 1)}
                        
                    >
                        Next 
                    </button>

                    </>
                </PopOut>
                )
            }
            {
                modalOn && step === 3 && (
                    <PopOut
                    modalOpen={modalOn}
                    onClose={() => toggleModal(false)}
                    tutorialStep = {3}
                >   
                    <>
                    <h2 className={classes.h2Style}>Your Profile</h2>
                    <h4 className = {classes.h4Style}>This is where you can click to view your profile. You’ll be able to access your account settings here.</h4>
                    <button
                        className={classes.nextButton}
                        onClick={() => setStep(step + 1)}
                    >
                        Next step
                    </button>
                    </>

                </PopOut>
                )
            }
            {
                modalOn && step === 4 && (
                    <PopOut
                    modalOpen={modalOn}
                    onClose={() => toggleModal(false)}
                    tutorialStep = {4}
                >   
                    <>
                    <h2 className={classes.h2Style}>Create Opportunities</h2>
                    <h4 className = {classes.h4Style}>Here, you can create volunteer opportunities to post as drafts or straight for volunteers to see!</h4>
                    <button
                        className={classes.nextButton}
                        onClick={() => setStep(step + 1)}
                    >
                        Next step
                    </button>
                    </>

                </PopOut>
                )
            }
            {
            modalOn && step === 5 && (
                    <PopOut
                    modalOpen={modalOn}
                    onClose={() => toggleModal(false)}
                    tutorialStep = {5}
                >   
                    <>
                    <h2 className={classes.h2Style}>View Opportunities</h2>
                    <h4 className = {classes.h4Style}>When you’ve created opportunities, they will appear under “Your Opportunities.”</h4>
                    <button
                        className={classes.nextButton}
                        onClick={() => setStep(step + 1)}
                    >
                        Next step
                    </button>
                    </>

                </PopOut>
                )
            }

            {
                modalOn && step === 6 && (
                    <PopOut
                    modalOpen={modalOn}
                    onClose={() => toggleModal(false)}
                    tutorialStep = {6}
                >   
                    <>
                    <h2 className={classes.h2Style}>Calendar</h2>
                    <h4 className = {classes.h4Style}>Your calendar will indicate all the dates that your events are held. </h4>
                    <button
                        className={classes.nextButton}
                        onClick={() => setStep(step + 1)}
                    >
                        Next step
                    </button>
                    </>

                </PopOut>
                )
            }
            {
                modalOn && step === 7 && (
                    <PopOut
                    modalOpen={modalOn}
                    onClose={() => toggleModal(false)}
                    tutorialStep = {7}
                >   
                    <>
                    <h1 className={classes.h1Style}>The Concludes the Tour!</h1>
                    <h3 className = {classes.h3Style}>You’ll only be able to start posting once your organization is verified, though feel free to explore and create drafts for your events!</h3>
                    <button
                        className={classes.nextButton}
                        onClick={() => setStep(step + 1)}
                    >
                        Dashboard
                    </button>
                    </>

                </PopOut>
                )
            }
            
            <Toolbar />
            <Toolbar />
        </>
    );
};

export default Header;
