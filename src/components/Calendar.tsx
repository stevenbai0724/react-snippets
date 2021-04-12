import React from "react";
import styled from "styled-components";
import { useStaticState, Calendar as CalendarUI } from "@material-ui/pickers";
import { Paper, ThemeProvider } from "@material-ui/core";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

const CalendarPaper = styled(Paper)`
    overflow: hidden;
    width: fit-content;
    background-color: inherit;
    color: white;
`;

const DayWithDotContainer = styled.div`
    position: relative;
`;

const DateWithDot = styled.div`
    position: absolute;
    height: 0;
    width: 0;
    border: 3px solid;
    border-radius: 5;
    border-color: #ffbc03;
    right: 45.5%;
    transform: translateX(1px);
    top: 73%;
`;

const Calendar = ({
    daysHaveOpportunities,
    selectedDate,
    shouldDisableDate,
    handleSelectDate,
    theme = null,
    disablePast = false,
}: any) => {
    const handleDateChange = (date: any) => {
        handleSelectDate(date.toDate());
    };

    const { pickerProps, wrapperProps } = useStaticState({
        value: selectedDate,
        onChange: handleDateChange,
    });

    function renderDay(
        date: MaterialUiPickersDate,
        _: MaterialUiPickersDate,
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
                <DayWithDotContainer>
                    {dayComponent}
                    <DateWithDot />
                </DayWithDotContainer>
            );
        }
        return dayComponent;
    }

    if (theme === null) {
        return (
            <CalendarPaper elevation={0}>
                <CalendarUI {...pickerProps} renderDay={renderDay} />
            </CalendarPaper>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <CalendarPaper elevation={0}>
                <CalendarUI
                    {...pickerProps}
                    renderDay={renderDay}
                    disablePast={disablePast}
                    shouldDisableDate={shouldDisableDate}
                />
            </CalendarPaper>
        </ThemeProvider>
    );
};

export default Calendar;
