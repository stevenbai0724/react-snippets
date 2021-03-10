import React, { useState } from "react";

import { useStaticState, Calendar as CalendarUI } from "@material-ui/pickers";
import {
    createMuiTheme,
    makeStyles,
    Paper,
    ThemeProvider,
} from "@material-ui/core";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const useStyle = makeStyles((theme) => ({
    paper: {
        overflow: "hidden",
        width: "fit-content",
        backgroundColor: "inherit",
    },
    dayWithDotContainer: {
        position: "relative",
    },
    dateWithDot: {
        position: "absolute",
        height: 0,
        width: 0,
        border: "3px solid",
        borderRadius: 5,
        borderColor: "#FFBC03",
        right: "45.5%",
        transform: "translateX(1px)",
        top: "73%",
    },
}));

const calendarTheme = createMuiTheme({
    spacing: 2,
    overrides: {
        MuiPickersDay: {
            daySelected: {
                backgroundColor: "#FFBC03",
                "&:hover": {
                    backgroundColor: "#FFBC03",
                },
            },
            dayDisabled: {
                color: "#FFBC03",
            },
            current: {
                color: "#FFBC03",
            },
        },
        MuiTypography: {
            caption: {
                color: "black !important",
            },
            body1: {
                fontWeight: 800,
            },
        },
        MuiPickersCalendarHeader: {
            iconButton: {
                backgroundColor: "inherit",
            },
        },
    },
});

const Calendar = () => {
    const classes = useStyle();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const daysHaveOpportunities = [
        new Date("2021-03-01T21:39:46.819Z").toDateString(),
        new Date("2021-03-28T21:39:46.819Z").toDateString(),
    ];

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    console.log(selectedDate.toJSON());

    const { pickerProps, wrapperProps } = useStaticState({
        value: selectedDate,
        onChange: handleDateChange,
    });

    function renderDay(
        date: MaterialUiPickersDate,
        selectedDate: MaterialUiPickersDate,
        dayInCurrentMonth: boolean,
        dayComponent: JSX.Element
    ): JSX.Element {
        if (
            date && // date is not null
            dayInCurrentMonth && // current month
            // the date has at least one opportunity
            daysHaveOpportunities.includes(
                new Date(date.toDate()).toDateString()
            )
        ) {
            return (
                <div className={classes.dayWithDotContainer}>
                    {dayComponent}
                    <div className={classes.dateWithDot} />
                </div>
            );
        }
        return dayComponent;
    }

    return (
        <ThemeProvider theme={calendarTheme}>
            <Paper className={classes.paper} elevation={0}>
                <CalendarUI {...pickerProps} renderDay={renderDay} />
            </Paper>
        </ThemeProvider>
    );
};

export default Calendar;
