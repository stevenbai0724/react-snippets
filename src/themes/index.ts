import { createMuiTheme } from "@material-ui/core";

export const dataTimePickerCalendarTheme = createMuiTheme({
    overrides: {
        MuiPickersCalendar: {
            week: {
                padding: 5,
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                padding: "0px 6px",
            },
            daysHeader: {
                padding: "0px 14px",
            },
            iconButton: {
                backgroundColor: "inherit",
                color: "white",
            },
        },
        MuiPickersDay: {
            day: {
                color: "white",
            },
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
                color: "white !important",
            },
            body1: {
                fontWeight: 800,
            },
        },
    },
});

export const dashboardCalendarTheme = createMuiTheme({
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
