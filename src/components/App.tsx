import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { dashboardContext, intialDashboard } from "../context/dashboardContext";
import Dashboard from "../views/Dashboard";
import Header from "./Header";
import NewOpportunity from "../views/NewOpportunity";

const useStyles = makeStyles({
    root: {
        // background: "#E7EBEF",
        height: "fit-content",
    },
});
const App = () => {
    const classes = useStyles();
    const [dashboard, setDashboard] = useState(intialDashboard);

    return (
        <div className={classes.root}>
            <Router>
                <dashboardContext.Provider value={{ dashboard, setDashboard }}>
                    <Header />
                    <Container fixed>
                        <Route exact path="/" component={Dashboard} />
                        <Route
                            exact
                            path="/new-opportunity"
                            component={NewOpportunity}
                        />
                    </Container>
                </dashboardContext.Provider>
            </Router>
        </div>
    );
};

export default App;
