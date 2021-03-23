import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { dashboardContext, intialDashboard } from "../context/dashboardContext";
import Dashboard from "../views/Dashboard";
import Header from "./Header/Header";
import Card from "./Card";
import { Grid } from "@material-ui/core"

const App = () => {
    const [dashboard, setDashboard] = useState(intialDashboard);
    const provider = { ...dashboard, setDashboard };
    return (
        <div>
            <Router>
                <dashboardContext.Provider value={provider}>
                    <Header />
                    <Dashboard />
                </dashboardContext.Provider>
            </Router>
            <Grid container style={{paddingLeft: 531, gridGap: 24, background: "#E5E5E5"}}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Grid>
        </div>
    );
};

export default App;
