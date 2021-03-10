import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import Calendar from "./Calendar";

const App = () => {
    return (
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Calendar />
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default App;
