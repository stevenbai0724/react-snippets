import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { dashboardContext, intialDashboard } from "../context/dashboardContext";
import Dashboard from "../views/Dashboard";
import Header from "./Header";

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
        </div>
    );
};

export default App;
