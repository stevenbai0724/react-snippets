import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import Header from "./Header/Header";
import Calendar from "./Calendar";
import Card from "./Card";
import { Grid } from "@material-ui/core"

const App = () => {
    return (
        <div >
        <Header />
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Calendar />
            </MuiPickersUtilsProvider>
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
