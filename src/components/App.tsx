import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { dashboardContext, intialDashboard } from "../context/dashboardContext";
import Dashboard from "../views/Dashboard";
import Header from "./Header";
import Stepper from "./Stepper";

const useStyles = makeStyles({
    root: {
        background: "#E7EBEF",
    },
});
const App = () => {
    const classes = useStyles();
    const [dashboard, setDashboard] = useState(intialDashboard);

    const steps = [
        {
            name: "Application Details",
            active: true,
            completed: true,
        },
        {
            name: "Basic Details",
            active: false,
            completed: false,
        },
        {
            name: "Opportunity Details",
            active: false,
            completed: false,
        },
        {
            name: "Review",
            active: false,
            completed: false,
        },
    ];

    return (
        <div className={classes.root}>
            <Router>
                <dashboardContext.Provider value={{ dashboard, setDashboard }}>
                    <Header />
                    <Container fixed>
                        <Stepper steps={steps} />
                        {/* <Dashboard /> */}
                    </Container>
                </dashboardContext.Provider>
            </Router>
        </div>
    );
};

export default App;
