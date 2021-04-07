import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DateTimePicker } from "@material-ui/pickers";
import Label from "./Label";

const Datepicker = ({ label, date }: any) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(date);
    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            {/* <Label>{label}</Label> */}
            <DateTimePicker
                inputVariant="outlined"
                label={label}
                value={selectedDate}
                variant="inline"
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    );
};

export default Datepicker;
