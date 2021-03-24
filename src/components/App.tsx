import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { dashboardContext, intialDashboard } from "../context/dashboardContext";
import Dashboard from "../views/Dashboard";
import Header from "./Header";

const useStyles = makeStyles({
    root: {
        background: "#E7EBEF",
    },
});
const App = () => {
    const classes = useStyles();
    const [dashboard, setDashboard] = useState(intialDashboard);
    const provider = { ...dashboard, setDashboard };
    return (
        <div className={classes.root}>
            <Router>
                <Header />
                <Container fixed>
                    <dashboardContext.Provider value={provider}>
                        <Dashboard />
                    </dashboardContext.Provider>
                </Container>
            </Router>
        </div>
    );
};

export default App;
